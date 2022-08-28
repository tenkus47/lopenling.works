// @flow
import React, { useTransition } from "react";
import styles from "./TextsSearch.css";
import * as constants from "app_constants";

import { injectIntl } from "react-intl";
import Button from "components/UI/Button";
import SearchIcon from "images/search.svg";

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

    const handleChange = (e) => {
        startTransition(() => {
            if (e.target.value === "") {
                props.searchChanged(null);
                return;
            }
            props.searchChanged(e.target.value);
        });
    };
    console.log(props.textListWidth);
    return (
        <div
            className={styles.textsSearchContainer}
            style={{ maxWidth: props.textListWidth }}
        >
            <div className={styles.textsSearch}>
                <form onSubmit={initiateSearch}>
                    <input
                        onChange={handleChange}
                        style={{ outline: "none", width: 150 }}
                        type="text"
                        id="textSearchInput"
                        placeholder={props.intl.formatMessage({
                            id: "leftbar.search",
                        })}
                        ref={textInput}
                    />
                    <Button
                        backgroundColor="#35BF5C"
                        onClick={initiateSearch}
                        // title={props.intl.formatMessage({
                        //     id: "leftbar.search",
                        // })}
                        noBezel={true}
                        icon={<SearchIcon />}
                    />
                </form>
            </div>
        </div>
    );
};

export default injectIntl(TextsSearch);
