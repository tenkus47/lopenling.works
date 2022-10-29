import React, { useState, useEffect } from "react";
import WrenchIcon from "images/wrench.svg";
import { Check as CheckIcon } from "components/UI/muiIcon";
import useLocalStorage from "components/utility/useLocalStorage";
import FontContainer from "components/textDetail/fontSize";
import {
    IconButton,
    MenuList,
    MenuItem,
    Grow,
    Divider,
    Typography,
    Box,
    ClickAwayListener,
} from "components/UI/muiComponent";

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

        setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
        }, 1000);
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
                        <FontContainer
                            fontSize={props.textFontSize}
                            onChange={props.onChangedFontSize}
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
