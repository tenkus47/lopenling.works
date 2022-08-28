import indexesOf from "./indexesOf";

describe("indexesOf", () => {
    test("String indexes are valid", () => {
        let testStr = "ABCDEFGD";
        let expectedIndexes = [3, 7];
        expect(indexesOf("D", testStr)).toEqual(expectedIndexes);

        testStr = "This is a test";
        expectedIndexes = [2, 5];
        expect(indexesOf("is", testStr)).toEqual(expectedIndexes);

        testStr = "testtesttest";
        expectedIndexes = [0, 4, 8];
        expect(indexesOf("test", testStr)).toEqual(expectedIndexes);

        expect(indexesOf("not", testStr)).toEqual([]);
    });
});
