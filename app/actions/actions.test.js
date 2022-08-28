import * as actions from "./index";

describe("actions", () => {
    it("creates loadTexts action", () => {
        const expectedAction = {
            type: actions.LOAD_TEXTS
        };
        expect(actions.loadTexts()).toEqual(expectedAction);
    });

    it("creates loadedTexts action", () => {
        const texts = [
            {
                id: 1,
                name: "Test"
            }
        ];
        const expectedAction = {
            type: actions.LOADED_TEXTS,
            texts
        };
        expect(actions.loadedTexts(texts)).toEqual(expectedAction);
    });
});
