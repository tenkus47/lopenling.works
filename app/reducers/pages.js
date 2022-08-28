import { NOT_FOUND } from "redux-first-router";
import * as actions from "actions";

const components = {
    HOME: "HomePage",
    Editors: "Editors",
    [NOT_FOUND]: "NotFound",
};
export const initialPageState = "HomePage";

const pageReducers = {
    [actions.CHANGE_URL]: changeState,
};

function changeState(state, action = {}) {
    return components[action.data] || state;
}

export default pageReducers;
