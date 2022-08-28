import arrayToObject from "./arrayToObject";

const data = [
    {
        id: 498,
        type: "V",
        witness: 1,
        start: 0,
        length: 67,
        content: "",
        creator_witness: 152,
        creator_user: null,
        is_deleted: false
    }
];

test("Using string key", () => {
    const expected = {
        498: {
            id: 498,
            type: "V",
            witness: 1,
            start: 0,
            length: 67,
            content: "",
            creator_witness: 152,
            creator_user: null,
            is_deleted: false
        }
    };

    expect(arrayToObject(data, "id")).toEqual(expected);
});

test("Using function key", () => {
    const expected = {
        "498-V": {
            id: 498,
            type: "V",
            witness: 1,
            start: 0,
            length: 67,
            content: "",
            creator_witness: 152,
            creator_user: null,
            is_deleted: false
        }
    };

    expect(
        arrayToObject(data, data => {
            return [data.id, data.type].join("-");
        })
    ).toEqual(expected);
});
