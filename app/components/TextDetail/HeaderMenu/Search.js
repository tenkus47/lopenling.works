import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

function Search({ handleWindowSearch }) {
    return (
        <IconButton size="small" variant="text" onClick={handleWindowSearch}>
            <SearchIcon />
        </IconButton>
    );
}

export default Search;
