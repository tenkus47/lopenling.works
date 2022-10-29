import React, {
    useState,
    useRef,
    useCallback,
    useMemo,
    useEffect,
} from "react";
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import classname from "classnames";
import styles from "./TextList.css";
import {
    TextField,
    ClickAwayListener,
    Box,
    Typography,
    Button,
    Grow,
} from "components/UI/muiComponent";
import addShay from "lib/addTibetanShay";
import { filter } from "lodash";
function TextList(props) {
    const temptext = useRef(props.texts);
    const [textslist, setTextList] = useState(temptext.current);
    const [filterValue, setFilterValue] = useState(null);
    const onSelectedText = props.onSelectedText;
    const selectedText = props.selectedText;
    const [isOpen, setIsOpen] = useState(false);

    let selected = selectedText?.name;
    const cache = useRef(
        new CellMeasurerCache({
            fixedHeight: true,
            defaultHeight: 40,
        })
    );

    let classes = [styles.textlist];
    useEffect(() => {
        let temp = [];
        if (filterValue === "") {
            setTextList([...temptext.current]);
        }
        if (filterValue !== null && filterValue !== "") {
            temp = temptext.current.filter((val) => {
                return val.name.includes(filterValue);
            });
            setTextList([...temp]);
        }
    }, [filterValue]);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
        if (isOpen === false) classes.push(styles.open);
    };
    const handleChange = (e) => {
        let value = e.target.value;
        setFilterValue(value);
    };

    const rowRenderer = React.useCallback(
        ({ key, index, style, parent }) => {
            let data = textslist[index];
            return (
                <CellMeasurer
                    key={`optionvalues-${key}`}
                    cache={cache.current}
                    parent={parent}
                    columnIndex={0}
                    rowIndex={index}
                >
                    <div
                        style={style}
                        onClick={() => {
                            setIsOpen(false);
                            onSelectedText(data);
                        }}
                    >
                        <Box
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                width: "13rem",
                                paddingLeft: 2,
                                fontSize: {
                                    lg: 12,
                                    md: 11,
                                    sm: 10,
                                    xs: 10,
                                },
                                color: "text.primary",
                            }}
                            component="div"
                        >
                            <Typography noWrap={true}>
                                {addShay(data.name)}
                            </Typography>
                        </Box>
                    </div>
                </CellMeasurer>
            );
        },
        [textslist]
    );
    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <div style={{ position: "relative", marginLeft: 10 }}>
                <Button
                    onClick={handleClick}
                    component="div"
                    variant="outlined"
                    sx={{
                        textOverflow: "ellipsis",
                        width: "10rem",
                        height: "100%",
                        color: "text.primary",
                    }}
                >
                    <Typography noWrap={true}>
                        {selected ? selected : "select Text here"}
                    </Typography>
                </Button>

                <Grow in={isOpen}>
                    <Box
                        className={classname(classes)}
                        sx={{
                            position: "absolute",
                            bgcolor: "heading.main",
                            zIndex: 1,
                        }}
                    >
                        <TextField
                            onChange={handleChange}
                            id="standard-basic"
                            label="Search"
                            variant="standard"
                            style={{ width: "100%" }}
                        />
                        <AutoSizer>
                            {({ width, height }) => (
                                <List
                                    width={width}
                                    height={height}
                                    rowHeight={30}
                                    deferredMeasurementCache={cache.current}
                                    rowCount={textslist.length}
                                    rowRenderer={rowRenderer}
                                />
                            )}
                        </AutoSizer>
                    </Box>
                </Grow>
            </div>
        </ClickAwayListener>
    );
}

export default React.memo(TextList);
