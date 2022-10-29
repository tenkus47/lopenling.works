import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header, LoginControls, LoggedInControls } from "./Header";
import User, { getAnonymousUser } from "lib/User";
import { IntlProvider, updateIntl } from "react-intl-redux";
import {
    mountWithIntl,
    shallowWithIntl,
    loadTranslationObject,
} from "enzyme-react-intl";
import { createIntl } from "react-intl";
configure({ adapter: new Adapter() });
import translations from "../../i18n/en/app.translations.json";
loadTranslationObject(translations["messages"]);
const intl = createIntl({
    locale: "en",
    messages: {
        message: "Hello world",
    },
});

test("Anonymous Header", () => {
    const anonymous = getAnonymousUser();

    const header = shallow(<Header user={anonymous} />, { context: intl });

    expect(header.contains(<LoginControls />)).toEqual(true);
});

const userName = "Test User";
describe("Login Controls", () => {
    test("Logged-in user Header", () => {
        const user = new User(1, userName);

        const header = shallow(<Header user={user} />, { context: intl });

        expect(header.contains(<LoggedInControls user={user} />)).toEqual(true);

        // const controls = mountWithIntl(<LoggedInControls user={user} />);
        // expect(
        //     controls.contains(translations["messages"]["header.logout"])
        // ).toEqual(true);
        // expect(controls.find({ href: "/accounts/logout/" }).length).toEqual(1);
        // expect(controls.contains(userName)).toEqual(true);
    });
});
