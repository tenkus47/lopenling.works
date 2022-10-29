import Editor from "./Editor";
import React from "react";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";

const mapStateToProps = (state) => {
    const selectedText = reducers.getSelectedText(state);
    const selectedText2 = reducers.getSelectedText2(state);

    let selectedWitness;
    let selectedWitness2;
    let witnesses;
    let witnesses2;
    if (selectedText) {
        witnesses = reducers.getTextWitnesses(state, selectedText.id);
        const selectedWitnessId = reducers.getSelectedTextWitnessId(
            state,
            selectedText.id
        );
        if (selectedWitnessId) {
            selectedWitness = reducers.getWitness(state, selectedWitnessId);
        } else {
            selectedWitness = reducers.getWorkingWitness(
                state,
                selectedText.id
            );
        }
    }
    if (selectedText2) {
        witnesses2 = reducers.getTextWitnesses2(state, selectedText2.id);
        const selectedWitnessId2 = reducers.getSelectedTextWitnessId2(
            state,
            selectedText2.id
        );
        if (selectedWitnessId2) {
            selectedWitness2 = reducers.getWitness2(state, selectedWitnessId2);
        } else {
            selectedWitness2 = reducers.getWorkingWitness2(
                state,
                selectedText2.id
            );
        }
    }

    return {
        selectedText,
        selectedWitness,
        selectedText2,
        selectedWitness2,
        title: reducers.getTranslation(state, "header.title"),
        page: state.page,
        isAnnotating: reducers.isAnnotating(state),
        isSecondWindowOpen: reducers.isSecondWindowOpen(state),
        theme: reducers.getTheme(state),
        isPanelLinked: reducers.isPanelLinked(state),
        textListIsVisible: reducers.getTextListVisible(state),
        isPanelVisible: reducers.isPanelVisible(state),
    };
};

const matchDispatchToProps = (dispatch) => {
    return {
        onChangedTextWidth: (width: number) => {
            dispatch(actions.changedTextListWidth(width));
        },
        onChangedTextListVisible: (isVisible: boolean) => {
            dispatch(actions.changedTextListVisible(isVisible));
        },
        changeIsAnnotating: (payload) => {
            dispatch(actions.changeIsAnnotating(payload));
            if (payload === false) {
                const dismissTextAnnotation =
                    actions.changedActiveTextAnnotation(null);
                dispatch(dismissTextAnnotation);
                dispatch(actions.changedActiveTextAnnotation(null));
            }
        },
        onChangeWindowOpen: (data: boolean) => {
            dispatch(actions.toggleSecondWindow(data));
        },
        onChangePanelLink: (data: boolean) => {
            dispatch(actions.changePanelLink(data));
        },
    };
};

const EditorContainer = connect(mapStateToProps, matchDispatchToProps)(Editor);

export default EditorContainer;
