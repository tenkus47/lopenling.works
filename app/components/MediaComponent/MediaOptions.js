import React from "react";
import ImageComponent from "./Image";
import AudioComponent from "./Audio";
import VideoComponent from "./Video";
import styles from "./MediaOptions.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, IconButton } from "@mui/material";

function MediaOptions(props) {
    // if (props.selectedMedia.isImageVisible)
    //     return <ImageComponent {...props} />;

    return (
        <Box
            className={styles.MediaOption}
            sx={{
                boxShadow: 2,
                width: "100%",
                height: "100%",
            }}
        >
            <Box
                className={styles.header}
                sx={{ bgcolor: "heading.main", color: "text.primary" }}
            >
                <h3>
                    {props.selectedMedia.isVideoVisible && "VIDEO"}
                    {props.selectedMedia.isAudioVisible && "AUDIO"}
                    {/* {isPortraitImage?"portrait":"landscape"} */}
                </h3>
                <IconButton
                    className={styles.closeBtn}
                    onClick={() => props.changeMediaSelection(null)}
                >
                    <CancelIcon />
                </IconButton>
            </Box>
            <Box
                sx={{
                    height: "100%",
                    paddingInline: 2,
                    bgcolor: "navbar.main",
                    color: "texts.main",
                }}
            >
                {/* {props.selectedMedia.isVideoVisible && (
                    <VideoComponent {...props} />
                )}
                {props.selectedMedia.isAudioVisible && (
                    <AudioComponent {...props} />
                )} */}
            </Box>
        </Box>
    );
}

export default MediaOptions;
