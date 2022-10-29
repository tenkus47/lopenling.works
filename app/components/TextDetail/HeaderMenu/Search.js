import React from "react";
import { Search as SearchIcon } from "components/UI/muiIcon";
import { IconButton } from "components/UI/muiComponent";

function Search({ handleWindowSearch }) {
    return (
        <IconButton size="small" variant="text" onClick={handleWindowSearch}>
            <SearchIcon />
        </IconButton>
    );
}

export default Search;
