import React from "react";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import HomePage from "./HomePage";

let user;

const mapStateToProps = (state) => {
    if (!state.user.userId === -1) {
        user = state.user;
    }
    return {
        text: reducers.getTexts(state),
        title: reducers.getTranslation(state, "header.title"),
        Textdata: reducers.getTextTitle(state),
    };
};

const matchDispatchToProps = (dispatch) => {
    return {
        onChangedTextWidth: (width: number) => {
            dispatch(actions.changedTextListWidth(width));
        },
        onChangedTextTitle: (title: string | null) => {
            dispatch(actions.selectTextTitle(title));
        },
        dispatch,
    };
};

const HomePageContainer = connect(
    mapStateToProps,
    matchDispatchToProps
)(HomePage);

export default HomePageContainer;
