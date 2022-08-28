import React from "react";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import MediaOptions from "./MediaOptions";
import DraggableMedia from "./DraggableMedia";
const mapStateToProps = (state) => {
    const scrollToId = reducers.getScrollToId(state);
    const syncIdOnClick = reducers.getSyncIdOnClick(state);
    const imageData = reducers.getImageData(state);
    const videoData = reducers.getVideoData(state);
    let Media = reducers.getMediaData(state);
    const selectedText = reducers.getSelectedText(state);
    const isImagePortrait = reducers.isImagePortrait(state);
    const alignmentData = reducers.getAlignment(state);
    const witness = reducers.getSelectedTextWitnessId(state, selectedText.id);
    const witnesses = reducers.getTextWitnesses(state, selectedText.id);
    const ImageVersion = reducers.getSelectedImageVersion(state);
    const selectedImage = reducers.getSelectedImage(state);
    const imageScrollId = reducers.getImageScrollId(state);
    const imageAlignmentById = reducers.getImageAlignmentById(state);
    //  const selectedSegmentId=reducers.getSelectedSegmentId(state);

    return {
        scrollToId,
        syncIdOnClick,
        imageData,
        videoData,
        selectedMedia: Media,
        selectedText,
        isImagePortrait,
        // selectedSegmentId,
        alignmentData,
        witness,
        witnesses,
        ImageVersion,
        selectedImage,
        imageScrollId,
        imageAlignmentById,
    };
};

const matchDispatchToProps = (dispatch) => {
    const toggleImage = (data) => dispatch(actions.changedShowPageImages(data));
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));
    const changeIsImagePortrait = (payload) =>
        dispatch(actions.setIsImagePortrait(payload));
    const changeImageVersion = (imageVersionId) =>
        dispatch(actions.selectImageVersion(imageVersionId));
    const changeSelectedImage = (payload) =>
        dispatch(actions.selectImage(payload));
    const onSelectedSearchResult = (
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
    };
    return {
        toggleImage,
        onSelectedSearchResult,
        changeMediaSelection,
        changeIsImagePortrait,
        changeImageVersion,
        changeSelectedImage,
        changeSelectedRange: (payload) => {
            dispatch(actions.changeSelectedRange(payload));
        },
        changeScrollToId: (payload) =>
            dispatch(actions.changeScrollToId(payload)),
    };
};

const MediaContainer = connect(
    mapStateToProps,
    matchDispatchToProps
)(DraggableMedia);

export default MediaContainer;
