import React, { useState, useEffect } from "react";
import WrenchIcon from "images/wrench.svg";
import Slider from "../../UI/Slider";
import CheckIcon from "@mui/icons-material/Check";
import useLocalStorage from "components/utility/useLocalStorage";
import {
    IconButton,
    MenuList,
    MenuItem,
    Grow,
    Divider,
    Typography,
    Box,
    ClickAwayListener,
} from "@mui/material";
import { FONT_LIST } from "app_constants";
function Settings(props) {
    let [showOption, setShowOption] = useState(false);
    let [fontSelect, setFontSelect] = useLocalStorage(
        "WindowOneFont",
        "Tibetan"
    );
    useEffect(() => {
        document.body.style.setProperty("--tibetan-fonts", fontSelect);
    }, []);
    const handleClick = () => {
        setShowOption((prev) => !prev);
    };
    const handlefont = (value) => {
        setFontSelect(value);
        document.body.style.setProperty("--tibetan-fonts", `${value}`);
        let update = document.getElementById("updateList");

        setTimeout(() => {
            update.click();
        }, 800);
        setShowOption(false);
    };

    return (
        <ClickAwayListener onClickAway={() => setShowOption(false)}>
            <Box position="relative">
                <IconButton onClick={handleClick} size="small" variant="text">
                    <WrenchIcon height={20} width={20} fill="currentColor" />
                </IconButton>
                <Grow in={showOption}>
                    <MenuList
                        dense
                        sx={{
                            position: "absolute",
                            right: 0,
                            zIndex: 2,
                            top: 40,
                            bgcolor: "heading.main",
                        }}
                    >
                        <Slider
                            max={20}
                            min={7}
                            initialvalue={props.textFontSize}
                            changeSize={props.onChangedFontSize}
                        />
                        <Divider />
                        <FontSelection
                            selectFont={handlefont}
                            selectedfont={fontSelect}
                        />
                        <MenuItem onClick={() => props.onExport()}>
                            <Typography variant="subtitle2">
                                Export Document
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Grow>
            </Box>
        </ClickAwayListener>
    );
}

export default Settings;

const FontSelection = ({ selectFont, selectedfont }) => {
    let fontAvailable = FONT_LIST || [];

    return (
        <Box textAlign={"center"}>
            <span>Font:</span>{" "}
            <select
                onChange={(e) => selectFont(e.target.value)}
                value={selectedfont}
            >
                {fontAvailable.map((font, index) => {
                    return (
                        <option key={index + "-fontselect"} value={font}>
                            {font}
                        </option>
                    );
                })}
            </select>
        </Box>
    );
};
