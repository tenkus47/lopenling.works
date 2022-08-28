// @flow
import rootReducer, { dataReducer } from "reducers";
import * as actions from "actions";

describe("Texts reducer", () => {
    let initialState = rootReducer(undefined, {});
    it("should handle loadedInitialData", () => {
        expect(
            dataReducer(initialState.data, actions.loadedInitialData())
        ).toEqual({
            ...initialState.data,
            loadingInitialData: false,
            loadedInitialData: true
        });
    });
});
