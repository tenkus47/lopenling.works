import { put, call } from "redux-saga/effects";
import { loadTexts } from "sagas";
import { fetchTexts } from "../api/index";
import { loadedTexts } from "actions";

describe("text sagas", () => {
    const gen = loadTexts();
    it("loads texts", () => {
        expect(gen.next().value).toEqual(call(fetchTexts));

        expect(gen.next().value).toEqual(put(loadedTexts()));
    });
});
