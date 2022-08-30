import React from "react";
import { connect } from "react-redux";
import * as reducers from "reducers";
import * as actions from "actions";
import App from "components/App";

let user;

const mapStateToProps = (state) => {
  console.log(state);
  const selectedText = reducers.getSelectedText(state);
  let selectedWitness;
  let witnesses;
  if (selectedText) {
    witnesses = reducers.getTextWitnesses(state, selectedText.id);
    const selectedWitnessId = reducers.getSelectedTextWitnessId(
      state,
      selectedText.id
    );
    if (selectedWitnessId) {
      selectedWitness = reducers.getWitness(state, selectedWitnessId);
    } else {
      selectedWitness = reducers.getWorkingWitness(state, selectedText.id);
    }
  }

  if (!state.user.userId === -1) {
    user = state.user;
  }
  return {
    selectedText,
    selectedWitness,
    title: reducers.getTranslation(state, "header.title"),
    page: state.page,
    isAnnotating: reducers.isAnnotating(state),
    isSecondWindowOpen: reducers.isSecondWindowOpen(state),
    theme: reducers.getTheme(state),
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    onChangedTextWidth: (width: number) => {
      dispatch(actions.changedTextListWidth(width));
    },
    onChangedTextListVisible: (isVisible: boolean) => {
      dispatch(actions.changedTextListVisible(isVisible));
    },
    changeIsAnnotating: (payload) => {
      dispatch(actions.changeIsAnnotating(payload));
      if (payload === false) {
        const dismissTextAnnotation = actions.changedActiveTextAnnotation(null);
        dispatch(dismissTextAnnotation);
        dispatch(actions.changedActiveTextAnnotation(null));
      }
    },
    onChangeWindowOpen: (data: boolean, textId) => {
      dispatch(actions.toggleSecondWindow(data, textId));
    },
    dispatch,
  };
};

const AppContainer = connect(mapStateToProps, matchDispatchToProps)(App);

export default AppContainer;
