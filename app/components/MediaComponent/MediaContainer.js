import React from "react";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import DraggableMedia from "./DraggableMedia";
const mapStateToProps = (state) => {
    let Media = reducers.getMediaData(state);

    return {
        selectedMedia: Media,
    };
};

const matchDispatchToProps = (dispatch) => {
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));

    return {
        changeMediaSelection,
    };
};

const MediaContainer = connect(
    mapStateToProps,
    matchDispatchToProps
)(DraggableMedia);

export default MediaContainer;
