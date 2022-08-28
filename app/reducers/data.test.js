// @flow
import Text from "lib/Text";
import Source from "lib/Source";
import Witness from "lib/Witness";
import Annotation, {
    TemporaryAnnotation,
    ANNOTATION_TYPES
} from "lib/Annotation";
import User from "lib/User";
import dataReducers, * as data from "reducers/data";
// import dataReducers, { initialDataState, dataFromAnnotation } from 'reducers/data'
import * as actions from "actions";
import * as api from "api";

const source1 = new Source(1, "Derge", true);
const source2 = new Source(2, "Narthang");
const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");
const baseWitness = new Witness(1, text, source1, "Test witness", true);
const baseWitnessData = data.dataFromWitness(baseWitness);
const otherWitness = new Witness(2, text, source2, "", false);
const annotation = new Annotation(
    1,
    baseWitness,
    0,
    27,
    "༄༅༅",
    ANNOTATION_TYPES.variant,
    baseWitness
);
const user = new User(1, "");

describe("Applying and removing reducer", () => {
    const applyAction = actions.appliedAnnotation(
        annotation.uniqueId,
        baseWitnessData
    );

    let state = { ...data.initialDataState };
    let witnessActiveAnnotations = {
        [baseWitness.id]: {
            [api.appliedOp]: {
                [annotation.uniqueId]: annotation.uniqueId
            },
            [api.removedOp]: {}
        }
    };
    let expectedState = {
        ...state,
        witnessAnnotationOperationsById: witnessActiveAnnotations
    };

    test("Applying annotation", () => {
        expect(dataReducers[applyAction.type](state, applyAction)).toEqual(
            expectedState
        );

        expect(dataReducers[applyAction.type](state, applyAction)).not.toBe(
            state
        );
    });

    const removeAction = actions.removedAppliedAnnotation(
        annotation.uniqueId,
        baseWitnessData
    );

    test("Removing annotation", () => {
        const state = dataReducers[applyAction.type](
            { ...data.initialDataState },
            applyAction
        );
        const witnessActiveAnnotations = {
            [baseWitness.id]: {
                [api.appliedOp]: {},
                [api.removedOp]: {}
            }
        };
        const expectedState = {
            ...state,
            witnessAnnotationOperationsById: witnessActiveAnnotations
        };

        expect(dataReducers[removeAction.type](state, removeAction)).toEqual(
            expectedState
        );

        expect(dataReducers[removeAction.type](state, removeAction)).not.toBe(
            state
        );
    });

    const removeDefaultAction = actions.removedDefaultAnnotation(
        annotation.uniqueId,
        baseWitnessData
    );

    test("Removing default annotation", () => {
        const state = dataReducers[removeDefaultAction.type](
            { ...data.initialDataState },
            removeDefaultAction
        );

        const witnessActiveAnnotations = {
            [baseWitness.id]: {
                [api.appliedOp]: {},
                [api.removedOp]: {
                    [annotation.uniqueId]: annotation.uniqueId
                }
            }
        };
        const expectedState = {
            ...state,
            witnessAnnotationOperationsById: witnessActiveAnnotations
        };

        let newState = dataReducers[removeDefaultAction.type](
            state,
            removeDefaultAction
        );
        expect(newState).toEqual(expectedState);
    });

    const applyDefaultAction = actions.appliedDefaultAnnotation(
        annotation.uniqueId,
        baseWitnessData
    );

    test("Applying default annotation", () => {
        let state = dataReducers[removeDefaultAction.type](
            { ...data.initialDataState },
            removeDefaultAction
        );
        state = dataReducers[removeDefaultAction.type](
            state,
            applyDefaultAction
        );

        const witnessActiveAnnotations = {
            [baseWitness.id]: {
                [api.appliedOp]: {},
                [api.removedOp]: {}
            }
        };
        const expectedState = {
            ...state,
            witnessAnnotationOperationsById: witnessActiveAnnotations
        };

        expect(
            dataReducers[applyDefaultAction.type](state, applyDefaultAction)
        ).toEqual(expectedState);
    });
});

describe("Processing loaded data", () => {
    test("loadedAnnotations", () => {
        let state = {
            ...data.initialDataState
        };

        const annotationsData = [
            {
                id: 498,
                type: "V",
                witness: 1,
                start: 0,
                length: 67,
                content: "",
                creator_witness: 152,
                creator_user: null,
                is_deleted: false,
                unique_id: "1e74ae00-7b15-4b30-95d6-2424cfa93f57",
                is_saved: true,
                original: null
            }
        ];

        let expectedState = {
            ...state,
            loadedAnnotations: true,
            loadingAnnotations: true,
            witnessAnnotationsById: {
                "1": {
                    "1e74ae00-7b15-4b30-95d6-2424cfa93f57": {
                        id: 498,
                        type: "V",
                        witness: 1,
                        start: 0,
                        length: 67,
                        content: "",
                        creator_witness: 152,
                        creator_user: null,
                        is_deleted: false,
                        unique_id: "1e74ae00-7b15-4b30-95d6-2424cfa93f57",
                        is_saved: true,
                        original: null
                    }
                }
            }
        };

        const action = actions.loadedWitnessAnnotations(
            baseWitness.id,
            annotationsData
        );

        expect(dataReducers[action.type](state, action)).toEqual(expectedState);

        state = {
            ...state,
            loadedAnnotationOperations: true
        };

        expectedState = {
            ...expectedState,
            loadedAnnotationOperations: true,
            loadingAnnotations: false
        };

        expect(dataReducers[action.type](state, action)).toEqual(expectedState);
    });
});

describe("CUD annotation", () => {
    const newAnnotation = new TemporaryAnnotation(
        null,
        baseWitness,
        5,
        7,
        "replacement",
        ANNOTATION_TYPES.variant,
        baseWitness,
        user
    );
    const createAction = actions.createdAnnotation(newAnnotation, baseWitness);

    let state = { ...data.initialDataState };

    test("Create annotation", () => {
        let annotationData = data.dataFromAnnotation(newAnnotation);
        if (!annotationData) throw new Error();

        annotationData.is_saved = true;
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [newAnnotation.uniqueId]: annotationData
                }
            }
        };
        expect(dataReducers[createAction.type](state, createAction)).toEqual(
            expectedState
        );
    });

    const updatedAnnotation = new TemporaryAnnotation(
        newAnnotation,
        baseWitness,
        5,
        7,
        "replaced",
        newAnnotation.type,
        baseWitness,
        user,
        newAnnotation.uniqueId
    );
    updatedAnnotation.save();
    const updatedAction = actions.updatedAnnotation(
        updatedAnnotation,
        baseWitness
    );

    test("Updated unsaved annotation", () => {
        state = dataReducers[createAction.type](state, createAction);

        let annotationData = data.dataFromAnnotation(updatedAnnotation);
        if (!annotationData) throw new Error();

        annotationData.is_saved = true;
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [updatedAnnotation.uniqueId]: annotationData
                }
            }
        };
        expect(dataReducers[updatedAction.type](state, updatedAction)).toEqual(
            expectedState
        );
    });

    const savedAnnotation = new Annotation(
        2,
        baseWitness,
        5,
        7,
        "replaced",
        newAnnotation.type,
        baseWitness,
        user,
        newAnnotation.uniqueId
    );
    savedAnnotation.save();
    const savedAction = actions.savedAnnotation(savedAnnotation);

    test("Saved annotation", () => {
        state = dataReducers[updatedAction.type](state, updatedAction);

        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [savedAnnotation.uniqueId]: data.dataFromAnnotation(
                        savedAnnotation
                    )
                }
            }
        };

        expect(dataReducers[savedAction.type](state, savedAction)).toEqual(
            expectedState
        );
    });

    const updatedSavedAnnotation = new TemporaryAnnotation(
        savedAnnotation,
        baseWitness,
        5,
        7,
        "update",
        savedAnnotation.type,
        baseWitness,
        user,
        savedAnnotation.uniqueId
    );
    updatedSavedAnnotation.isSaved = savedAnnotation.isSaved;
    const updateSavedAction = actions.updatedAnnotation(
        updatedSavedAnnotation,
        baseWitness
    );

    test("Updated saved annotation", () => {
        state = dataReducers[savedAction.type](state, savedAction);
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {
                    [savedAnnotation.uniqueId]: data.dataFromAnnotation(
                        updatedSavedAnnotation
                    )
                }
            }
        };

        expect(
            dataReducers[updateSavedAction.type](state, updateSavedAction)
        ).toEqual(expectedState);
    });

    const deletedAnnotation = savedAnnotation;
    const deletedAction = actions.deletedAnnotation(
        deletedAnnotation,
        baseWitness
    );

    test("Deleted annotation", () => {
        state = dataReducers[updateSavedAction.type](state, updateSavedAction);
        const expectedState = {
            ...state,
            witnessAnnotationsById: {
                [baseWitness.id]: {}
            }
        };

        expect(dataReducers[deletedAction.type](state, deletedAction)).toEqual(
            expectedState
        );
    });
});

describe("Data selectors", () => {
    let originalAnnotationUniqueId = "52bab9be-a395-4c9c-b264-1d03a091cc4b";
    let originalAnnotationId = 488;
    let originalAnnotationContent = "";
    let originalAnnotationData = {
        id: originalAnnotationId,
        unique_id: originalAnnotationUniqueId,
        type: "V",
        witness: baseWitness.id,
        start: 0,
        length: 29,
        content: originalAnnotationContent,
        creator_witness: otherWitness.id,
        creator_user: null,
        original: null,
        is_deleted: false,
        is_saved: true
    };
    let editedAnnotationUniqueId = "527713e8-b191-4b74-9f34-cd9f8d0e4318";
    let editedAnnotationId = 489;
    let editedAnnotationContent = "Test";
    let editedAnnotationData = {
        id: editedAnnotationId,
        unique_id: editedAnnotationUniqueId,
        type: "V",
        witness: baseWitness.id,
        start: 0,
        length: 29,
        content: editedAnnotationContent,
        creator_witness: otherWitness.id,
        creator_user: user.id,
        original: originalAnnotationUniqueId,
        is_deleted: false,
        is_saved: true
    };
    let state = data.initialDataState;
    state = {
        ...state,
        textsById: {
            [1]: {
                id: text.id,
                name: text.name
            }
        },
        sourcesById: {
            [source1.id]: {
                id: source1.id,
                name: source1.name,
                is_base: source1.isBase
            },
            [source2.id]: {
                id: source2.id,
                name: source2.name,
                is_base: source2.isBase
            }
        },
        witnessesById: {
            [baseWitness.id]: {
                id: baseWitness.id,
                text: baseWitness.text.id,
                source: baseWitness.source.id,
                is_base: true,
                revision: 1,
                content: baseWitness.content
            },
            [otherWitness.id]: {
                id: otherWitness.id,
                text: otherWitness.text.id,
                source: otherWitness.source.id,
                is_base: false,
                revision: 1,
                content: otherWitness.content
            }
        },
        witnessAnnotationsById: {
            [1]: {
                [originalAnnotationUniqueId]: originalAnnotationData,
                [editedAnnotationUniqueId]: editedAnnotationData
            }
        }
    };

    const expectedGetAnnotation = new Annotation(
        originalAnnotationId,
        baseWitness,
        0,
        29,
        "",
        "V",
        otherWitness,
        null,
        originalAnnotationUniqueId
    );

    test("getAnnotation", () => {
        expectedGetAnnotation.save();

        expect(
            data.getAnnotation(
                state,
                baseWitness.id,
                expectedGetAnnotation.uniqueId
            )
        ).toEqual(expectedGetAnnotation);
    });

    test("annotationFromData", () => {
        const expectedAnnotationFromData = new Annotation(
            editedAnnotationId,
            baseWitness,
            0,
            29,
            "Test",
            "V",
            otherWitness,
            user,
            editedAnnotationUniqueId,
            expectedGetAnnotation
        );
        expectedAnnotationFromData.save();
        expect(
            data.annotationFromData(
                state,
                state.witnessAnnotationsById[1][
                    expectedAnnotationFromData.uniqueId
                ]
            )
        ).toEqual(expectedAnnotationFromData);
    });

    test("getAnnotationOriginalData", () => {
        expect(
            data.getAnnotationOriginalData(
                state,
                baseWitness.id,
                editedAnnotationUniqueId
            )
        ).toEqual(originalAnnotationData);
    });

    test("annotationOriginallyUserCreated", () => {
        expect(
            data.annotationOriginallyUserCreated(
                state,
                baseWitness.id,
                editedAnnotationUniqueId
            )
        ).toEqual(false);
    });
});
