import React, { useEffect, useState } from "react";
import WrenchIcon from "images/wrench.svg";
import useLocalStorage from "components/utility/useLocalStorage";
import FontContainer from "components/textDetail/fontSize";

import { Check as CheckIcon } from "components/UI/muiIcon";
import {
    IconButton,
    MenuList,
    MenuItem,
    Divider,
    Grow,
    Box,
    ClickAwayListener,
} from "components/UI/muiComponent";
import { FONT_LIST } from "app_constants";

function Settings(props) {
    let [showOption, setShowOption] = useState(false);
    let [fontSelect, setFontSelect] = useLocalStorage(
        "WindowTwoFont",
        "Tibetan"
    );
    useEffect(() => {
        document.body.style.setProperty("--tibetan-fonts2", fontSelect);
    }, []);
    const handleClick = () => {
        setShowOption((prev) => !prev);
    };
    const handlefont = (value) => {
        setFontSelect(value);
        document.body.style.setProperty("--tibetan-fonts2", `${value}`);
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
                            Export Document
                            {props.exportingWitness && <CheckIcon />}
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
