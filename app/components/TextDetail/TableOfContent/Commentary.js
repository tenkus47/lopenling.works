import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import * as reducers from "reducers";
import { Typography, Box } from "components/UI/muiComponent";

const TEXT_DEMO_DETAIL_ID = 2;

function Commentary({
    getWitness,
    alignmentData,
    text,
    selectSecondWindowText,
}) {
    let textAlignments = alignmentData?.alignments.text || [];

    const handleSelectText = (text) => {
        selectSecondWindowText(text);
    };
    if (!textAlignments.length) return null;
    return (
        <Box>
            <Typography variant="h6" gutterBottom component="div">
                Commentary
            </Typography>
            {textAlignments.map((alignment, index) => {
                return (
                    <div
                        key={`commentary-${index}`}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            handleSelectText(text(TEXT_DEMO_DETAIL_ID))
                        }
                    >
                        {text(2).name}
                        {alignment.target}
                    </div>
                );
            })}
        </Box>
    );
}

const mapStateToProps = (state: AppState): {} => {
    let selectedMedia = reducers.getMediaData(state);
    const alignmentData = reducers.getAlignment(state);
    let text = (textId) => reducers.getText(state, textId);
    let getWitness = (id) => reducers.getWitness(state, id);
    return {
        alignmentData,
        selectedMedia,
        text,
        getWitness,
    };
};

const mapDispatchToProps = (dispatch) => {
    const changeMediaSelection = (data) =>
        dispatch(actions.mediaSelection(data));

    const onChangeWindowOpen = (data: boolean) => {
        dispatch(actions.toggleSecondWindow(data));
    };

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
            onChangeWindowOpen(true);
            dispatch(actions.selectedText2(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commentary);
