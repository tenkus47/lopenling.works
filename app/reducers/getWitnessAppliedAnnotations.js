import type { AppState } from "reducers";
import Annotation from "lib/Annotation";
import {
    getActiveAnnotationsForWitnessId,
    getAnnotationData,
    hasLoadedWitnessAppliedAnnotations,
    annotationsFromData
} from "reducers";

const getWitnessAppliedAnnotations = (
    state: AppState,
    witnessId,
    baseWitnessId
): Annotation[] | null => {
    const loadedAppliedAnnotations = hasLoadedWitnessAppliedAnnotations(
        state,
        witnessId
    );
    if (!loadedAppliedAnnotations) {
        return null;
    }
    const activeAnnotationList = getActiveAnnotationsForWitnessId(
        state,
        witnessId
    );
    if (!activeAnnotationList) {
        return [];
    }

    let activeAnnotationDataList = {};
    for (let activeAnnotationId in activeAnnotationList) {
        if (activeAnnotationList.hasOwnProperty(activeAnnotationId)) {
            let activeAnnotationData = getAnnotationData(
                state,
                baseWitnessId,
                activeAnnotationId
            );
            if (activeAnnotationData) {
                activeAnnotationDataList[
                    activeAnnotationData.unique_id
                ] = activeAnnotationData;
            }
        }
    }

    return annotationsFromData(state, activeAnnotationDataList);
};

export default getWitnessAppliedAnnotations;
