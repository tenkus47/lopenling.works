import React from "react";
import VerticalSplitIcon from "components/UI/muiIcon/VerticalSplit";
import {
    styled,
    createTheme,
    ThemeProvider,
} from "components/UI/muiComponent/styles";
import MuiToggleButton from "components/UI/muiComponent/ToggleButton";
import { Tooltip } from "components/UI/muiComponent";

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
