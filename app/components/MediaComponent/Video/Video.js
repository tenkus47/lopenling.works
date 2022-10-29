import React, { useRef, useEffect, useState, useCallback } from "react";
import ReactPlayer from "react-player";
import _ from "lodash";
import { Collapse } from "components/UI/muiComponent";
import Chapters from "./Chapters";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";

function Video(props) {
    let textIdfromAlignment = props.alignmentData.text;
    const syncIdOnClick = props.syncIdOnClick;
    const videoRef = useRef();
    const VideoData = props?.videoData?.alignment || [];
    const url = "https://www.youtube.com/watch?v=2MMM_ggekfE"; //url should be from db api
    let VideoIdListRange = [];
    let closestID = [];
    const [state, setState] = useState({
        played: 0,
        duration: 0,
        playing: true,
    });
    if (!_.isEmpty(VideoData)) {
        VideoIdListRange = VideoData.map((l) => [
            parseInt(l.source_segment.start),
            parseInt(l.source_segment.end),
        ]);
    }
    useEffect(() => {
        if (
            textIdfromAlignment === props.selectedText.id &&
            props.isPanelLinked
        ) {
            let ClickId = syncIdOnClick;

            closestID = VideoIdListRange.find(
                ([start, end]) => ClickId > start && ClickId < end
            );
            if (closestID) {
                let data = VideoData.find(
                    (l) => l.source_segment.start === closestID[0]?.toString()
                );

                if (!_.isEmpty(data)) {
                    jumpToTime(data.target_segment.start);
                    props.changeMediaInterval(data);
                }
            }
        }
    }, [syncIdOnClick]);
    const handleProgress = (state) => {
        // We only want to update time slider if we are not currently seeking
        const played = state.playedSeconds;
        const Interval = VideoData.find(
            (time) =>
                toSec(time.target_segment.start) < played &&
                toSec(time.target_segment.end) > played
        );
        if (!_.isEmpty(Interval)) {
            props.changeMediaInterval(Interval);
        }
    };
    const jumpToTime = (time) => {
        videoRef.current.seekTo(toSec(time), "seconds");
    };

    if (VideoData.length === 0) return <div />;
    if (props.videoData.source.witness !== parseInt(props.witness))
        return <div />;
    return (
        <Collapse in={props.open}>
            <ReactPlayer
                url={url}
                style={{
                    maxWidth: "100%",
                    objectFit: "contain",
                }}
                width="400px"
                height="250px"
                ref={videoRef}
                controls={true}
                onDuration={(duration) =>
                    setState({ ...state, duration: duration })
                }
                playing
                onPlay={() => setState({ ...state, playing: true })}
                onPause={() => setState({ ...state, playing: false })}
                onError={() => console.log("error in media sec")}
                onSeek={(e) => console.log("onSeek", e)}
                onProgress={handleProgress}
            />

            <Chapters jumpToTime={jumpToTime} />
        </Collapse>
    );
}

const mapStateToProps = (state) => {
    const scrollToId = reducers.getScrollToId(state);
    const syncIdOnClick = reducers.getSyncIdOnClick(state);
    const videoData = reducers.getVideoData(state);
    let Media = reducers.getMediaData(state);
    const selectedText = reducers.getSelectedText(state);
    const alignmentData = reducers.getAlignment(state);
    const witness = reducers.getSelectedTextWitnessId(state, selectedText.id);
    const isPanelLinked = reducers.isPanelLinked(state);

    return {
        isPanelLinked,
        scrollToId,
        syncIdOnClick,
        videoData,
        selectedMedia: Media,
        selectedText,
        alignmentData,
        witness,
        mediaInterval: reducers.getMediaInterval(state),
    };
};

const matchDispatchToProps = (dispatch) => {
    const toggleImage = (data) => dispatch(actions.changedShowPageImages(data));
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));

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
    const changeMediaInterval = (interval) => {
        dispatch(actions.selectMediaInterval(interval));
    };
    return {
        toggleImage,
        onSelectedSearchResult,
        changeMediaSelection,
        changeMediaInterval,
        changeSelectedRange: (payload) => {
            dispatch(actions.changeSelectedRange(payload));
        },
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(Video);

function toSec(hms = "") {
    var a = hms.split(":"); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds;
}
