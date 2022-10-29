import React from "react";
import styles from "./ResourceOption.css";
import Search from "components/TextsSearch";
import TextListContainer from "containers/TextListContainer";
function FullTextSearch() {
    return (
        <>
            <Search />
            <TextListContainer />
        </>
    );
}

export default FullTextSearch;
