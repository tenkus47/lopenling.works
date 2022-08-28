import addTibetanShay, { NON_BREAKING_TSHEG } from "./addTibetanShay";

describe("addTibetanShay", () => {
    test("Shay added correctly", () => {
        expect(addTibetanShay("དང")).toEqual("དང" + NON_BREAKING_TSHEG + "།");

        expect(addTibetanShay("ག")).toEqual("ག");

        expect(addTibetanShay("ཀ")).toEqual("ཀ");

        expect(addTibetanShay("ཀུ")).toEqual("ཀུ");

        expect(addTibetanShay("ནས")).toEqual("ནས།");

        expect(addTibetanShay("Test")).toEqual("Test");

        expect(addTibetanShay("Test", ";")).toEqual("Test;");
    });
});
