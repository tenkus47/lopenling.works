// @flow
import * as actions from "actions";
import Annotation, { TemporaryAnnotation } from "lib/Annotation";
import * as api from "api";
import * as constants from "app_constants";

export type UIState = {
    selectedText: api.TextData | null,
    selectedText2: api.TextData | null,
    selectedTextWitness: { [textId: number]: number },
    selectedTextWitness2: { [textId: number]: number },
    selectedSearchResult: {
        textId: number,
        start: number,
        length: number,
    } | null,
    searchValue: string,
    searchValue2: string,
    showPageImages: boolean,
    activeAnnotations: { [witnessId: number]: Annotation },
    activeTextAnnotations: { [textId: number]: Annotation },
    textListVisible: boolean,
    textListWidth: number,
    temporaryAnnotations: {
        [witnessId: number]: {
            [tempAnnotationKey: string]: TemporaryAnnotation[],
        },
    },
    scrollPositions: {
        [witnessId: number]: number,
    },
    exportingWitness: {
        [witnessId: number]: boolean,
    },
    showAccountOverlay: boolean,
    textFontSize: number,
    textFontSize2: number,
    showSecondWindow: Boolean,
    selectedWindow: {},

    openTableContent: Boolean,
    openTableContent2: Boolean,

    selectedTargetRange: [],

    selectedSourceRange: [],

    isPanelLinked: boolean,
    isAnnotating: Boolean,
    scrollToId: {},

    SyncIdOnClick: String,
    SyncIdOnScroll: String,
    SyncIdOnScroll2: String,
    conditionForAlignment: Boolean,
    theme: String,
};

export const initialUIState = {
    selectedText: null,
    selectedText2: null,
    selectedAuthor: null,
    selectedTextWitness: {},
    selectedTextWitness2: {},
    selectedSearchResult: null,
    selectedSearchResult2: null,

    searchValue: "",
    searchValue2: "",

    showPageImages: false,
    activeAnnotations: {},
    activeTextAnnotations: {},
    textListVisible: false,
    textListWidth: 240,
    temporaryAnnotations: {},
    scrollPositions: {},
    exportingWitness: {},
    showAccountOverlay: false,
    textFontSize: constants.DEFAULT_TEXT_FONT_SIZE,
    textFontSize2: constants.DEFAULT_TEXT_FONT_SIZE,
    showSecondWindow: false,
    openTableContent2: false,
    selectedSourceRange: [],
    selectedTargetRange: [],
    isPanelLinked: true,
    isAnnotating: true,
    selectedWindow: 1,
    openTableContent: false,
    scrollToId: { from: 1, id: 0 },
    SyncIdOnClick: 0,
    conditionForAlignment: false,
    theme: "light",
};
function changeTheme(state, action) {
    return {
        ...state,
        theme: action.payload,
    };
}
function changeConditionForAlignment(state, action) {
    return {
        ...state,
        conditionForAlignment: action.payload,
    };
}

function loadedUserSettings(
    state: UIState,
    action: actions.LoadedUserSettingsAction
): UIState {
    const settings = action.settings;
    state = { ...state };
    // false is a valid value specifically check for null
    if (settings.showPageImages != null)
        state.showPageImages = settings.showPageImages;
    if (settings.textFontSize) state.textFontSize = settings.textFontSize;

    return state;
}

function selectedText(
    state: UIState,
    action: actions.SelectedTextAction
): UIState {
    state = {
        ...state,
        selectedText: action.text,
    };

    if (
        state.selectedSearchResult &&
        state.selectedSearchResult.textId !== action.text.id
    ) {
        state = clearSearchResult(state);
    }

    return state;
}

function toggleSecondWindow(
    state: UIState,
    action: actions.SelectedTextAction
): UIState {
    state = {
        ...state,
        showSecondWindow: action.payload,
    };
    return state;
}

function selectedText2(
    state: UIState,
    action: actions.SelectedTextAction
): UIState {
    state = {
        ...state,
        selectedText2: action.text,
    };

    if (
        state.selectedSearchResult &&
        state.selectedSearchResult.textId !== action.text.id
    ) {
        state = clearSearchResult(state);
    }

    return state;
}

function changeScrollToId(state, action) {
    return {
        ...state,
        scrollToId: { from: action.payload.from, id: action.payload.id },
    };
}

function changeSyncIdOnClick(
    state: UIState,
    action: actions.SelectedTextAction
): UIState {
    state = {
        ...state,
        SyncIdOnClick: action.payload,
    };

    return state;
}

function changeRangeSelection(state, action) {
    return {
        ...state,
        selectedSourceRange: action.payload.source,
        selectedTargetRange: action.payload.target,
    };
}

function changeLinkPanel(
    state: UIState,
    action: actions.SelectedTextAction
): UIState {
    state = {
        ...state,
        isPanelLinked: action.payload,
    };

    return state;
}

function selectedTextWitness(
    state: UIState,
    action: actions.SelectedTextWitnessAction
): UIState {
    return {
        ...state,
        selectedTextWitness: {
            ...selectedTextWitness,
            [action.textId]: action.witnessId,
        },
    };
}

function selectedTextWitness2(
    state: UIState,
    action: actions.SelectedTextWitnessAction
): UIState {
    return {
        ...state,
        selectedTextWitness2: {
            ...selectedTextWitness2,
            [action.textId]: action.witnessId,
        },
    };
}
function changedSearchValue(
    state: UIState,
    action: actions.ChangedSearchValueAction
): UIState {
    let searchValue = action.searchValue;
    if (!searchValue) {
        state = clearSearchResult(state);
        searchValue = "";
    }
    return {
        ...state,
        searchValue: searchValue,
    };
}
function changedSearchValue2(
    state: UIState,
    action: actions.ChangedSearchValueAction
): UIState {
    let searchValue = action.searchValue;
    if (!searchValue) {
        searchValue = "";
    }
    return {
        ...state,
        searchValue2: searchValue,
    };
}
function showTableContent(state, action) {
    return {
        ...state,
        openTableContent: action.payload,
    };
}
function showTableContent2(state, action) {
    return {
        ...state,
        openTableContent2: action.payload,
    };
}

function selectedSearchResult(
    state: UIState,
    action: actions.SelectedSearchResultAction
): UIState {
    let resultState = null;
    if (
        action.textId !== null &&
        action.start !== null &&
        action.length !== null
    ) {
        resultState = {
            textId: action.textId,
            start: action.start,
            length: action.length,
        };
    }
    state = {
        ...state,
        selectedSearchResult: resultState,
    };

    if (action.textId) {
        const resetActiveTextAnnotation =
            actions.changedActiveTextAnnotation(null);
        state = changedActiveTextAnnotation(state, resetActiveTextAnnotation);
    }

    return state;
}
function selectedSearchResult2(
    state: UIState,
    action: actions.SelectedSearchResultAction
): UIState {
    let resultState = null;
    if (
        action.textId !== null &&
        action.start !== null &&
        action.length !== null
    ) {
        resultState = {
            textId: action.textId,
            start: action.start,
            length: action.length,
        };
    }
    state = {
        ...state,
        selectedSearchResult2: resultState,
    };

    return state;
}

function changedShowPageImages(
    state: UIState,
    action: actions.ChangedShowPageImagesAction
): UIState {
    return {
        ...state,
        showPageImages: action.showPageImages,
    };
}
function changeIsAnnotating(state, action) {
    return {
        ...state,
        isAnnotating: action.payload,
    };
}
function changedTextFontSize(
    state: UIState,
    action: actions.ChangedTextFontSizeAction
): UIState {
    return {
        ...state,
        textFontSize: action.fontSize,
    };
}
function changedTextFontSize2(
    state: UIState,
    action: actions.ChangedTextFontSizeAction
): UIState {
    return {
        ...state,
        textFontSize2: action.fontSize,
    };
}

// TODO: delete? Doesn't seem to be used anywhere.
// function changedSelectedSegment(state, action) {
//     let selectedSegments = {
//         ...state.selectedSegments
//     };
//     const activeWitnessId = state.selectedTextWitness[state.selectedText.id];
//     selectedSegments[activeWitnessId] = action.segment;
//     return {
//         ...state,
//         selectedSegments: selectedSegments
//     }
// }

function changedActiveAnnotation(
    state: UIState,
    action: actions.AnnotationAction
): UIState {
    if (!state.selectedText) {
        console.warn("changedActiveAnnotation without selectedText");
        return state;
    }

    const activeWitnessId = state.selectedTextWitness[state.selectedText.id];
    return {
        ...state,
        activeAnnotations: {
            ...state.activeAnnotations,
            [activeWitnessId]: action.annotation,
        },
    };
}

function changedActiveTextAnnotation(
    state: UIState,
    action: actions.ChangedActiveAnnotationAction
): UIState {
    if (!state.selectedText) {
        console.warn("changedActiveAnnotation without selectedText");
        return state;
    }

    const activeTextId = state.selectedText.id;
    state = {
        ...state,
        activeTextAnnotations: {
            ...state.activeTextAnnotations,
            [activeTextId]: action.annotation,
        },
    };

    if (action.annotation) {
        state = clearSearchResult(state);
    }

    return state;
}

function clearSearchResult(state): UIState {
    const clearSearchResult = actions.selectedSearchResult(null, null, null);
    return selectedSearchResult(state, clearSearchResult);
}

function textListVisibleChanged(
    state: UIState,
    action: actions.ChangedTextListVisibleAction
): UIState {
    return {
        ...state,
        textListVisible: action.isVisible,
    };
}

function textListWidthChanged(
    state: UIState,
    action: actions.ChangedTextListWidth
): UIState {
    return {
        ...state,
        textListWidth: action.width,
    };
}

function getTemporaryAnnotationKey(start: number, length: number): string {
    return [start, length].join("-");
}

function addedTemporaryAnnotation(
    state,
    action: actions.AddedTemporaryAnnotationAction
): UIState {
    const annotation = action.annotation;
    // const textId = annotation.witness.text.id;
    const activeWitnessId = state.selectedTextWitness[state.selectedText.id];
    const key = getTemporaryAnnotationKey(annotation.start, annotation.length);

    let temporaryAnnotations = state.temporaryAnnotations[activeWitnessId]
        ? state.temporaryAnnotations[activeWitnessId]
        : {};
    let textTemporaryAnnotations =
        state.temporaryAnnotations[activeWitnessId] &&
        state.temporaryAnnotations[activeWitnessId][key]
            ? state.temporaryAnnotations[activeWitnessId][key]
            : [];

    return {
        ...state,
        temporaryAnnotations: {
            ...state.temporaryAnnotations,
            [activeWitnessId]: {
                ...temporaryAnnotations,
                [key]: [...textTemporaryAnnotations, annotation],
            },
        },
    };
}

// function updatedTemporaryAnnotation(state, action) {
//     return addedTemporaryAnnotation(state, action);
// }

function removedTemporaryAnnotation(
    state,
    action: actions.RemovedTemporaryAnnotationAction
): UIState {
    const annotation = action.annotation;
    // const textId = annotation.witness.text.id;
    const activeWitnessId = state.selectedTextWitness[state.selectedText.id];
    const key = getTemporaryAnnotationKey(annotation.start, annotation.length);

    return {
        ...state,
        temporaryAnnotations: {
            ...state.temporaryAnnotations,
            [activeWitnessId]: {
                ...state.temporaryAnnotations[activeWitnessId],
                [key]: state.temporaryAnnotations[activeWitnessId][key].filter(
                    (a) => a.uniqueId !== annotation.uniqueId
                ),
            },
        },
    };
}

function changedScrollPosition(
    state: UIState,
    action: actions.ChangedWitnessScrollPositionAction
): UIState {
    return {
        ...state,
        scrollPositions: {
            ...state.scrollPositions,
            [action.witnessId]: action.scrollPosition,
        },
    };
}

function exportingWitness(
    state: UIState,
    action: actions.ExportWitnessAction
): UIState {
    return {
        ...state,
        exportingWitness: {
            ...state.exportingWitness,
            [action.witnessId]: true,
        },
    };
}

function exportedWitness(
    state: UIState,
    action: actions.ExportWitnessAction
): UIState {
    state = {
        ...state,
    };

    delete state.exportingWitness[action.witnessId];
    return state;
}

function changedAccountOverlay(
    state: UIState,
    action: actions.ChangedAccountOverlayAction
): UIState {
    state = {
        ...state,
        showAccountOverlay: action.isVisible,
    };

    return state;
}
function changeSelectedWindow(state, action) {
    return {
        ...state,
        selectedWindow: action.payload,
    };
}
const uiReducers = {};
uiReducers[actions.LOADED_USER_SETTINGS] = loadedUserSettings;
uiReducers[actions.SELECTED_TEXT] = selectedText;
uiReducers[actions.SELECTED_TEXT2] = selectedText2;
uiReducers[actions.SCROLL_TO_ID] = changeScrollToId;

uiReducers[actions.SYNC_ID_ON_CLICK] = changeSyncIdOnClick;
uiReducers[actions.CHANGE_RANGE_SELECTION] = changeRangeSelection;

uiReducers[actions.LINK_PANEL] = changeLinkPanel;
uiReducers[actions.SELECTED_WITNESS] = selectedTextWitness;
uiReducers[actions.SELECTED_WITNESS2] = selectedTextWitness2;
uiReducers[actions.CHANGED_SEARCH_VALUE] = changedSearchValue;
uiReducers[actions.CHANGED_SEARCH_VALUE2] = changedSearchValue2;

uiReducers[actions.SELECTED_SEARCH_RESULT] = selectedSearchResult;
uiReducers[actions.SELECTED_SEARCH_RESULT2] = selectedSearchResult2;

uiReducers[actions.CHANGED_SHOW_PAGE_IMAGES] = changedShowPageImages;
uiReducers[actions.CHANGED_TEXT_FONT_SIZE] = changedTextFontSize;
uiReducers[actions.CHANGED_TEXT_FONT_SIZE2] = changedTextFontSize2;

// uiReducers[actions.CHANGED_SELECTED_SEGMENT] = changedSelectedSegment;
uiReducers[actions.CHANGED_ACTIVE_ANNOTATION] = changedActiveAnnotation;
uiReducers[actions.CHANGED_ACTIVE_TEXT_ANNOTATION] =
    changedActiveTextAnnotation;
uiReducers[actions.CHANGED_TEXT_LIST_VISIBLE] = textListVisibleChanged;
uiReducers[actions.CHANGED_TEXT_LIST_WIDTH] = textListWidthChanged;
uiReducers[actions.ADDED_TEMPORARY_ANNOTATION] = addedTemporaryAnnotation;
uiReducers[actions.REMOVED_TEMPORARY_ANNOTATION] = removedTemporaryAnnotation;
uiReducers[actions.CHANGED_WITNESS_SCROLL_POSITION] = changedScrollPosition;
uiReducers[actions.EXPORT_WITNESS] = exportingWitness;
uiReducers[actions.EXPORTED_WITNESS] = exportedWitness;
uiReducers[actions.CHANGED_ACCOUNT_OVERLAY] = changedAccountOverlay;
uiReducers[actions.SECOND_WINDOW] = toggleSecondWindow;
uiReducers[actions.CHANGE_ANNOTATING] = changeIsAnnotating;
uiReducers[actions.CHANGE_SELECTED_WINDOW] = changeSelectedWindow;
uiReducers[actions.SHOW_TABLE_CONTENT] = showTableContent;
uiReducers[actions.SHOW_TABLE_CONTENT2] = showTableContent2;
uiReducers[actions.CHANGE_THEME] = changeTheme;
uiReducers[actions.CHANGE_CONDITION] = changeConditionForAlignment;

export default uiReducers;

export const getConditionForAlignment = (state) => {
    return state.conditionForAlignment;
};

export const getShowTableContent = (state) => {
    return state.openTableContent;
};

export const getShowTableContent2 = (state) => {
    return state.openTableContent2;
};
export const getSelectedWindow = (state) => {
    return state.selectedWindow;
};
export const getSelectedSourceRange = (state) => {
    return state.selectedSourceRange;
};
export const getSelectedTargetRange = (state) => {
    return state.selectedTargetRange;
};
export const isAnnotating = (state) => {
    return state.isAnnotating;
};

export const getSelectedText = (state: UIState): api.TextData | null => {
    return state.selectedText;
};
export const getSelectedText2 = (state: UIState): api.TextData | null => {
    return state.selectedText2;
};

export const getSelectedTextWitnessId = (
    state: UIState,
    textId: number
): number | null => {
    return state.selectedTextWitness[textId];
};
export const getSelectedTextWitnessId2 = (
    state: UIState,
    textId: number
): number | null => {
    return state.selectedTextWitness2[textId];
};
export const showPageImages = (state: UIState): boolean => {
    return state.showPageImages;
};
export const getTheme = (state: UIState): String => {
    return state.theme;
};

export const getActiveAnnotation = (
    state: UIState,
    witnessId?: number
): Annotation | null => {
    if (state.selectedText) {
        if (!witnessId) {
            witnessId = state.selectedTextWitness[state.selectedText.id];
        }
        if (witnessId) {
            return state.activeAnnotations[witnessId];
        }
        return null;
    } else {
        return null;
    }
};

export const getActiveTextAnnotation = (
    state: UIState,
    textId?: number
): Annotation | null => {
    if (state.selectedText) {
        if (!textId) {
            textId = state.selectedText.id;
        }
        if (textId) {
            return state.activeTextAnnotations[textId];
        }
        return null;
    } else {
        return null;
    }
};
export const getActiveTextAnnotation2 = (
    state: UIState,
    textId?: number
): Annotation | null => {
    if (state.selectedText) {
        if (!textId) {
            textId = state.selectedText.id;
        }
        if (textId) {
            return state.activeTextAnnotations2[textId];
        }
        return null;
    } else {
        return null;
    }
};

export const getTextListVisible = (state: UIState): boolean => {
    return state.textListVisible;
};
export const getTextListWidth = (state: UIState): number => {
    return state.textListWidth;
};

export const getScrollToId = (state) => {
    return state.scrollToId;
};

export const getSyncIdOnCLick = (state: UIState): number => {
    return state.SyncIdOnClick;
};
export const isPanelLinked = (state: UIState): number => {
    return state.isPanelLinked;
};
export const getTemporaryAnnotations = (
    state: UIState,
    witnessId: number,
    start: number,
    length: number,
    type: string | null
): TemporaryAnnotation[] => {
    let annotations = [];
    const key = getTemporaryAnnotationKey(start, length);
    if (
        type &&
        state.temporaryAnnotations[witnessId] &&
        state.temporaryAnnotations[witnessId][key]
    ) {
        annotations = state.temporaryAnnotations[witnessId][key].filter(
            (a) => a.type === type
        );
    }
    return annotations;
};

export const getScrollPosition = (
    state: UIState,
    witnessId: number
): number | null => {
    return state.scrollPositions[witnessId] || null;
};

export const getExportingWitness = (
    state: UIState,
    witnessId: number
): boolean => {
    return state.exportingWitness.hasOwnProperty(witnessId);
};

export const getSearchValue = (state: UIState): string => {
    return state.searchValue;
};
export const getSearchValue2 = (state: UIState): string => {
    return state.searchValue2;
};
export const getSelectedSearchResult = (
    state: UIState
): null | { textId: number, start: number, length: number } => {
    return state.selectedSearchResult;
};
export const getSelectedSearchResult2 = (
    state: UIState
): null | { textId: number, start: number, length: number } => {
    return state.selectedSearchResult2;
};

export const getAccountOverlayVisible = (state: UIState): boolean => {
    return state.showAccountOverlay;
};

export const getTextFontSize = (state: UIState): number => {
    return state.textFontSize;
};
export const getTextFontSize2 = (state: UIState): number => {
    return state.textFontSize2;
};
export const isSecondWindowOpen = (state: UIState): number => {
    return state.showSecondWindow;
};
