// @flow
import React from "react";
import { connect } from "react-redux";
import TextList from "./TextList";
import * as actions from "actions";
import { getSelectedText } from "reducers";
import type { AppState } from "reducers";
import * as api from "api";
import * as reducers from "reducers";
import { batchActions } from "redux-batched-actions";
import { reduce } from "lodash";

const mapStateToProps = (state: AppState) => {
    // TODO: display search results or spinner depending on when anything
    // returned
    let texts = reducers.getTexts(state);
    let selectedText = reducers.getSelectedText(state);
    return {
        texts,
        selectedText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedText: (text: api.TextData) => {
            dispatch(actions.selectedText(text));
        },
    };
};

const TextListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextList);

export default React.memo(TextListContainer);
