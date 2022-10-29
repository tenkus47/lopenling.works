import React from "react";
import { IconButton } from "components/UI/muiComponent";
import { Menu as MenuIcon, Clear as ClearIcon } from "components/UI/muiIcon";
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
