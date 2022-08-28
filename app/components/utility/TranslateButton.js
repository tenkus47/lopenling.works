import React from "react";
import styles from "./TranslateButton.css";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import { Button, Typography } from "@mui/material";
const mapStateToProps = (state) => {
    const locales = reducers.getLocales(state);
    const activeLocale = reducers.getActiveLocale(state);
    return {
        locales: locales,
        activeLocale,
    };
};

const matchDispatchToProps = (dispatch) => {
    return {
        selectLanguage: (locale: string) => {
            dispatch(actions.selectedLocale(locale));
        },
    };
};

function TranslateButton(props) {
    let { selectLanguage } = props;
    let language = props.activeLocale;
    const handleLanguage = () => {
        if (language === "bo") {
            selectLanguage("en");
        } else {
            selectLanguage("bo");
        }
    };
    return (
        <Button onClick={handleLanguage} size="small">
            {language !== "bo" ? (
                <Typography>A</Typography>
            ) : (
                <Typography style={{ paddingTop: "-10px", marginTop: "-10px" }}>
                    ཀ
                </Typography>
            )}
        </Button>
    );
}

const TranslateButtonContainer = connect(
    mapStateToProps,
    matchDispatchToProps
)(TranslateButton);
export default React.memo(TranslateButtonContainer);
