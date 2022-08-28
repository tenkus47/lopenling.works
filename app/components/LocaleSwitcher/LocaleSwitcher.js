import * as React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import * as reducers from "reducers";
import * as actions from "actions";
import { LocalesList } from "reducers/locales";
import type { AppState } from "reducers";
import styles from "./LocaleSwitcher.css";
import { Button } from "@mui/material";
type Props = {
  locales: LocalesList,
  selectLocale: (locale: string) => void,
};

class LocaleSwitcher extends React.Component<Props> {
  render() {
    let locales = this.props.locales.map((localeData) => {
      return (
        <Button
          key={localeData.locale}
          className={styles.localeOption}
          onClick={() => this.props.selectLocale(localeData.locale)}
        >
          {localeData.displayName}
        </Button>
      );
    });
    return <div className={styles.localeOptions}>{locales}</div>;
  }
}

function mapStateToProps(state: AppState) {
  const locales = reducers.getLocales(state);
  const activeLocale = reducers.getActiveLocale(state);
  return {
    locales: locales,
    activeLocale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectLocale: (locale: string) => {
      dispatch(actions.selectedLocale(locale));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
