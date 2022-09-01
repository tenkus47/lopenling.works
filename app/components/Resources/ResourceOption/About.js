import React, { useState } from "react";
import styles from "./About.css";
import * as reducers from "reducers";
import * as actions from "actions";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { text } from "@fortawesome/fontawesome-svg-core";

function About(props) {
  const { Textdata, selectedText } = props;

  let selected = Textdata.detail.find((l) => l.text === selectedText.id);
  console.log(selected);
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        About : {selected.title}
      </Typography>
      <Typography variant="body2" gutterBottom p={2}>
        {selected.description}
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
