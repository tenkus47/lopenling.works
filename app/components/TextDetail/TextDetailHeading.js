import React, {
    useState,
    useRef,
    useCallback,
    useEffect,
    useMemo,
} from "react";
import styles from "./textDetailHeading.css";
import SelectVersion from "./SelectVersion";
import _ from "lodash";
import TextList from "./TextListContainer";
import CloseIcon from "@mui/icons-material/Close";
import {
    Stack,
    Box,
    TextField,
    Button,
    Collapse,
    Divider,
    ButtonGroup,
    IconButton,
} from "@mui/material";
import Refresh from "./HeaderMenu/Refresh";
import Search from "./HeaderMenu/Search";
import Settings from "./HeaderMenu/Settings";
import TableOfContent from "./HeaderMenu/TableOfContent";
import SearchList from "./HeaderMenu/SearchList";

type HeaderProps = {
    selectedText: {},
    witnesses: Witness[],
    selectedWitness: Witness,
    onSelectedWitness: () => void,
    user: User,
    activeLocale: string,
    accountOverlayVisible: boolean,
    navigationButtonClicked: () => void,
    menuButtonClicked: () => void,
    textFontSize: Number,
    onChangedFontSize: () => void,
    onChangeWindowOpen: () => void,
    isSecondWindowOpen: boolean,
    changeIsAnnotating: () => void,
    isAnnotating: Boolean,
    searchChanged: () => void,
    searchValue: String,
    changeShowTableContent: () => void,
    searchResults: [],
};

function TextDetailHeading(props: HeaderProps) {
    const [findvalue, setfindvalue] = useState("");
    let [showFind, setShowFind] = useState(false);
    let [visible, setVisible] = useState(false);
    const headingRef = useRef();
    const inputRef = useRef();
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
        if (showFind === false) debouncedSearch(null);
        setShowFind(!showFind);
    }, [showFind]);

    useEffect(() => {
        if (showFind === true) {
            inputRef.current.focus();
        }
        if (showFind === false) debouncedSearch(null);
    }, [showFind]);

    const closeSearchItemBox = useCallback(() => {
        setVisible(false);
        debouncedSearch(null);
        setfindvalue("");
    }, []);

    let condition = useMemo(
        () =>
            _.isObject(props.searchResults) &&
            props.searchResults.hasOwnProperty(props.selectedText.id),
        [props.searchResults, props.selectedText]
    );
    let results = condition
        ? props.searchResults[props.selectedText.id].results
        : [];
    return (
        <Stack
            ref={headingRef}
            direction="column"
            spacing={1}
            sx={{
                paddingInline: { md: 1, xs: 0 },
                paddingBlock: { md: 1, xs: 0 },
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
                    sx={{
                        position: "relative",
                        display: "flex",
                        height: "fit-content",
                        alignItems: "center",
                        justifyContent: "center",
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
                    <Refresh isSecondWindowOpen={props.isSecondWindowOpen} />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Search handleWindowSearch={handleWindowSearch} />
                    <Settings
                        textFontSize={props.textFontSize}
                        onChangedFontSize={props.onChangedFontSize}
                        onExport={props.onExport}
                        isPanelLinked={props.isPanelLinked}
                    />
                    <TableOfContent
                        changeShowTableContent={props.changeShowTableContent}
                        showTableContent={props.showTableContent}
                    />
                </ButtonGroup>
            </Stack>

            <Collapse in={showFind}>
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
                                    height: 350,
                                    width: 350,
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
                                        handleListItemClick={
                                            handleListItemClick
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

export default React.memo(TextDetailHeading);
