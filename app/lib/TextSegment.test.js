import TextSegment from "./TextSegment";

describe("TextSegment should be correct", () => {
    test("Properties should return correct values", () => {
        const text = "Text";
        const segment = new TextSegment(4, text);

        expect(segment.start).toEqual(4);

        expect(segment.text).toEqual(text);

        expect(segment.length).toEqual(text.length);
    });
});
