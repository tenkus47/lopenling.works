import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import * as reducers from "reducers";
import { Typography, Box } from "@mui/material";
function Commentary({ alignmentData, text, selectSecondWindowText }) {
    let targetWitness = alignmentData.target;
    let textAlignments = alignmentData?.alignments.text || [];
    const handleSelectText = (text) => {
        selectSecondWindowText(text);
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom component="div">
                Commentary
            </Typography>
            {textAlignments.length > 0 &&
                textAlignments.map((alignment, index) => {
                    return (
                        <ul
                            style={{ paddingLeft: 18 }}
                            key={`commentary-${index}`}
                        >
                            <li
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    handleSelectText({
                                        id: 140,
                                        name: "བྱང་ཆུབ་སེམས་དཔའི་སྤྱོད་པ་ལ་འཇུག་པ་བཞུགས་པའི་འགྲེལ་པ།",
                                    })
                                }
                            >
                                {alignment.target}
                            </li>
                        </ul>
                    );
                })}
        </Box>
    );
}

const mapStateToProps = (state: AppState): {} => {
    let selectedMedia = reducers.getMediaData(state);
    const alignmentData = reducers.getAlignment(state);
    let text = reducers.getText(state, alignmentData.target);
    return {
        alignmentData,
        selectedMedia,
        text,
    };
};

const mapDispatchToProps = (dispatch) => {
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));
    return {
        changeMediaSelection,
        onChangeWindowOpen: (data: boolean) => {
            dispatch(actions.toggleSecondWindow(data));
        },
        onSelectedSearchResult: (
            text: number,
            start: number,
            length: number
        ) => {
            dispatch(actions.selectedSearchResult(text, start, length));
        },
        selectSecondWindowText: (data) => {
            dispatch(actions.selectedText2(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commentary);
