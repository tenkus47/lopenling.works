// import React from "react";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { Header, LoginControls, LoggedInControls } from "./Header";
// import User, { getAnonymousUser } from "lib/User";
// import {
//     mountWithIntl,
//     shallowWithIntl,
//     loadTranslation,
//     loadTranslationObject
// } from "enzyme-react-intl";

// configure({ adapter: new Adapter() });

// import translations from "../../i18n/en/app.translations.json";
// loadTranslationObject(translations["messages"]);

// test("Anonymous Header", () => {
//     const anonymous = getAnonymousUser();

//     const header = shallowWithIntl(<Header user={anonymous} />);

//     expect(header.contains(<LoginControls />)).toEqual(true);
// });

// const userName = "Test User";

// test("Logged-in user Header", () => {
//     const user = new User(1, userName);

//     const header = shallowWithIntl(<Header user={user} />);

//     expect(header.contains(<LoggedInControls user={user} />)).toEqual(true);

//     const controls = mountWithIntl(<LoggedInControls user={user} />);

//     expect(
//         controls.contains(translations["messages"]["header.logout"])
//     ).toEqual(true);
//     expect(controls.find({ href: "/accounts/logout/" }).length).toEqual(1);
//     expect(controls.contains(userName)).toEqual(true);
// });
