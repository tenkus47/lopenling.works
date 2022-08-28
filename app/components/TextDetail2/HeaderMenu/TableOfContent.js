import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

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
