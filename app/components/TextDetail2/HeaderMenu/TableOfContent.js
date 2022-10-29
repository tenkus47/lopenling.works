import React from "react";
import { IconButton } from "components/UI/muiComponent";
import { Menu as MenuIcon, Clear as ClearIcon } from "components/UI/muiIcon";

function TableOfContent(props) {
    const handleClick = () => {
        props.changeShowTableContent(!props.showTableContent);
    };
    return (
        <React.Fragment key="right">
            <IconButton onClick={handleClick}>
                {props.showTableContent ? <ClearIcon /> : <MenuIcon />}
            </IconButton>
        </React.Fragment>
    );
}

export default TableOfContent;
