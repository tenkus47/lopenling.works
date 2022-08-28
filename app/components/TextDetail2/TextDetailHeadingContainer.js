// @flow
import React from "react";
import { connect } from "react-redux";
import TextDetailHeading from "./TextDetailHeading";
import * as actions from "actions";
import * as reducers from "reducers";
import type { AppState } from "reducers";
import {
    getTextListVisible,
    getAccountOverlayVisible,
    getShowTableContent2,
} from "reducers";

const mapStateToProps = (state: AppState): {} => {
    const user = reducers.getUser(state);
    const selectedText = reducers.getSelectedText2(state);
    let witnesses = [];
    let exportingWitness = false;
    let selectedWitness;
    if (selectedText) {
        witnesses = reducers.getTextWitnesses2(state, selectedText.id);
        const selectedWitnessId = reducers.getSelectedTextWitnessId2(
            state,
            selectedText.id
        );
        if (selectedWitnessId) {
            selectedWitness = reducers.getWitness2(state, selectedWitnessId);
            // exportingWitness = reducers.getExportingWitness(
            //     state,
            //     selectedWitnessId
            // );
        } else {
            selectedWitness = reducers.getWorkingWitness2(
                state,
                selectedText.id
            );
        }
    }
    let textFontSize = reducers.getTextFontSize2(state);
    let showTableContent = getShowTableContent2(state);
    let searchValue = reducers.getSearchValue2(state);
    return {
        witnesses,
        selectedText,
        selectedWitness,
        textListIsVisible: getTextListVisible(state),
        accountOverlayVisible: getAccountOverlayVisible(state),
        textFontSize,
        user,
        searchValue,
        showTableContent,
        searchResults: reducers.getSearchResults2(state, searchValue),
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
                actions.selectedTextWitness2(selectedText?.id, witness?.id)
            );
        },
        onChangedFontSize: (fontSize: number) => {
            dispatch(actions.changedTextFontSize2(fontSize));
        },
        changeShowTableContent: (payload) => {
            dispatch(actions.showTableContent2(payload));
        },
        searchChanged: (searchTerm: string) => {
            dispatch(actions.changedSearchValue2(searchTerm));
        },
        changeSelectSyncId: (payload) => {
            dispatch(actions.changeSyncIdOnSearch2(payload));
        },
    };
};

const TextDetailHeadingContainer = connect(
    mapStateToProps,
    null,
    mergeProps
)(TextDetailHeading);

export default TextDetailHeadingContainer;
