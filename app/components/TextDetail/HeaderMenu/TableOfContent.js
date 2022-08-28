import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
function TableOfContent({ changeShowTableContent, showTableContent }) {
    function handleClick() {
        changeShowTableContent(!showTableContent);
    }
    return (
        <React.Fragment>
            <IconButton onClick={handleClick}>
                {showTableContent ? <ClearIcon /> : <MenuIcon />}
            </IconButton>
        </React.Fragment>
    );
}

export default TableOfContent;
