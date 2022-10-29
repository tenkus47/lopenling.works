// @flow
import * as actions from "actions";

export type MediaState = {
    isPanelVisible: Boolean,
    isVideoVisible: Boolean,
    isAudioVisible: Boolean,
    videoData: {},
    audioData: {},
    selectedInterval: {},
};

export const initialMediaState: MediaState = {
    isPanelVisible: false,
    isVideoVisible: false,
    isAudioVisible: false,
    videoData: {},
    audioData: {},
    selectedInterval: {
        source_segment: {
            end: "1",
            start: "0",
        },
        target_segment: {
            end: "00:00:1",
            start: "00:00:00",
        },
    },
};

function selectMedia(state, action) {
    if (action.payload === null || action.payload === false) {
        return {
            ...state,
            isPanelVisible: false,
            isVideoVisible: action.payload,
            isAudioVisible: action.payload,
            isImageVisible: action.payload,
        };
    }

    switch (action.payload) {
        case "VIDEO":
            if (state.isVideoVisible === true) {
                return {
                    ...state,
                    isVideoVisible: false,
                    isPanelVisible: false,
                };
            }
            return {
                ...state,
                isPanelVisible: true,
                isVideoVisible: true,
                isAudioVisible: false,
            };
        case "AUDIO":
            if (state.isAudioVisible === true) {
                return {
                    ...state,
                    isAudioVisible: false,
                    isPanelVisible: false,
                };
            }
            return {
                ...state,
                isVideoVisible: false,
                isPanelVisible: true,
                isAudioVisible: true,
            };
    }
}
function changeMediaSyncInterval(state: MediaState, action): MediaState {
    return {
        ...state,
        selectedInterval: action.interval,
    };
}

function loadVideoData(state: MediaState, action): MediaState {
    return {
        ...state,
        videoData: action.data,
    };
}

const mediaReducers = {
    [actions.ACTIVATE_MEDIA]: selectMedia,
    [actions.LOAD_VIDEO_DATA]: loadVideoData,
    [actions.SELECT_MEDIA_INTERVAL]: changeMediaSyncInterval,
};

export const getMediaData = (state) => {
    return state;
};
export const isPanelVisible = (state) => {
    return state.isPanelVisible;
};

export const getMediaInterval = (state) => {
    return state.selectedInterval;
};

export const getVideoData = (state: DataState) => {
    return state.videoData;
};

export default mediaReducers;
