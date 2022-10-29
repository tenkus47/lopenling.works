import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./Resources.css";
import {
    Image as ImageIcon,
    OndemandVideo as OndemandVideoIcon,
    Audiotrack as AudiotrackIcon,
} from "components/UI/muiIcon";

import * as actions from "actions";
import * as reducers from "reducers";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "components/UI/muiComponent";
function Resources(props) {
    const handleMediaToggle = (data) => {
        props.changeMediaSelection(data);
    };

    return (
        <>
            <Typography variant="h6" gutterBottom component="div">
                Media
            </Typography>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <ListItemButton
                    selected={props.showPageImages}
                    onClick={() =>
                        props.changedShowPageImages(!props.showPageImages)
                    }
                >
                    <ListItemIcon>
                        <ImageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Image" />
                </ListItemButton>
                <ListItemButton
                    selected={props.selectedMedia.isVideoVisible}
                    onClick={() => handleMediaToggle("VIDEO")}
                >
                    <ListItemIcon>
                        <OndemandVideoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Video" />
                </ListItemButton>
                <ListItemButton
                    selected={props.selectedMedia.isAudioVisible}
                    onClick={() => handleMediaToggle("AUDIO")}
                >
                    <ListItemIcon>
                        <AudiotrackIcon />
                    </ListItemIcon>
                    <ListItemText primary="Audio" />
                </ListItemButton>
            </List>
        </>
    );
}

const mapStateToProps = (state: AppState): {} => {
    let selectedMedia = reducers.getMediaData(state);
    const alignmentData = reducers.getAlignment(state);
    const showPageImages = reducers.showPageImages(state);
    return {
        alignmentData,
        selectedMedia,
        showPageImages,
    };
};

const mapDispatchToProps = (dispatch) => {
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));
    return {
        changedShowPageImages: (data) => {
            dispatch(actions.changedShowPageImages(data));
        },
        changeMediaSelection,
        onSelectedSearchResult: (
            text: number,
            start: number,
            length: number
        ) => {
            dispatch(actions.selectedSearchResult(text, start, length));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
