// @flow
import React from "react";
import { connect } from "react-redux";
import { batchActions } from "redux-batched-actions";

import { getTextListVisible } from "reducers";
import { changedTextListVisible, changedActiveAnnotation } from "actions";

import TextListTab from "components/TextList/TextListTab";

const mapStateToProps = state => {
    return {
        textListIsVisible: getTextListVisible(state)
    };
};

const mapStateToDispatch = dispatch => {
    return {
        tabClicked: () => {
            const textListIsVisible = true;
            dispatch(changedTextListVisible(textListIsVisible));
        }
    };
};

const TextListTabContainer = connect(mapStateToProps, mapStateToDispatch)(
    TextListTab
);

export default TextListTabContainer;
