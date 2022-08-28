// @flow
import * as actions from "actions";

export const initialCategoryState = {
    detail: [],
    activeText: null,
};

function selecteTextData(state, action) {
    const textData = action.payload;
    return {
        ...state,
        detail: textData,
    };
}

function selectTextTitle(state, action) {
    const textTitle = action.payload;

    return {
        ...state,
        activeText: textTitle,
    };
}

const categoryReducers = {
    [actions.SELECT_TEXTTITLE]: selectTextTitle,
    [actions.SET_TEXTDATA]: selecteTextData,
};

export const getTextTitleData = (state) => {
    return state;
};

export default categoryReducers;
