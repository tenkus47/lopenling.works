// @flow
import uiReducers, { initialUIState } from "reducers/ui";
import * as actions from "actions";
import Text from "lib/Text";
import Source from "lib/Source";
import Witness from "lib/Witness";
import { TemporaryAnnotation, ANNOTATION_TYPES } from "lib/Annotation";
import User from "lib/User";

const source1 = new Source(1, "Derge");
const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");
const baseWitness = new Witness(1, text, source1, "Test witness", true);
const user = new User(1, "Test User");
let state = initialUIState;

state = {
    ...state,
    selectedText: {
        id: 1
    },
    selectedTextWitness: {
        [1]: 1
    }
};

test("addedTemporaryAnnotation", () => {
    const annotation = new TemporaryAnnotation(
        null,
        baseWitness,
        0,
        27,
        "༄༅༅",
        ANNOTATION_TYPES.variant,
        baseWitness,
        user
    );
    const action = actions.addedTemporaryAnnotation(annotation, true);

    const expectedState = {
        ...state,
        temporaryAnnotations: {
            [1]: {
                "0-27": [annotation]
            }
        }
    };

    expect(uiReducers[action.type](state, action)).toEqual(expectedState);

    expect(uiReducers[action.type](state, action)).not.toBe(state);
});

test("removedTemporaryAnnotation", () => {
    const annotation = new TemporaryAnnotation(
        null,
        baseWitness,
        0,
        27,
        "༄༅༅",
        ANNOTATION_TYPES.variant,
        baseWitness,
        user
    );
    const extraAnnotation = new TemporaryAnnotation(
        null,
        baseWitness,
        28,
        1,
        "ཀ",
        ANNOTATION_TYPES.variant,
        baseWitness,
        user
    );
    const addAction = actions.addedTemporaryAnnotation(annotation, true);
    let testState = uiReducers[addAction.type](state, addAction);
    const addAction2 = actions.addedTemporaryAnnotation(extraAnnotation, true);
    testState = uiReducers[addAction.type](testState, addAction2);
    const removeAction = actions.removedTemporaryAnnotation(annotation);

    const expectedState = {
        ...state,
        temporaryAnnotations: {
            [1]: {
                "0-27": [],
                "28-1": [extraAnnotation]
            }
        }
    };

    expect(uiReducers[removeAction.type](testState, removeAction)).toEqual(
        expectedState
    );

    expect(uiReducers[removeAction.type](testState, removeAction)).not.toBe(
        testState
    );
});
