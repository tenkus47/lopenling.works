// @flow

export type LocaleData = {
    displayName: string,
    messages: { [message: string]: string }
};

export type LocalesData = {
    activeLocale: string,
    locales: {
        [locale: string]: LocaleData
    }
};

export const i18n_cookie_name = "django_language";
