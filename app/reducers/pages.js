import { NOT_FOUND } from "redux-first-router";
import * as actions from "actions";

const components = {
    HOME: "HomePage",
    Editors: "Editors",
    Vote:"Vote",
    [NOT_FOUND]: "NotFound",
};
export const initialPageState = "HomePage";

export const pageList = [
    {
        pageName: "HomePage",
        id: "header.texts",
        url: "/",
    },
    {
        pageName: "Editors",
        id: "header.editor",
        url: "/editor",
    }
];

const pageReducers = {
    [actions.CHANGE_URL]: changeState,
};

function changeState(state, action = {}) {
    return components[action.data] || state;
}

export default pageReducers;
