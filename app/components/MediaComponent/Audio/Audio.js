import { Collapse } from "components/UI/muiComponent";
import React from "react";
import Player from "react-howler-player";
import { useTheme } from "@mui/material/styles";
function Audio(props) {
    const theme = useTheme();
    let url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    let playerRef = React.useRef(null);
    const handleSeek = (e) => {
        console.log(e);
    };
    const onPlayerReady = (data) => {
        console.log(data);
    };

    return (
        <Collapse in={props.open}>
            <Player
                profile="top_progress"
                src={[url]}
                isDark={theme.palette.mode === "dark" ? true : false}
                onLoad={onPlayerReady}
                speedPanel={"bottom"}
                ref={playerRef}
                onPlay={handleSeek}
            />
        </Collapse>
    );
}

export default Audio;
