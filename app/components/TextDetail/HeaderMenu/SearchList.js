import React, { useRef } from "react";
import {
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    List,
} from "react-virtualized";
import HighlightedString from "./HighlightedString";
import styles from "./SearchStyle.css";

function SearchList(props) {
    const { handleListItemClick, searchValue, results, selectedText } = props;
    let listRef = useRef();
    let cache = useRef(
        new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 100,
        })
    );
    let rowRenderer = ({ key, index, parent, style }) => {
        let result = results[index];
        return (
            <CellMeasurer
                key={`listkeys2-${key}`}
                cache={cache.current}
                parent={parent}
                columnIndex={0}
                rowIndex={index}
            >
                <div style={style}>
                    {results.length > 0 && (
                        <div
                            className={styles.searchListItem}
                            onClick={() => handleListItemClick(result[0])}
                        >
                            <HighlightedString
                                string={result[1]}
                                highlightClass={styles.highlight}
                                searchTerm={searchValue}
                            />
                        </div>
                    )}
                </div>
            </CellMeasurer>
        );
    };

    if (!results) return null;
    return (
        <>
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        ref={listRef}
                        height={height}
                        rowCount={results?.length}
                        rowHeight={cache.current.rowHeight}
                        deferredMeasurementCache={cache.current}
                        rowRenderer={rowRenderer}
                        width={width}
                        overscanRowCount={1}
                    ></List>
                )}
            </AutoSizer>
        </>
    );
}

export default SearchList;
