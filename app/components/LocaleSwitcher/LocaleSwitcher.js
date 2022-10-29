import * as React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Language as LanguageIcon } from "components/UI/muiIcon";
import * as reducers from "reducers";
import * as actions from "actions";
import { LocalesList } from "reducers/locales";
import type { AppState } from "reducers";
import styles from "./LocaleSwitcher.css";
import { Select } from "components/UI/muiComponent";
type Props = {
    locales: LocalesList,
    selectLocale: (locale: string) => void,
};

class LocaleSwitcher extends React.Component<Props> {
    render() {
        let locales = this.props.locales.map((localeData) => {
            return (
                <option
                    key={localeData.locale}
                    value={localeData.locale}
                    className={styles.localeOption}
                >
                    {/* <div
            key={localeData.locale}
            // onClick={() => this.props.selectLocale(localeData.locale)}
          > */}
                    {localeData.displayName}
                    {/* </div> */}
                </option>
            );
        });
        return (
            <div style={{ display: "flex" }}>
                <LanguageIcon />
                <select
                    onChange={(e) => this.props.selectLocale(e.target.value)}
                    value={this.props.activeLocale}
                    className={styles.localeOptions}
                >
                    {locales}
                </select>
            </div>
        );
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
