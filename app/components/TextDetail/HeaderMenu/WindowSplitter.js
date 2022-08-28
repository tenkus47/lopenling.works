import React from "react";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";
import { Tooltip } from "@mui/material";

const ToggleButton = styled(MuiToggleButton)(({ selectedcolor }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "white",
        backgroundColor: selectedcolor,
    },
}));
const theme = createTheme({
    palette: {
        text: {
            primary: "#00398e",
        },
    },
});

function WindowSplitter(props) {
    let { isSecondWindowOpen, onChangeWindowOpen } = props;
    return (
        <ThemeProvider theme={theme}>
            <ToggleButton
                value="secondWindow"
                selected={isSecondWindowOpen}
                onClick={() => {
                    onChangeWindowOpen(!isSecondWindowOpen, 139);
                }}
                style={{
                    padding: 0,
                }}
                selectedcolor="#053982"
            >
                <Tooltip title="split panel">
                    <VerticalSplitIcon />
                </Tooltip>
            </ToggleButton>
        </ThemeProvider>
    );
}

export default WindowSplitter;
