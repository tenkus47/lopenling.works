// @flow
import type { AppState } from "reducers";
import AnnotatedText from "lib/AnnotatedText";
import * as selectors from "reducers";
import getWitnessAppliedAnnotations from "./getWitnessAppliedAnnotations";
import { getRemovedDefaultAnnotationsForWitnessId } from "reducers";
import segmentTibetanText from "lib/segmentTibetanText";

const getWitnessAnnotatedText = (
    state: AppState,
    witnessId: number
): AnnotatedText | null => {
    const witness = selectors.getWitness(state, witnessId);
    if (!witness) return null;

    const text = witness.text;

    const workingWitness = selectors.getWorkingWitness(state, text.id);
    const baseWitness = selectors.getBaseWitness(state, text.id);

    if (!workingWitness || !baseWitness) return null;

    let workingAnnotationList = selectors.getAnnotationsForWitnessId(
        state,
        workingWitness.id
    );

    let appliedAnnotations = getWitnessAppliedAnnotations(
        state,
        witness.id,
        workingWitness.id
    );
    if (!appliedAnnotations) return null;

    let removedDefaultAnnotations = null;

    if (witness.id !== workingWitness.id) {
        // If we are not viewing the working version,
        // get all the annotations created by the selected witness
        // BUT NOT BY A USER to apply to the base text.
        // User-created annotations need to be in appliedAnnotations.

        removedDefaultAnnotations = getRemovedDefaultAnnotationsForWitnessId(
            state,
            witness.id
        );

        let selectedWitnessAnnotations = {};

        for (let key in workingAnnotationList) {
            if (workingAnnotationList.hasOwnProperty(key)) {
                let annotationData = workingAnnotationList[key];
                if (
                    annotationData.creator_witness === witness.id &&
                    !removedDefaultAnnotations.hasOwnProperty(
                        annotationData.unique_id
                    )
                ) {
                    selectedWitnessAnnotations[
                        annotationData.unique_id
                    ] = annotationData;
                }
            }
        }

        let selectedWitnessAnnotationsList = selectors.annotationsFromData(
            state,
            selectedWitnessAnnotations
        );

        appliedAnnotations = appliedAnnotations.concat(
            selectedWitnessAnnotationsList
        );
    }

    let segmentedWorkingWitness = segmentTibetanText(
        workingWitness.content || ""
    );

    let annotatedText = new AnnotatedText(
        segmentedWorkingWitness,
        appliedAnnotations,
        text => {
            return segmentTibetanText(text).segments;
        },
        workingWitness,
        witness
    );

    return annotatedText;
};

export default getWitnessAnnotatedText;
