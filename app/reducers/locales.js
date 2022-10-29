// @flow
import * as actions from "actions";
import type { LocaleData, LocalesData } from "i18n";

export type LocaleState = LocalesData;

export const initialLocalesState: LocaleState = {
    activeLocale: "en",
    locales: {
        en: {
            displayName: "English",
            messages: {}
        }
    }
};

function updateLocales(
    state: LocaleState,
    action: actions.UpdateLocalesAction
): LocaleState {
    return {
        ...state,
        locales: {
            ...state.locales,
            ...action.payload
        }
    };
}

function selectedLocale(
    state: LocaleState,
    action: actions.Action
): LocaleState {
    const locale = String(action.payload);
    return {
        ...state,
        activeLocale: locale
    };
}

const localesReducers = {
    [actions.UPDATE_LOCALES]: updateLocales,
    [actions.SELECTED_LOCALE]: selectedLocale
};

export default localesReducers;

export const getLocaleData = (
    state: LocaleState,
    locale: string
): LocaleData | null => {
    if (state.locales.hasOwnProperty(locale)) {
        return state.locales[locale];
    }
    return null;
};

export type LocalesList = Array<{ locale: string, displayName: string }>;

export const getLocales = (state: LocaleState): LocalesList => {
    let localesList: LocalesList = [];
    for (let localeCode in state.locales) {
        if (state.locales.hasOwnProperty(localeCode)) {
            let locale = state.locales[localeCode];
            localesList.push({
                displayName: locale.displayName,
                locale: localeCode
            });
        }
    }
    return localesList;
};

export const getLocaleMessage = (
    state: LocaleState,
    locale: string,
    messageId: string
): string | null => {
    if (state.locales.hasOwnProperty(locale)) {
        return state.locales[locale]["messages"][messageId];
    }

    return null;
};

export const getActiveLocale = (state: LocaleState): string => {
    return state.activeLocale;
};
