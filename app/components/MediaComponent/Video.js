import React, { useRef, useEffect, useState, useCallback } from "react";
import ReactPlayer from "react-player";
import _ from "lodash";
import { Collapse } from "@mui/material";

function toHMS(seconds) {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}
function toSec(hms = "") {
    var a = hms.split(":"); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds;
}
function calTimeToSeek(maxValue, currentTime) {
    let i = toSec(currentTime) / maxValue;
    return parseFloat(i);
}
function getClosestNumber(arr, d) {
    return arr.reduce((a, b) => (b <= d && a < b ? b : a), 0);
}
function Video(props) {
    let textIdfromAlignment = props.alignmentData.text;
    let sourceId = props?.videoData?.source?.text;
    const VideoData = props?.videoData?.alignment || [];
    const url = "https://www.youtube.com/watch?v=2MMM_ggekfE";
    const [interval, setInterval] = useState({});
    let VideoIdList = [];

    // const syncIdOnScroll = props.syncIdOnScroll;
    const syncIdOnClick = props.syncIdOnClick;
    const [state, setState] = useState({
        played: 0,
        duration: 0,
        playing: true,
    });
    if (!_.isEmpty(VideoData)) {
        VideoIdList = VideoData.map((l) => parseInt(l.source_segment.start));
    }

    useEffect(() => {
        if (textIdfromAlignment === props.selectedText.id) {
            //     let intersection = syncIdOnScroll.filter(element => VideoIdList.includes(element));
            //     newList= VideoData.filter(d=>d.source_segment===intersection[0]);
            //     jumpToTime(newList[0]?.target_segment.start)
            let ClickId = syncIdOnClick;
            let closestID = getClosestNumber(VideoIdList, ClickId);
            let data = VideoData.find(
                (l) => l.source_segment.start === closestID.toString()
            );
            if (!_.isEmpty(data)) {
                jumpToTime(data.target_segment.start);
            }
        }
    }, [syncIdOnClick]);

    const changeTextBackground = useCallback(() => {
        let current = interval;
        if (textIdfromAlignment === props.selectedText.id) {
            for (let i = current.start; i < current.end; i++) {
                let currentIds = document.getElementById(`s_${i}`);
                if (currentIds) {
                    currentIds.style.fontWeight = "bold";
                }
            }
        }
    }, [interval.start]);

    useEffect(() => {
        let timer = setTimeout(() => changeTextBackground(), 800);
        let current = interval;
        if (interval.start) {
            props.changeScrollToId({
                id: current.start || null,
                from: "video",
            });
        }
        return () => {
            clearTimeout(timer);
            for (let i = current.start; i < current.end; i++) {
                let currentIds = document.getElementById(`s_${i}`);
                if (currentIds) {
                    currentIds.style.fontWeight = "normal";
                }
            }
        };
    }, [interval.start]);

    const videoRef = useRef();

    const jumpToTime = (time) => {
        let newData = calTimeToSeek(state.duration, time);
        videoRef.current.seekTo(parseFloat(newData));
    };

    const handleProgress = (e) => {
        const played = e.playedSeconds;
        const Interval = VideoData.find(
            (time) =>
                toSec(time.target_segment.start) < played &&
                toSec(time.target_segment.end) > played
        );
        if (!_.isEmpty(Interval)) {
            let source_segment = Interval.source_segment;
            changeTextBackground();
            setInterval({ ...source_segment });
        }
    };
    if (VideoData.length === 0) return <div />;
    if (sourceId !== props.selectedText.id) return <div />;
    return (
        <Collapse in={props.open}>
            <ReactPlayer
                url={url}
                style={{ maxWidth: "100%" }}
                ref={videoRef}
                controls={true}
                onDuration={(duration) =>
                    setState({ ...state, duration: duration })
                }
                light
                playing
                onPlay={() => setState({ ...state, playing: true })}
                onPause={() => setState({ ...state, playing: false })}
                onProgress={handleProgress}
                onError={() => console.log("error in media sec")}
            />
        </Collapse>
    );
}

export default Video;
