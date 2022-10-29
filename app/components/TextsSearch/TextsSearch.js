// @flow
import React, { useTransition } from "react";
import styles from "./TextsSearch.css";
import * as constants from "app_constants";

import { injectIntl } from "react-intl";
// import Button from "components/UI/Button";
import { Button, IconButton } from "components/UI/muiComponent";
import { Search as SearchIcon } from "components/UI/muiIcon";
import { Box } from "components/UI/muiComponent";

type Props = {
    searchValue: string,
    searchChanged: (searchTerm: string) => void,
    selectedSearchOption?: (e: SyntheticEvent<HTMLSelectElement>) => void,
    minimiseButtonClicked: () => void,
    intl: { formatMessage: ({ [id: string]: string }) => string },
    searchTerm: string,
    textListWidth: number,
};

const TextsSearch = (props: Props) => {
    let textInput: { current: null | HTMLInputElement } = React.createRef();
    const [ispending, startTransition] = useTransition();

    const initiateSearch = (e: SyntheticEvent<HTMLElement>) => {
        e.preventDefault();
        if (textInput.current instanceof HTMLInputElement) {
            const searchTerm = textInput.current.value;
            startTransition(() => {
                props.searchChanged(searchTerm);
            });
        }
    };

    return (
        <Box
            sx={{ bgcolor: "inherit" }}
            className={styles.textsSearchContainer}
            // style={{ maxWidth: props.textListWidth }}
        >
            <div className={styles.textsSearch}>
                <form onSubmit={initiateSearch}>
                    <input
                        style={{ outline: "none", maxWidth: 196 }}
                        type="text"
                        id="textSearchInput"
                        placeholder={props.intl.formatMessage({
                            id: "leftbar.search",
                        })}
                        ref={textInput}
                    />
                    <Button
                        onClick={initiateSearch}
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: 2 }}
                    >
                        <SearchIcon />
                    </Button>
                </form>
            </div>
        </Box>
    );
};

export default injectIntl(TextsSearch);
