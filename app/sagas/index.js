// @flow
import {
  call,
  put,
  take,
  actionChannel,
  fork,
  takeEvery,
  takeLatest,
  select,
  all,
  delay,
} from "redux-saga/effects";
import _ from "lodash";
import FileSaver from "file-saver";
import * as actions from "actions";
import * as reducers from "reducers";
import Witness from "lib/Witness";
import User from "lib/User";
import Annotation, { ANNOTATION_TYPES } from "lib/Annotation";
import AnnotatedText, {
  WORKING_VERSION_ANNOTATION_ID,
} from "lib/AnnotatedText";
import * as TextStore from "state_helpers/TextStore";
import { updateIntl } from "react-intl-redux";
import Cookies from "js-cookie";
import { i18n_cookie_name } from "i18n";
import { compare as tibetanCompare } from "tibetan-sort-js";
import getWitnessAnnotatedText from "reducers/getWitnessAnnotatedText";
import type { TextExporter } from "lib/TextExporter";
import PlainTextExporter from "lib/PlainTextExporter";
import DocxExporter from "lib/DocxExporter";

import * as api from "api";
import { BATCH } from "redux-batched-actions";

import * as constants from "app_constants";

import type { Saga } from "redux-saga";
import { fetchTexts } from "../api";

/**
 * Get the required delay for a failed request.
 *
 * @param {number} attempt - the number of attempts that have occurred so far
 * @return {number} The length of delay in milliseconds
 */
function getDelay(attempt) {
  let seconds = 0;
  switch (attempt) {
    case 1:
      seconds = 5;
      break;
    case 2:
      seconds = 10;
      break;
    case 3:
      seconds = 15;
      break;
    case 4:
      seconds = 30;
      break;
    case 5:
      seconds = 60;
      break;
    default:
      seconds = 120;
  }

  return seconds * 1000;
}

// Type of action used to add callbacks to the request queue.
const SAGA_REQUEST = "SAGA_REQUEST";

/**
 * Sets up a serial queue for requests using the API.
 *
 * Any actions of type SAGA_REQUEST will get processed.
 *
 * The actions needs the following properties:
 * payload: a generator function to be called
 * action: action to be given as an argument to the payload function
 *
 * Any requests failing due to a network error, e.g. the user is offline,
 * will be retried indefinitely until the request is processed. This should
 * make the app more robust in flaky network conditions.
 */
function* watchRequests() {
  const requestChan = yield actionChannel(SAGA_REQUEST);
  while (true) {
    const { payload, action } = yield take(requestChan);
    let complete = false;
    let attempts = 0;
    while (!complete) {
      try {
        yield payload(action);
        complete = true;
      } catch (e) {
        if (e.response) {
          // if there was a valid HTTP error status code returned just fail now.
          // e.g. returning a 4xx, 5xx.
          console.warn("Queued request failed: %o", e);
          complete = true;
        } else {
          // otherwise, assume network is down and user is offline.
          // Try again after reqDelay milliseconds.
          attempts++;
          const reqDelay = getDelay(attempts);
          yield delay(reqDelay);
        }
      }
    }
  }
}

/**
 * Returns a generator function that adds callback to the SAGA_REQUEST queue.
 * @param callback
 * @return {Function}
 */
function reqAction(callback): (actions.Action) => Generator<*, *, *> {
  return function* (action: actions.Action): Generator<*, *, *> {
    yield put({
      type: SAGA_REQUEST,
      payload: callback,
      action: action,
    });
  };
}

function applyAnnotation(action: actions.AppliedAnnotationAction): Promise<*> {
  return (call(
    api.applyAnnotation,
    action.annotationId,
    action.witnessData
  ): any);
}

function* watchAppliedAnnotation() {
  yield takeEvery(
    actions.APPLIED_ANNOTATION,
    typeCalls[actions.APPLIED_ANNOTATION]
  );
}

function removeAppliedAnnotation(
  action: actions.RemovedAppliedAnnotationAction
) {
  return call(
    api.removeAppliedAnnotation,
    action.annotationId,
    action.witnessData
  );
}

function* watchRemovedAppliedAnnotation() {
  yield takeEvery(
    actions.REMOVED_APPLIED_ANNOTATION,
    typeCalls[actions.REMOVED_APPLIED_ANNOTATION]
  );
}

function removeDefaultAnnotation(
  action: actions.RemovedDefaultAnnotationAction
) {
  return call(
    api.removeDefaultAnnotation,
    action.annotationId,
    action.witnessData
  );
}

function* watchRemovedDefaultAnnotation() {
  yield takeEvery(
    actions.REMOVED_DEFAULT_ANNOTATION,
    typeCalls[actions.REMOVED_APPLIED_ANNOTATION]
  );
}

function appliedDefaultAnnotation(
  action: actions.AppliedDefaultAnnotationAction
) {
  return call(
    api.applyDefaultAnnotation,
    action.annotationId,
    action.witnessData
  );
}

function* watchAppliedDefaultAnnotation() {
  yield takeEvery(
    actions.APPLIED_DEFAULT_ANNOTATION,
    typeCalls[actions.APPLIED_DEFAULT_ANNOTATION]
  );
}

// INITIAL DATA

export function* loadTexts(): Saga<void> {
  try {
    const texts = yield call(api.fetchTexts);
    if (texts) {
      texts.sort((a: api.TextData, b: api.TextData) =>
        tibetanCompare(a.name, b.name)
      );
    }
    yield put(actions.loadedTexts(texts));
  } catch (e) {
    console.log("FAILED loadTexts! %o", e);
  }
}

function* loadSources() {
  try {
    const sources = yield call(api.fetchSources);
    yield put(actions.loadedSources(sources));
  } catch (e) {
    console.log("FAILED loadSources! %o", e);
  }
}
function* loadTextInfo() {
  try {
    let texts = yield call(api.fetchChapterDetail);
    let setTextData = actions.setTextData(texts);
    yield put(setTextData);
  } catch (e) {
    console.log("FAILED loadTextInfo! %o", e);
  }
}
function* loadInitialData(): Saga<void> {
  yield all([call(loadTexts), call(loadSources), call(loadTextInfo)]);
  yield put(actions.loadedInitialData());
}

export function* watchLoadInitialData(): any {
  yield takeEvery(
    actions.LOAD_INITIAL_DATA,
    typeCalls[actions.LOAD_INITIAL_DATA]
  );
  yield put(actions.loadingInitialData());
}

// SELECTED TEXT

function* selectedText(action: actions.SelectedTextAction): Saga<void> {
  if (action.text === null) return;
  yield put(actions.loadingWitnesses(action.text));
  yield all([call(loadInitialTextData, action)]);
}

function* watchSelectedText(): Saga<void> {
  yield takeEvery(actions.SELECTED_TEXT, selectedText);
}

function* selectedText2(action: actions.SelectedTextAction): Saga<void> {
  if (action.text === null) return;
  yield put(actions.loadingWitnesses2(action.text));
  yield all([call(loadInitialTextData2, action)]);
}

function* watchSelectedText2(): Saga<void> {
  yield takeEvery(actions.SELECTED_TEXT2, selectedText2);
}

// WITNESSES
function* loadInitialTextData(action: actions.TextDataAction) {
  try {
    const textId = action.text.id;
    let witnesses = yield call(api.fetchTextWitnesses, action.text);
    yield put(actions.loadedWitnesses(action.text, witnesses));
    let workingWitnessData: api.WitnessData | null = null;
    let baseWitnessData: api.WitnessData | null = null;
    for (const witness of witnesses) {
      if (witness.is_working) {
        workingWitnessData = witness;
      }
      if (witness.is_base) {
        baseWitnessData = witness;
      }
    }
    yield call(loadAlignmentData, action, textId);

    if (workingWitnessData) {
      const workingWitness: Witness = yield (select(
        reducers.getWitness,
        workingWitnessData.id
      ): any);

      yield put(actions.loadingWitnessAnnotations(workingWitness.id));
      yield all([
        call(loadAnnotations, workingWitness.id),
        call(loadAnnotationOperations, workingWitness.id),
      ]);
      yield put(actions.changeSelectedRange({ source: [], target: [] }));
      // auto-select the working witness
      yield put(actions.selectedTextWitness(action.text.id, workingWitness.id));
    }
  } catch (e) {
    console.log("FAILED loadInitialTextData %o", e);
  }
}

function* selectedWitness(action: actions.SelectedTextWitnessAction) {
  const witnessId = action.witnessId;
  const hasLoadedAnnotations = yield select(
    reducers.hasLoadedWitnessAnnotations,
    witnessId
  );
  if (!hasLoadedAnnotations) {
    yield call(loadWitnessAnnotations, action);
  }
  const hasLoadedAlignments = yield select(
    reducers.hasLoadedAlignments,
    witnessId
  );
  if (!hasLoadedAlignments) {
    let AlignmentData = yield select(reducers.getAlignment);
    yield call(loadTextAlignment, action, AlignmentData);
    yield call(loadVideoData, action, AlignmentData);
  }
  let selectedWitness = yield select(reducers.getSelectedTextWitness);

  let urlAction = {
    type: actions.TEXT_URL,
    payload: {
      textId: action.textId,
      witnessId: selectedWitness?.id,
    },
  };
  let witness = yield select(reducers.getWitness, witnessId);

  let activeAnnotation = yield select(reducers.getActiveTextAnnotation);

  if (
    activeAnnotation &&
    activeAnnotation.witness.text.id === witness.text.id
  ) {
    urlAction.payload.annotation = getAnnotationSlug(activeAnnotation);
  }
  yield put(urlAction);
  yield call(loadImageData, action);
}

function* watchSelectedTextWitness() {
  yield takeEvery(actions.SELECTED_WITNESS, selectedWitness);
}

// WITNESSES 2

function* loadInitialTextData2(action: actions.TextDataAction) {
  try {
    let witnesses2 = yield call(api.fetchTextWitnesses, action.text);
    yield put(actions.loadedWitnesses2(action.text, witnesses2));
    let workingWitnessData: api.WitnessData | null = null;
    let baseWitnessData: api.WitnessData | null = null;
    for (const witness of witnesses2) {
      if (witness.is_working) {
        workingWitnessData = witness;
      }
      if (witness.is_base) {
        baseWitnessData = witness;
      }
    }
    if (workingWitnessData) {
      const workingWitness: Witness = yield (select(
        reducers.getWitness2,
        workingWitnessData.id
      ): any);

      // yield put(actions.loadingWitnessAnnotations2(workingWitness.id));
      yield all([
        // call(loadAnnotations2, workingWitness.id),
        // call(loadAnnotationOperations2, workingWitness.id),
      ]);
      // auto-select the working witness

      // yield put(
      //     actions.selectedTextWitness2(action.text.id, workingWitness.id)
      // );
    }
    const workingWitness: Witness = yield (select(
      reducers.getWitness2,
      workingWitnessData.id
    ): any);
    yield put(actions.selectedTextWitness2(action.text.id, workingWitness.id));
  } catch (e) {
    console.log("FAILED loadInitialTextData2     %o", e);
  }
}

function* selectedWitness2(action: actions.SelectedTextWitnessAction) {
  const witnessId = action.witnessId;
  const textId = action.textId;
  let witness = yield select(reducers.getWitness, witnessId);

  const hasLoadedAnnotations2 = yield select(
    reducers.hasLoadedWitnessAnnotations2,
    witnessId
  );

  if (!hasLoadedAnnotations2) {
    yield call(loadWitnessAnnotations2, action);
  }
}

function* watchSelectedTextWitness2() {
  yield takeEvery(actions.SELECTED_WITNESS2, selectedWitness2);
}

// ANNOTATIONS
function* loadAnnotations(witnessId: number) {
  const witnessData = yield select(reducers.getWitnessData, witnessId);
  if (witnessData) {
    const annotations = yield call(api.fetchWitnessAnnotations, witnessData);

    yield put(actions.loadedWitnessAnnotations(witnessId, annotations));
  }
}

function* loadAnnotations2(witnessId: number) {
  const witnessData = yield select(reducers.getWitnessData2, witnessId);
  const annotations = yield call(api.fetchWitnessAnnotations, witnessData);

  // const annotations = [];

  yield put(actions.loadedWitnessAnnotations2(witnessId, annotations));
}

function* loadAnnotationOperations(witnessId: number) {
  const user = yield select(reducers.getUser);
  if (user.isLoggedIn) {
    const witnessData = yield select(reducers.getWitnessData, witnessId);
    const operationsData = yield call(
      api.fetchUserAnnotationOperations,
      witnessData
    );
    yield put(
      actions.loadedWitnessAnnotationOperations(witnessId, operationsData)
    );
  } else {
    yield put(actions.loadedWitnessAnnotationOperations(witnessId, []));
  }
}

function* loadAnnotationOperations2(witnessId: number) {
  const user = yield select(reducers.getUser);
  if (user.isLoggedIn) {
    const witnessData = yield select(reducers.getWitnessData2, witnessId);
    const operationsData = yield call(
      api.fetchUserAnnotationOperations,
      witnessData
    );
    yield put(
      actions.loadedWitnessAnnotationOperations2(witnessId, operationsData)
    );
  } else {
    yield put(actions.loadedWitnessAnnotationOperations2(witnessId, []));
  }
}

function* loadWitnessAnnotations(action: actions.WitnessAction) {
  yield put(actions.loadingWitnessAnnotations(action.witnessId));
  yield all([
    call(loadAnnotations, action.witnessId),
    call(loadAnnotationOperations, action.witnessId),
  ]);
}

function* loadWitnessAnnotations2(action: actions.WitnessAction) {
  yield put(actions.loadingWitnessAnnotations2(action.witnessId));
  yield all([
    call(loadAnnotations2, action.witnessId),
    call(loadAnnotationOperations2, action.witnessId),
  ]);
}

function* watchLoadAnnotations() {
  yield takeEvery(actions.LOAD_WITNESS_ANNOTATIONS, loadWitnessAnnotations);
}

function* watchLoadAnnotations2() {
  yield takeEvery(actions.LOAD_WITNESS_ANNOTATIONS2, loadWitnessAnnotations2);
}

function createAnnotation(action) {
  return call(api.createAnnotation, action.annotation);
}

function* watchCreatedAnnotation() {
  yield takeEvery(
    actions.CREATED_ANNOTATION,
    typeCalls[actions.CREATED_ANNOTATION]
  );
}

function updateAnnotation(action) {
  return call(api.updateAnnotation, action.annotation);
}

function* watchUpdatedAnnotation() {
  yield takeEvery(
    actions.UPDATED_ANNOTATION,
    typeCalls[actions.UPDATED_ANNOTATION]
  );
}

function deleteAnnotation(action) {
  return call(api.deleteAnnotation, action.annotation);
}

function* watchDeletedAnnotation() {
  yield takeEvery(
    actions.DELETED_ANNOTATION,
    typeCalls[actions.DELETED_ANNOTATION]
  );
}

function createQuestion(action) {
  return call(
    api.createQuestion,
    action.annotation,
    action.title,
    action.content
  );
}

function* watchCreatedQuestion() {
  yield takeEvery(
    actions.CREATED_QUESTION,
    typeCalls[actions.CREATED_QUESTION]
  );
}

function* loadQuestion(action) {
  let isLoading = yield select(reducers.questionIsLoading, action.annotation);
  if (!isLoading) {
    yield put(actions.loadingQuestion(action.annotation));
    const results = yield call(api.getQuestion, action.annotation);
    yield put(actions.loadedQuestion(action.annotation, results));
  }
}

function* watchLoadQuestion() {
  yield takeEvery(actions.LOAD_QUESTION, typeCalls[actions.LOAD_QUESTION]);
}

function* changeActiveAnnotation(
  action: actions.ChangedActiveAnnotationAction
) {
  const selectedWitness = yield select(reducers.getSelectedTextWitness);
  let urlAction = {
    type: actions.TEXT_URL,
    payload: {
      textId: selectedWitness?.text.id,
      witnessId: selectedWitness.id,
    },
  };
  if (action.annotation) {
    let annotation = action.annotation;
    let annotationSlug = getAnnotationSlug(annotation);
    urlAction.payload.annotation = annotationSlug;
  }

  yield put(urlAction);
}

function* watchChangedActiveAnnotation() {
  yield takeEvery(
    actions.CHANGED_ACTIVE_TEXT_ANNOTATION,
    typeCalls[actions.CHANGED_ACTIVE_TEXT_ANNOTATION]
  );
}

function getAnnotationSlug(annotation: Annotation): string {
  let annotationSlug = annotation.start + "-" + annotation.length;
  if (annotation.isSaved) {
    annotationSlug += "-" + annotation.uniqueId.substr(0, 8);
  }
  return annotationSlug;
}

// I18N

function* selectLocale(action: actions.Action) {
  const locale: string = String(action.payload);
  const localeData = yield select(reducers.getLocaleData, locale);
  console.log(locale);
  const user: User = yield select(reducers.getUser);
  if (user.isLoggedIn) {
    yield call(api.setUserLocale, user, locale);
  }
  yield call(Cookies.set, i18n_cookie_name, locale);

  yield put(
    updateIntl({
      locale: locale,
      messages: localeData.messages,
      key: locale,
    })
  );
}

function* watchSelectedLocale() {
  yield takeEvery(actions.SELECTED_LOCALE, selectLocale);
}

// EXPORT

function* exportWitness(action: actions.ExportWitnessAction) {
  const witness = yield select(reducers.getWitness, action.witnessId);
  const format = action.format;
  const annotatedText = yield select(getWitnessAnnotatedText, witness.id);
  const text = annotatedText.textInfo;

  let extension;
  let exporter: TextExporter;
  switch (format) {
    case "docx":
      exporter = new DocxExporter();
      extension = "docx";
      break;
    case "txt":
    default:
      exporter = new PlainTextExporter();
      extension = "txt";
  }
  let filename = text.name + " - " + witness.source.name + "." + extension;

  const file = yield call([exporter, exporter.export], annotatedText, filename);
  FileSaver.saveAs(file, filename);

  yield put(actions.exportedWitness(witness.id, format));
}

function* watchExportWitness() {
  yield takeEvery(actions.EXPORT_WITNESS, exportWitness);
}

// SEARCH

function* searchTexts(action: actions.ChangedSearchValueAction) {
  const selectedText = yield select(reducers.getSelectedText);
  yield delay(500);
  const results = yield call(
    api.searchText,
    selectedText?.id,
    action.searchValue,
    constants.MAX_SEARCH_RESULTS
  );
  yield put(actions.updatedSearchResults(action.searchValue, results));
}

function* watchChangedSearchValue() {
  yield takeLatest(actions.CHANGED_SEARCH_VALUE, searchTexts);
}
function* searchTexts2(action: actions.ChangedSearchValueAction) {
  const selectedText = yield select(reducers.getSelectedText2);

  yield delay(500);
  const results = yield call(
    api.searchText,
    selectedText?.id,
    action.searchValue,
    constants.MAX_SEARCH_RESULTS
  );
  yield put(actions.updatedSearchResults2(action.searchValue, results));
}

function* watchChangedSearchValue2() {
  yield takeLatest(actions.CHANGED_SEARCH_VALUE2, searchTexts2);
}

function* searchedText(action: actions.SearchedTextAction) {
  const results = yield call(api.searchText, action.textId, action.searchValue);
  yield put(actions.updatedSearchResults(action.searchValue, results));
}

function* watchSearchedText() {
  yield takeLatest(actions.SEARCHED_TEXT, searchedText);
}

// SETTINGS

function* loadUserSettings(action: actions.UserAction) {
  const user = yield select(reducers.getUser);
  if (user) {
    const settings = yield call(api.fetchUserSettings, user);
    yield put(actions.loadedUserSettings(settings));
  }
}

function* watchUserLoggedIn() {
  yield takeEvery(actions.USER_LOGGED_IN, loadUserSettings);
}

function* changedTextListWidth(action: actions.ChangedTextListWidth) {
  const width = action.width;
  yield call(Cookies.set, constants.TEXT_LIST_WIDTH_COOKIE, width);
}

function* watchChangedTextListWidth() {
  yield takeLatest(actions.CHANGED_TEXT_LIST_WIDTH, changedTextListWidth);
}

function* changedShowPageImages(action: actions.ChangedShowPageImagesAction) {
  const user = yield select(reducers.getUser);
  if (user.isLoggedIn) {
    yield call(api.setUserSettings, user, {
      showPageImages: action.showPageImages,
    });
  }
}

function* watchChangedShowPageImages() {
  yield takeLatest(actions.CHANGED_SHOW_PAGE_IMAGES, changedShowPageImages);
}

function* changedTextFontSize(action: actions.ChangedTextFontSizeAction) {
  const user = yield select(reducers.getUser);
  if (user.isLoggedIn) {
    yield call(api.setUserSettings, user, {
      textFontSize: action.fontSize,
    });
  }
}

function* watchChangedTextFontSize() {
  yield takeLatest(actions.CHANGED_TEXT_FONT_SIZE, changedTextFontSize);
}

// BATCHED ACTIONS

function* dispatchedBatch(action): Saga<void> {
  const actions = action.payload;
  for (let i = 0; i < actions.length; i++) {
    const batchedAction = actions[i];
    if (typeCalls.hasOwnProperty(batchedAction.type)) {
      yield fork(typeCalls[batchedAction.type], batchedAction);
    }
  }
}

function* watchBatchedActions() {
  yield takeEvery(BATCH, dispatchedBatch);
}

// URLS
// loadedTextUrl should only be called when first loading
let _loadedTextUrl = false;

function* loadedTextUrl(
  action: actions.TextUrlAction,
  t = null,
  w = null,
  t2 = null,
  w2 = null
) {
  if (_loadedTextUrl) {
    return;
  }
  _loadedTextUrl = true;
  if (action) {
    let textId = action.payload.textId;
    let witnessId = action.payload.witnessId || w;
    let textId2 = textId;
    let witnessId2 = witnessId;
    if (t !== null) textId = t;
    if (w !== null) witnessId = w;
    if (t2 !== null) textId2 = t2;
    if (w2 !== null) witnessId2 = w2;
    let textData: api.TextData;
    let textData2: api.TextData;

    do {
      textData = yield select(reducers.getText, textId, true);
      if (!textData) yield delay(100);
    } while (textData === null);
    const selectedTextAction = actions.selectedText(textData);
    // console.log(witnessId, "initial");

    // Wait until the initial text witness has been selected.
    // Otherwise a race condition can happen when the initial witness
    // gets selected after the url-defined witness.

    if (textId2 !== null) {
      do {
        textData2 = yield select(reducers.getText2, textId2, true);
        if (!textData2) yield delay(100);
      } while (textData2 === null);
    }
    let selectedTextAction2 = actions.selectedText2(textData2);
    yield put(selectedTextAction);
    yield put(selectedTextAction2);

    let textWitnesses: Array<Witness> = [];
    do {
      textWitnesses = yield select(reducers.getTextWitnesses, textId);
      if (textWitnesses.length === 0) yield delay(100);
    } while (textWitnesses.length === 0);

    let selectedWitnessId;
    do {
      selectedWitnessId = yield select(
        reducers.getSelectedTextWitnessId,
        textId
      );
      if (!selectedWitnessId) yield delay(100);
    } while (!selectedWitnessId);
    const selectedWitnessAction = actions.selectedTextWitness(
      textId,
      witnessId
    );
    yield put(selectedWitnessAction);

    let witnesses2 = null;
    if (witnesses2 === null)
      witnesses2 = yield call(api.fetchTextWitnesses, textData2);

    yield put(actions.loadedWitnesses2(textData2, witnesses2));

    if (action.payload.annotation) {
      let matches = /([0-9]+)-([0-9]+)-?(.+)?/.exec(action.payload.annotation);
      let start, length, uniqueIdSegment;
      if (matches) {
        if (matches[1]) start = Number(matches[1]);
        if (matches[2]) length = Number(matches[2]);
        if (matches[3]) uniqueIdSegment = matches[3];

        if (!start || !length) return;

        let loadedAnnotations;
        let loadedAppliedAnnotations;
        do {
          loadedAnnotations = yield select(
            reducers.hasLoadedWitnessAnnotations,
            witnessId
          );
          loadedAppliedAnnotations = yield select(
            reducers.hasLoadedWitnessAppliedAnnotations,
            witnessId
          );
          if (!loadedAnnotations || !loadedAppliedAnnotations) {
            yield delay(100);
          }
        } while (
          loadedAnnotations === false ||
          loadedAppliedAnnotations === false
        );

        let user = yield select(reducers.getUser);
        const selectedWitness = yield select(reducers.getSelectedTextWitness);
        let workingWitness = yield select(reducers.getWorkingWitness, textId);

        let annotation;
        if (uniqueIdSegment) {
          annotation = yield select(
            reducers.getAnnotationWithIdFragment,
            witnessId,
            uniqueIdSegment
          );
        }
        if (!annotation && user) {
          let annotatedText = yield select(
            TextStore.getWitnessText,
            selectedWitness.id
          );
          if (annotatedText) {
            annotation = annotatedText.getAnnotation(start, length);
          }

          if (!annotation) {
            annotation = new Annotation(
              WORKING_VERSION_ANNOTATION_ID,
              workingWitness,
              start,
              length,
              "",
              ANNOTATION_TYPES.variant,
              selectedWitness,
              user
            );
          }
        }

        if (annotation) {
          let changedAnnotationAction =
            actions.changedActiveTextAnnotation(annotation);
          yield put(changedAnnotationAction);
        }
      }
    }
  }
}

function* watchTextUrlActions() {
  yield takeEvery(actions.TEXT_URL, loadedTextUrl);
}

function* loadedTextUrl2(action) {
  let textId = action.payload.textId;
  let witnessId = action.payload.witnessId;

  let textId2 = action.payload.textId2;
  let witnessId2 = action.payload.witnessId2;
  yield call(loadedTextUrl, action, textId, witnessId, textId2, witnessId2);
}

function* watchTextUrlActions2() {
  yield takeEvery(actions.TEXT_URL2, loadedTextUrl2);
}
//URL to LOAD TEXTDATA AND AUTO WITNESS

function* loadedTextIdonlyUrl(action) {
  _loadedTextUrl = false;
  let data;
  let textId = parseInt(action.payload.textId);
  // yield call(loadAlignmentData, action, textId);
  yield delay(500);
  let AlignmentData = yield select(reducers.getAlignment);
  if (AlignmentData?.alignments?.text.length > 0) {
    let AlignmentId = AlignmentData.alignments.text[0].alignment;
    data = yield call(api.fetchTextPairWithAlignmentId, AlignmentId);
  }
  let witnessId;
  let textId2;
  textId2 = data?.target?.text || textId;
  let witnessId2;

  let text = { id: textId };
  let witnesses = null;

  witnesses = yield call(api.fetchTextWitnesses, text);
  yield put(actions.loadedWitnesses(text, witnesses));

  let workingwitness = witnesses.find((l) => l.is_working === true);
  witnessId2 = workingwitness?.id || witnesses[0].id;
  witnessId = workingwitness?.id || witnesses[0].id;
  yield call(loadedTextUrl, action, textId, witnessId, textId2, witnessId2);
}

function* watchTextIdonlyUrlActions() {
  yield takeEvery(actions.TEXTID_ONLY_URL, loadedTextIdonlyUrl);
}

//Home

function* selectTextUrl(action) {
  _loadedTextUrl = false;
  let texts;
  let setTextData;

  // texts = yield call(api.fetchChapterDetail);
  // setTextData = actions.setTextData(texts);
  // yield put(setTextData);

  const scrollnull = actions.changeScrollToId({
    id: null,
    from: null,
  });
  yield put(scrollnull);

  // }
}

function* watchSelectTextUrlActions() {
  yield takeEvery(actions.TEXTS, selectTextUrl);
}

// load full Alignments
function* loadAlignmentData(action, textId) {
  if (textId) {
    const AlignmentData = yield call(api.fetchAlignment, textId);
    console.log(AlignmentData);
    yield put(actions.loadAlignment(AlignmentData, action.witnessId));
  }
}

//Text Alignment Load
function* loadTextAlignment(action, AlignmentData) {
  let textWitnessId = action.witnessId;
  let data;
  let alignment = AlignmentData?.alignments;
  let payload = { source: [], target: [] };
  yield put(actions.changeSelectedRange(payload));
  console.log("loadTextAlignment");
  if (alignment.text.length > 0) {
    let witnessAlignment = alignment.text?.find(
      (s) => s.source == textWitnessId
    );
    if (
      witnessAlignment?.source == textWitnessId &&
      witnessAlignment?.alignment
    ) {
      let AlignmentId = witnessAlignment.alignment;
      data = yield call(api.fetchTextPairWithAlignmentId, AlignmentId);
    } else data = { alignment: [], source: {}, target: {} };
  } else {
    data = { alignment: [], source: {}, target: {} };
  }
  yield put(actions.setTextAlignment(data));
}
//Media Load

function* loadImageData(action, witnessid = null) {
  let AlignmentData = yield select(reducers.getAlignment);
  let TextId = yield select(reducers.getSelectedText);
  let witness = yield select(reducers.getSelectedTextWitness);
  let textCondition = TextId.id === parseInt(AlignmentData.text);
  let ImageData = {};
  if (!textCondition) {
    ImageData = null;
    yield put(actions.changeImageData(ImageData));
    return;
  }
  if (!_.isEmpty(AlignmentData)) {
    let alignmentImage = AlignmentData.alignments.image;
    let message = null;
    let data = alignmentImage.find((l) => {
      if (witnessid === null)
        return parseInt(l.source) === parseInt(witness.id);
      return l.source === parseInt(witnessid);
    });

    if (_.isEmpty(data)) {
      ImageData = {};
      message = "Image not Available";
    }

    if (!_.isEmpty(data)) {
      ImageData = yield call(api.fetchImageWithAlignmentId, data.alignment);
      message = null;
    }
    yield put(actions.changeImageData({ ...ImageData, message }));
  }
}
function* loadVideoData(action, AlignmentData) {
  if (AlignmentData.alignments.video.length) {
    let alignmentid = AlignmentData.alignments.video[0].alignment;
    let data = yield call(api.fetchVideoWithAlignmentId, alignmentid);

    yield put(actions.changeVideoData(data));
  }
}

function* loadMediaAlignment(action) {
  yield delay(2000);
  let Align = yield select(reducers.getAlignment);

  if (action.payload === "IMAGE") {
    yield call(loadImageData, action);
  }
  if (action.payload === "VIDEO") {
    yield call(loadVideoData, action, Align);
  }
}

function* watchActivateMedia() {
  yield takeEvery(actions.ACTIVATE_MEDIA, loadMediaAlignment);
}

//Image Alignment Source Change

function* changeImageSource(action) {
  let id = parseInt(action.payload);
  yield call(loadImageData, action, id);
}

function* watchChangeImageSource() {
  yield takeEvery(actions.SELECT_IMAGE_VERSION, changeImageSource);
}

/**
 * Stores functions by action type.
 * Used primarily to allow batched actions to be handled
 * automatically by dispatchedBatch.
 *
 * @type {Object.<string, function>}
 */
const typeCalls: {
  [string]: (any) => Saga<void>,
} = {
  [actions.LOAD_INITIAL_DATA]: loadInitialData,
  [actions.LOAD_WITNESS_ANNOTATIONS]: loadWitnessAnnotations,
  [actions.LOAD_WITNESS_ANNOTATIONS2]: loadWitnessAnnotations2,
  [actions.APPLIED_ANNOTATION]: reqAction(applyAnnotation),
  [actions.REMOVED_APPLIED_ANNOTATION]: reqAction(removeAppliedAnnotation),
  [actions.APPLIED_DEFAULT_ANNOTATION]: reqAction(appliedDefaultAnnotation),
  [actions.REMOVED_DEFAULT_ANNOTATION]: reqAction(removeDefaultAnnotation),
  [actions.CREATED_ANNOTATION]: reqAction(createAnnotation),
  [actions.UPDATED_ANNOTATION]: reqAction(updateAnnotation),
  [actions.DELETED_ANNOTATION]: reqAction(deleteAnnotation),
  [actions.SELECTED_WITNESS]: reqAction(selectedWitness),
  [actions.SELECTED_WITNESS2]: reqAction(selectedWitness2),
  [actions.CHANGED_ACTIVE_TEXT_ANNOTATION]: changeActiveAnnotation,
  [actions.SELECTED_TEXT]: selectedText,
  [actions.SELECTED_TEXT2]: selectedText2,
  [actions.SELECTED_LOCALE]: selectLocale,
  [actions.CHANGED_TEXT_LIST_WIDTH]: changedTextListWidth,
  [actions.CHANGED_SHOW_PAGE_IMAGES]: changedShowPageImages,
  [actions.CHANGED_TEXT_FONT_SIZE]: changedTextFontSize,
  [actions.USER_LOGGED_IN]: loadUserSettings,
  [actions.TEXT_URL]: loadedTextUrl,
  [actions.TEXT_URL2]: loadedTextUrl2,
  [actions.TEXTID_ONLY_URL]: loadedTextIdonlyUrl,
  [actions.TEXTS]: selectTextUrl,
  [actions.CREATED_QUESTION]: reqAction(createQuestion),
  [actions.LOAD_QUESTION]: loadQuestion,
  [actions.SELECT_IMAGE_VERSION]: changeImageSource,
  [actions.ACTIVATE_MEDIA]: loadMediaAlignment,
};

/** Root **/

export default function* rootSaga(): Saga<void> {
  yield all([
    call(watchLoadInitialData),
    call(watchSelectedText),
    call(watchLoadAnnotations),
    call(watchLoadAnnotations2),
    call(watchBatchedActions),
    call(watchAppliedAnnotation),
    call(watchRemovedAppliedAnnotation),
    call(watchAppliedDefaultAnnotation),
    call(watchRemovedDefaultAnnotation),
    call(watchCreatedAnnotation),
    call(watchUpdatedAnnotation),
    call(watchDeletedAnnotation),
    call(watchRequests),
    call(watchSelectedTextWitness),
    call(watchSelectedLocale),
    call(watchExportWitness),
    call(watchChangedSearchValue),
    call(watchChangedSearchValue2),
    call(watchSearchedText),
    call(watchChangedTextListWidth),
    call(watchChangedShowPageImages),
    call(watchChangedTextFontSize),
    call(watchUserLoggedIn),
    call(watchTextUrlActions),
    call(watchTextIdonlyUrlActions),
    call(watchChangedActiveAnnotation),
    call(watchCreatedQuestion),
    call(watchLoadQuestion),
    call(watchSelectTextUrlActions),
    call(watchTextUrlActions2),
    call(watchSelectedText2),
    call(watchSelectedTextWitness2),
    call(watchChangeImageSource),
    call(watchActivateMedia),
  ]);
}
