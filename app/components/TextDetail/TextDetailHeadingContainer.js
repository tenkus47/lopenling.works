// @flow
import React from "react";
import { connect } from "react-redux";
import TextDetailHeading from "./TextDetailHeading";
import * as actions from "actions";
import * as reducers from "reducers";
import type { AppState } from "reducers";

const mapStateToProps = (state: AppState): {} => {
    const selectedText = reducers.getSelectedText(state);
    const selectedText2 = reducers.getSelectedText2(state);
    let witnesses = [];
    let exportingWitness = false;
    let selectedWitness;
    let selectedWitness2;

    if (selectedText) {
        witnesses = reducers.getTextWitnesses(state, selectedText.id);
        const selectedWitnessId = reducers.getSelectedTextWitnessId(
            state,
            selectedText.id
        );
        if (selectedWitnessId) {
            selectedWitness = reducers.getWitness(state, selectedWitnessId);
            exportingWitness = reducers.getExportingWitness(
                state,
                selectedWitnessId
            );
        } else {
            selectedWitness = reducers.getWorkingWitness(
                state,
                selectedText.id
            );
        }
    }

    if (selectedText2) {
        // witnesses = reducers.getTextWitnesses(state, selectedText2.id);
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

    let textFontSize = reducers.getTextFontSize(state);
    let searchValue = reducers.getSearchValue(state);
    return {
        witnesses,
        selectedText,
        selectedText2,
        selectedWitness,
        selectedWitness2,
        textFontSize,
        exportingWitness,
        searchValue,
        showTableContent: reducers.getShowTableContent(state),
        searchResults: reducers.getSearchResults(state, searchValue),
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const navigationButtonClicked = () => {
        dispatchProps.dispatch(
            actions.changedTextListVisible(!stateProps.textListIsVisible)
        );
    };

    const { dispatch } = dispatchProps;
    const { selectedText } = stateProps;

    return {
        ...ownProps,
        ...stateProps,
        navigationButtonClicked,
        onSelectedWitness: (witness: Witness) => {
            dispatch(
                actions.selectedTextWitness(selectedText?.id, witness?.id)
            );
        },
        onChangedFontSize: (fontSize: number) => {
            dispatch(actions.changedTextFontSize(fontSize));
        },
        onChangeWindowOpen: (data: boolean) => {
            dispatch(actions.toggleSecondWindow(data));
        },
        onExport: () => {
            dispatch(
                actions.exportWitness(stateProps.selectedWitness.id, "docx")
            );
        },
        navigationButtonClicked: () => {
            dispatch(
                actions.changedTextListVisible(!stateProps.textListIsVisible)
            );
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
        searchChanged: (searchTerm: string) => {
            dispatch(actions.changedSearchValue(searchTerm));
        },
        changeShowTableContent: (payload) => {
            dispatch(actions.showTableContent(payload));
        },
    
          onSelectedSearchResult: (
            text: api.TextData,
            start: number,
            length: number,
            selectedText: api.TextData | null
        ) => {
            if (!selectedText || selectedText.id !== text.id) {
                dispatch(
                    batchActions([
                        actions.selectedSearchResult(text.id, start, length),
                        actions.selectedText(text),
                    ])
                );
            } else {
                dispatch(actions.selectedSearchResult(text.id, start, length));
            }
        },
    };
};

const TextDetailHeadingContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TextDetailHeading);

export default TextDetailHeadingContainer;
