import React, { useState } from "react";
import styles from "./About.css";
import * as reducers from "reducers";
import * as actions from "actions";
import {
    Typography,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from "components/UI/muiComponent";
import { connect } from "react-redux";
import { text } from "@fortawesome/fontawesome-svg-core";
import { FormattedMessage } from "react-intl";
import { ExpandMore } from "components/UI/muiIcon";
function About(props) {
    const { Textdata, selectedText } = props;

    if (!selectedText) return <div>no selected Text available</div>;

    let selected = Textdata.detail.find((l) => l.text === selectedText.id);
    if (!selected) return <div>No about info</div>;
    return (
        <>
            <Typography variant="h4" component="div" mb={3}>
                <FormattedMessage id="Resource.About" />
            </Typography>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary
                    sx={{ fontWeight: "bold" }}
                    expandIcon={<ExpandMore />}
                >
                    <FormattedMessage id="text.title" />
                </AccordionSummary>
                <AccordionDetails>{selected.title}</AccordionDetails>
            </Accordion>
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <FormattedMessage id="text.description" />
                </AccordionSummary>
                <AccordionDetails>{selected.description}</AccordionDetails>
            </Accordion>
        </>
    );
}

const mapStateToProps = (state: AppState): {} => {
    return {
        Textdata: reducers.getTextTitle(state),
        selectedText: reducers.getSelectedText(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
