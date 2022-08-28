// @flow

import type { AppState } from "reducers";
import * as actions from "actions";
import * as reducers from "reducers";
import * as TextStore from "state_helpers/TextStore";
import AnnotatedText, {
    WORKING_VERSION_ANNOTATION_ID
} from "lib/AnnotatedText";
import Source, { WORKING_VERSION_SOURCE_NAME } from "lib/Source";
import Annotation, { ANNOTATION_TYPES } from "lib/Annotation";
import TextSegment from "lib/TextSegment";
import { batchActions } from "redux-batched-actions";

const closeAnnotationControls = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    if (activeAnnotation) {
        const dismissTextAnnotation = actions.changedActiveTextAnnotation(null);
        dispatch(dismissTextAnnotation);
    }
};

const addPageBreak = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    addBreak(state, dispatch, ANNOTATION_TYPES.pageBreak);
};

const addLineBreak = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    addBreak(state, dispatch, ANNOTATION_TYPES.lineBreak);
};

const addBreak = (
    state: AppState,
    dispatch: (action: actions.Action) => void,
    breakType: string,
    selectBreak: boolean = false
) => {
    const selectedWitness = reducers.getSelectedTextWitness(state);
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    if (
        !activeAnnotation ||
        activeAnnotation.isType(ANNOTATION_TYPES.pageBreak) ||
        activeAnnotation.isType(ANNOTATION_TYPES.lineBreak)
    ) {
        return;
    }
    let annotatedText = null;
    if (selectedWitness) {
        annotatedText = TextStore.getWitnessText(state, selectedWitness.id);
    }

    const user = reducers.getUser(state);
    if (activeAnnotation && selectedWitness && annotatedText && user) {
        const breakAnnotation = new Annotation(
            null,
            activeAnnotation.witness,
            activeAnnotation.end + 1,
            0,
            null,
            breakType,
            selectedWitness,
            user
        );

        if (!breakExists(annotatedText, breakAnnotation)) {
            let selectedWitnessData = reducers.dataFromWitness(selectedWitness);
            let actionsBatch = [];
            actionsBatch.push(actions.createdAnnotation(breakAnnotation));
            actionsBatch.push(
                actions.appliedAnnotation(
                    breakAnnotation.uniqueId,
                    selectedWitnessData
                )
            );
            if (selectBreak) {
                actionsBatch.push(
                    actions.changedActiveTextAnnotation(breakAnnotation)
                );
            } else {
                actionsBatch.push(actions.changedActiveTextAnnotation(null));
            }
            dispatch(batchActions(actionsBatch));
        }
    }
};

const breakExists = (
    annotatedText: AnnotatedText,
    breakAnnotation: Annotation
): boolean => {
    return (
        annotationTypeExists(
            annotatedText,
            ANNOTATION_TYPES.pageBreak,
            breakAnnotation.start
        ) ||
        annotationTypeExists(
            annotatedText,
            ANNOTATION_TYPES.lineBreak,
            breakAnnotation.start
        )
    );
};

const annotationTypeExists = (
    annotatedText: AnnotatedText,
    type: string,
    position: number
): boolean => {
    const annotations = annotatedText.getAnnotationsOfType(type);
    for (let id in annotations) {
        if (annotations.hasOwnProperty(id)) {
            const annotation = annotations[id];
            if (position === annotation.start) {
                return true;
            }
        }
    }
    return false;
};

const selectNextSegment = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const selectedWitness = reducers.getSelectedTextWitness(state);
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    let annotatedText = null;
    if (selectedWitness) {
        annotatedText = TextStore.getWitnessText(state, selectedWitness.id);
    }
    if (!selectedWitness || !activeAnnotation || !annotatedText) return;

    let segments, start, length, nextPos;
    if (activeAnnotation.isDeletion) {
        const nextOriginalPos = activeAnnotation.end + 1;
        const nextSegment = annotatedText.segmentAtOriginalPosition(
            nextOriginalPos
        );
        if (nextSegment && nextSegment instanceof TextSegment) {
            nextPos = nextSegment.start;
        } else if (nextSegment && typeof nextSegment == "number") {
            // TODO: finish this - deletion after another deletion
        }
    } else {
        segments = annotatedText.segmentsForAnnotation(activeAnnotation);
        start =
            typeof segments[0] == "number" ? segments[0] : segments[0].start;
        length = activeAnnotation.content.length;
        nextPos = start + length;
    }
    // TODO: needs to add support for non-active insertion.
    // These are visible on the working edition.

    if (nextPos === undefined) {
        console.warn("Can't get next segment after %o", activeAnnotation);
        return;
    }

    let existingAnnotations = annotatedText.annotationsForPosition(nextPos);
    if (activeAnnotation.isDeletion) {
        // The current deletion will be in exisitingAnnotations as it
        // shares a position with the next segment.
        existingAnnotations = existingAnnotations.filter(annotation => {
            activeAnnotation.uniqueId !== annotation.uniqueId;
        });
    }
    let newActiveAnnotation = null;
    if (existingAnnotations.length > 0) {
        newActiveAnnotation = existingAnnotations[0];
    } else {
        let segment = annotatedText.segmentedText.segmentAtPosition(nextPos);
        if (segment) {
            let baseAnnotation = annotatedText.getBaseAnnotation(
                nextPos,
                segment.length
            );
            let workingWitness = reducers.getWorkingWitness(
                state,
                selectedWitness.text.id
            );
            let user = reducers.getUser(state);
            if (baseAnnotation && workingWitness && user && segment) {
                newActiveAnnotation = new Annotation(
                    WORKING_VERSION_ANNOTATION_ID,
                    workingWitness,
                    baseAnnotation.start,
                    baseAnnotation.length,
                    segment.text,
                    ANNOTATION_TYPES.variant,
                    selectedWitness,
                    user
                );
            }
        }
    }
    if (newActiveAnnotation) {
        dispatch(actions.changedActiveTextAnnotation(newActiveAnnotation));
    }
};

const selectPreviousSegment = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const selectedWitness = reducers.getSelectedTextWitness(state);
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    let annotatedText = null;
    if (selectedWitness) {
        annotatedText = TextStore.getWitnessText(state, selectedWitness.id);
    }
    if (
        !selectedWitness ||
        !activeAnnotation ||
        !annotatedText ||
        activeAnnotation.start === 0
    )
        return;

    let segments, start, prevPos;
    const prevOriginalPos = activeAnnotation.start - 1;
    const prevSegment = annotatedText.segmentAtOriginalPosition(
        prevOriginalPos
    );
    if (prevSegment && prevSegment instanceof TextSegment) {
        prevPos = prevSegment.start;
    } else if (prevSegment && typeof prevSegment == "number") {
        let prevAnnotation = annotatedText.annotationsForPosition(prevSegment);
        let segments = annotatedText.segmentsForAnnotation(activeAnnotation);
        if (segments.length > 0) {
            prevPos =
                typeof segments[0] == "number"
                    ? segments[0]
                    : segments[0].start;
        }
    }

    // TODO: needs to add support for non-active insertion.
    // These are visible on the working edition.

    if (prevPos === undefined) {
        console.warn("Can't get previous segment before %o", activeAnnotation);
        return;
    }

    let existingAnnotations = annotatedText.annotationsForPosition(prevPos);
    let newActiveAnnotation = null;
    if (existingAnnotations.length > 0) {
        newActiveAnnotation = existingAnnotations[0];
        if (
            newActiveAnnotation.isDeletion &&
            prevSegment &&
            prevSegment instanceof TextSegment
        ) {
            newActiveAnnotation = null;
        }
    }
    if (
        !newActiveAnnotation &&
        prevSegment &&
        prevSegment instanceof TextSegment
    ) {
        let baseAnnotation = annotatedText.getBaseAnnotation(
            prevPos,
            prevSegment.length
        );
        let workingWitness = reducers.getWorkingWitness(
            state,
            selectedWitness.text.id
        );
        let user = reducers.getUser(state);
        if (baseAnnotation && workingWitness && user && prevSegment) {
            newActiveAnnotation = new Annotation(
                WORKING_VERSION_ANNOTATION_ID,
                workingWitness,
                baseAnnotation.start,
                baseAnnotation.length,
                prevSegment.text,
                ANNOTATION_TYPES.variant,
                selectedWitness,
                user
            );
        }
    }
    if (newActiveAnnotation) {
        dispatch(actions.changedActiveTextAnnotation(newActiveAnnotation));
    }
};

const extendSelectionRight = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const selectedWitness = reducers.getSelectedTextWitness(state);
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    let annotatedText = null;
    if (selectedWitness) {
        annotatedText = TextStore.getWitnessText(state, selectedWitness.id);
    }
    if (!selectedWitness || !activeAnnotation || !annotatedText) return;
    // Don't support deletions yet
    if (activeAnnotation.isDeletion) {
        return;
    }

    let segments = annotatedText.segmentsForAnnotation(activeAnnotation);
    let start =
        typeof segments[0] == "number" ? segments[0] : segments[0].start;
    let length = activeAnnotation.content.length;
    let nextPos = start + length;
    if (nextPos === undefined) {
        console.warn("Can't get next segment after %o", activeAnnotation);
        return;
    }
    let existingAnnotations = annotatedText.annotationsForPosition(nextPos);

    let nextAnnotation = null;
    if (existingAnnotations.length > 0) {
        nextAnnotation = existingAnnotations[0];
    } else {
        let segment = annotatedText.segmentedText.segmentAtPosition(nextPos);
        if (segment) {
            let baseAnnotation = annotatedText.getBaseAnnotation(
                nextPos,
                segment.length
            );
            let workingWitness = reducers.getWorkingWitness(
                state,
                selectedWitness.text.id
            );
            let user = reducers.getUser(state);
            if (baseAnnotation && workingWitness && user && segment) {
                nextAnnotation = new Annotation(
                    WORKING_VERSION_ANNOTATION_ID,
                    workingWitness,
                    baseAnnotation.start,
                    baseAnnotation.length,
                    segment.text,
                    ANNOTATION_TYPES.variant,
                    selectedWitness,
                    user
                );
            }
        }
    }
    if (nextAnnotation) {
        let newAnnotation = new Annotation(
            WORKING_VERSION_ANNOTATION_ID,
            nextAnnotation.witness,
            activeAnnotation.start,
            activeAnnotation.length + nextAnnotation.length,
            activeAnnotation.content + nextAnnotation.content,
            activeAnnotation.type,
            activeAnnotation.creatorWitness,
            activeAnnotation.creatorUser
        );
        dispatch(actions.changedActiveTextAnnotation(newAnnotation));
    }
};

const reduceSelectionLeft = (
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const selectedWitness = reducers.getSelectedTextWitness(state);
    const activeAnnotation = reducers.getActiveTextAnnotation(state);
    let annotatedText = null;
    if (selectedWitness) {
        annotatedText = TextStore.getWitnessText(state, selectedWitness.id);
    }
    if (!selectedWitness || !activeAnnotation || activeAnnotation.isSaved || !annotatedText) return;
    // Don't support deletions yet
    if (activeAnnotation.isDeletion) {
        return;
    }

    let segments = annotatedText.segmentsForAnnotation(activeAnnotation);
    // Last segment, can't reduce further
    if (segments.length === 1) return;

    segments.pop();
    let content = segments.reduce((acc, current) => {
        if (current instanceof TextSegment) {
            acc += current.text;
        }
        return acc;
    }, '');
    let newAnnotation = new Annotation(
        WORKING_VERSION_ANNOTATION_ID,
        activeAnnotation.witness,
        activeAnnotation.start,
        content.length,
        content,
        activeAnnotation.type,
        activeAnnotation.creatorWitness,
        activeAnnotation.creatorUser
    );
    dispatch(actions.changedActiveTextAnnotation(newAnnotation));
};

const shortcuts = {
    Escape: closeAnnotationControls,
    ["shift-Enter"]: addPageBreak,
    ["Enter"]: addLineBreak,
    ["ArrowLeft"]: selectPreviousSegment,
    ["ArrowRight"]: selectNextSegment,
    ["shift-ArrowRight"]: extendSelectionRight,
    ["shift-ArrowLeft"]: reduceSelectionLeft
};

const getShortcutKey = (e: SyntheticKeyboardEvent<*>) => {
    let key = e.key;
    if (e.shiftKey) {
        key = "shift-" + key;
    }
    return key;
};

export const handleKeyDown = (
    e: SyntheticKeyboardEvent<*>,
    state: AppState,
    dispatch: (action: actions.Action) => void
) => {
    const key = getShortcutKey(e);
    if (shortcuts.hasOwnProperty(key)) {
        shortcuts[key](state, dispatch);
    }
};

export default shortcuts;
