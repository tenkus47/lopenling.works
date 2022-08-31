import React from "react";
import { createRoot } from "react-dom/client";
import Cookies from "js-cookie";
import AppContainer from "components/App/AppContainer";

// For dev only
import { composeWithDevTools } from "redux-devtools-extension";
import * as api from "api";

// Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import { batchActions } from "redux-batched-actions";

// Saga
import createSagaMiddleware from "redux-saga";

// Action
import { loadInitialData, userLoggedIn } from "actions";
import { enableBatching } from "redux-batched-actions";

// Reducers
import { combineReducers } from "redux";
import rootReducer, { allReducers } from "reducers";

// Redux state helpers
import textMiddleware from "state_helpers/textMiddleware";

// URL management
import { connectRoutes, history } from "redux-first-router";
// Sagas
import "core-js/stable";
import "regenerator-runtime/runtime";
import rootSaga from "sagas";

// i18n
import { IntlProvider, updateIntl } from "react-intl-redux";
import * as actions from "actions";
import { i18n_cookie_name } from "i18n";
// Support for Intl in Safari 12 and below
if (!Intl.PluralRules) {
  require("@formatjs/intl-pluralrules/polyfill");
  require("@formatjs/intl-pluralrules/dist/locale-data/bo");
}
if (!Intl.RelativeTimeFormat) {
  require("@formatjs/intl-relativetimeformat/polyfill");
  require("@formatjs/intl-relativetimeformat/dist/locale-data/bo");
}

import en from "i18n/en/app.translations.json";
import bo from "i18n/bo/app.translations.json";
const locales = {
  en: en,
  bo: bo,
};

// App Constants
import * as constants from "app_constants";
// For react-intl - prevents FormattedMessage from always
// outputting a <span>
// see https://github.com/yahoo/react-intl/issues/999#issuecomment-335799491
function Fragment(props) {
  return props.children || <span {...props} /> || null;
}
const RouteEditorPage = (dispatch, getState) => {
  dispatch(actions.changeUrl("Editors"));
};
const sagaMiddleware = createSagaMiddleware();
// redux-first-router
const routesMap = {
  [actions.TEXTS]: {
    path: "/",
    thunk: (dispatch, getState) => {
      dispatch(actions.changeUrl("HOME"));
    },
  },
  [actions.TEXT_URL]: {
    path: "/texts/:textId/witnesses/:witnessId/:annotation?",
    thunk: RouteEditorPage,
  },
  [actions.TEXT_URL2]: {
    path: "/texts/:textId/witnesses/:witnessId/texts2/:textId2/witnesses2/:witnessId2?",
    thunk: RouteEditorPage,
  },
  USER: "/user/:id",
  [actions.TEXTID_ONLY_URL]: {
    path: "/texts/:textId",
    thunk: RouteEditorPage,
  },
  editor: {
    path: "/editor",
    thunk: RouteEditorPage,
  },
};
const routes = connectRoutes(routesMap, {
  initialDispatch: false,
});
let locationRootReducer = combineReducers({
  ...allReducers,
  location: routes.reducer,
});

const middlewares = [routes.middleware, sagaMiddleware, textMiddleware];
let store = createStore(
  enableBatching(locationRootReducer),
  compose(routes.enhancer, applyMiddleware(...middlewares))
);

if (process.env.NODE_ENV === "development") {
  store = createStore(
    enableBatching(locationRootReducer),
    composeWithDevTools(
      compose(routes.enhancer, applyMiddleware(...middlewares))
    )
  );
}

sagaMiddleware.run(rootSaga);
routes.initialDispatch();

// TODO: use batch dispatcher?
store.dispatch(actions.updateLocales(locales));

let USER_LOGGED_IN = false;
// USER_ID

let USER_LOCALE = "en";
// USER_NAME

if (USER_LOGGED_IN) {
  store.dispatch(userLoggedIn(USER_ID, USER_NAME, USER_LOCALE));
} else {
  const cookieLang = Cookies.get(i18n_cookie_name);
  if (cookieLang) {
    USER_LOCALE = cookieLang;
  }
}
let batchedActions = [];

let textListWidth = Cookies.get(constants.TEXT_LIST_WIDTH_COOKIE);
if (!textListWidth) textListWidth = constants.DEFAULT_TEXT_LIST_WIDTH;
batchedActions.push(actions.changedTextListWidth(Number(textListWidth)));
batchedActions.push(actions.selectedLocale(USER_LOCALE));
batchedActions.push(updateIntl(locales[USER_LOCALE]));
store.dispatch(batchActions(batchedActions));

function intlSelector(state) {
  return {
    ...state.intl,
    key: state.intl.locale,
  };
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <IntlProvider textComponent={Fragment} intlSelector={intlSelector}>
      <AppContainer />
    </IntlProvider>
  </Provider>
);
store.dispatch(loadInitialData());
