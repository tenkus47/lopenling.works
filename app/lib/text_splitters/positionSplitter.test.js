import positionSplitter from "./positionSplitter";

test("Split positions", () => {
    const initialPositions = [0, 536, 1878, 3212, 4558];

    const expectedPositions = [536, 1878, 3212, 4558];

    expect(positionSplitter(initialPositions)()).toEqual(expectedPositions);
});
