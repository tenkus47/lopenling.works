import React, { useState, useCallback, useRef, useEffect } from "react";
import styles from "components/TextDetail/TextDetailHeading.css";
import SelectVersion from "./SelectVersion";
import TextList from "./TextListContainer";
import OptionsIcon from "images/options.svg";
import Settings from "./HeaderMenu/Settings";
import Search from "./HeaderMenu/Search";
import TableOfContent from "./HeaderMenu/TableOfContent";
import _ from "lodash";
import { Close as CloseIcon } from "components/UI/muiIcon";

import {
    Stack,
    Box,
    TextField,
    Button,
    Collapse,
    Divider,
    ButtonGroup,
    ListItem,
    List,
    IconButton,
} from "components/UI/muiComponent";

import SearchList from "./HeaderMenu/SearchList";
type HeaderProps = {
    user: {},
    textFontSize: Number,
    onChangedFontSize: () => void,
    searchResults: [],
    onSelectedSearchResult: () => void,
};

function TextDetailHeading(props: HeaderProps) {
    const [findvalue, setfindvalue] = useState("");
    let [showFind, setShowFind] = useState(false);
    let [visible, setVisible] = useState(false);

    const inputRef = useRef();
    const headingRef = useRef();
    const handleListItemClick = (id) => {
        props.changeSelectSyncId(id);
    };
    const debouncedSearch = React.useRef(
        _.debounce((s) => {
            props.searchChanged(s);
        }, 1000)
    ).current;
    const handleSearch = useCallback(
        (e) => {
            e.preventDefault();
            debouncedSearch(findvalue);
            setVisible(true);
        },
        [findvalue]
    );

    const handleWindowSearch = useCallback(() => {
        setShowFind(!showFind);
    }, [showFind]);

    useEffect(() => {
        if (showFind === true) {
            inputRef.current.focus();
        }

        if (showFind === false) debouncedSearch(null);
    }, [showFind]);

    const closeSearchItemBox = () => {
        setVisible(false);
        debouncedSearch(null);
        setfindvalue("");
    };

    let condition =
        _.isObject(props.searchResults) &&
        props.searchResults.hasOwnProperty(props.selectedText.id);
    let results = condition
        ? props.searchResults[props.selectedText.id].results
        : [];
    return (
        <Stack
            direction="column"
            ref={headingRef}
            spacing={1}
            sx={{
                paddingInline: { md: 1, xs: 0 },
                paddingBlock: { md: 1, xs: 0 },
                borderTop: { md: 0, xs: "1px solid gray" },
                bgcolor: "heading.main",
                color: "text.primary",
            }}
        >
            <Stack direction="row" spacing={1} justifyContent="space-between">
                <Box
                    sx={{
                        display: "flex",
                        gap: { md: 2, sx: 0 },
                        flexDirection: { md: "row", xs: "column" },
                    }}
                >
                    <TextList />
                    <SelectVersion
                        witnesses={props.witnesses}
                        activeWitness={props.selectedWitness}
                        onSelectedWitness={props.onSelectedWitness}
                        user={props.user}
                    />
                </Box>

                <ButtonGroup
                    size="small"
                    aria-label="small button group"
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "fit-content",
                        width: "fit-content",
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        bgcolor: "background.paper",
                        color: "text.secondary",
                        "& svg": {
                            m: 1,
                        },
                        "& hr": {
                            mx: 0.5,
                        },
                    }}
                    className={styles.button_group_menu}
                >
                    <Search handleWindowSearch={handleWindowSearch} />
                    <Settings
                        textFontSize={props.textFontSize}
                        onChangedFontSize={props.onChangedFontSize}
                        onExport={props.onExport}
                    />
                    <TableOfContent
                        changeShowTableContent={props.changeShowTableContent}
                        showTableContent={props.showTableContent}
                    />
                </ButtonGroup>
            </Stack>
            <Collapse in={showFind} mountOnEnter unmountOnExit>
                <form onSubmit={handleSearch}>
                    <Stack direction="row" spacing={2} position="relative">
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            inputProps={{
                                style: {
                                    height: 25,
                                    padding: "0 14px",
                                },
                            }}
                            style={{ height: 25, flex: 1 }}
                            fullWidth
                            inputRef={inputRef}
                            value={findvalue}
                            onChange={(e) => setfindvalue(e.target.value)}
                        />
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={handleSearch}
                            style={{ height: 25 }}
                        >
                            Search
                        </Button>
                        {props.searchResults && visible && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 35,
                                    right: 0,
                                    zIndex: 1,
                                    bgcolor: "heading.main",
                                    width: 350,
                                    height: 350,
                                    boxShadow: 3,
                                    overflowX: "hidden",
                                    boxShadow: 3,
                                }}
                            >
                                {results.length === 0 && (
                                    <p>no such word present</p>
                                )}
                                {condition && results.length > 0 && (
                                    <SearchList
                                        onSelectedSearchResult={
                                            props.onSelectedSearchResult
                                        }
                                        searchValue={props.searchValue}
                                        results={results}
                                        selectedText={props.selectedText}
                                    />
                                )}
                                <IconButton
                                    aria-label="closeButton"
                                    onClick={closeSearchItemBox}
                                    size="small"
                                    sx={{
                                        right: 15,
                                        top: 0,
                                        position: "absolute",
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            </Box>
                        )}
                    </Stack>
                </form>
            </Collapse>
        </Stack>
    );
}

export default TextDetailHeading;
