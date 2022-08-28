// @flow

const ANONYMOUS_USER_ID = -1;
// TODO: update when implementing localisation
const ANONYMOUS_USER_NAME = "User";
export const DEFAULT_LOCALE = "bo";

/**
 * Represents a user of the system.
 *
 * @param id - The id of the user, as returned by the server API.
 */
export default class User {
    id: number;
    name: string;
    locale: string;

    constructor(id: number, name: string, locale: string = DEFAULT_LOCALE) {
        this.id = Number(id);
        this.name = name;
        this.locale = locale;
    }

    /**
     * Whether the user is currently logged in to the server.
     */
    get isLoggedIn(): boolean {
        return this.id !== ANONYMOUS_USER_ID;
    }
}

let _anonymousUser = null;
export const getAnonymousUser = (): User => {
    if (!_anonymousUser) {
        _anonymousUser = new User(ANONYMOUS_USER_ID, ANONYMOUS_USER_NAME);
    }
    return _anonymousUser;
};
