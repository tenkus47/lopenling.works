import arrayToMap from "./arrayToMap";

const data = [
    {
        id: 1,
        name: "Test 1"
    },
    {
        id: 2,
        name: "Test 2"
    }
];

describe("arrayToMap", () => {
    const dataMap = arrayToMap(data, "id");

    it("should convert array to map", () => {
        expect(dataMap instanceof Map).toBe(true);
    });

    it("should have a length of 2", () => {
        expect(dataMap.size).toEqual(2);
    });

    test('key 1 should contain object where name equals "Test 1"', () => {
        expect(dataMap.get(1)).toEqual({ id: 1, name: "Test 1" });
    });
});
