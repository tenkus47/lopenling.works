// @flow
import React from "react";
import { connect } from "react-redux";
import TextsSearch from "./TextsSearch";
import { changedSearchValue } from "actions";
import type { AppState } from "reducers";
import * as reducers from "reducers";
const mapStateToProps = (state: AppState) => {
    return {
        searchTerm: reducers.getSearchValue(state),
        searchValue: state.ui.searchValue,
        textListWidth: reducers.getTextListWidth(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    // const { dispatch } = dispatchProps;
    // const { selectedText } = stateProps;
    return {
        searchChanged: (searchTerm: string) => {
            dispatch(changedSearchValue(searchTerm));
        },
    };
};

const TextsSearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextsSearch);

export default TextsSearchContainer;
