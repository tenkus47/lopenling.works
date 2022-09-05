import React, { useState } from "react";
import styles from "./About.css";
import * as reducers from "reducers";
import * as actions from "actions";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { text } from "@fortawesome/fontawesome-svg-core";
import { FormattedMessage } from "react-intl";

function About(props) {
  const { Textdata, selectedText } = props;

  let selected = Textdata.detail.find((l) => l.text === selectedText.id);
  if (!selected) return <div>No about info</div>;

  return (
    <>
      <Typography variant="h4" component="div">
        <FormattedMessage id="Resource.About" />
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        <strong>
          <FormattedMessage id="text.title" />
        </strong>
        : {selected.title}
      </Typography>
      <Typography variant="p" gutterBottom>
        <strong>
          <FormattedMessage id="text.description" />
        </strong>
        : {selected.description}
      </Typography>
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
