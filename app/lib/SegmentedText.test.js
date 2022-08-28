import SegmentedText from "./SegmentedText";
import TextSegment from "./TextSegment";
import * as constants from "app_constants";

const text = "༄༅། །ཐེག་པ་ཆེན་པོ་ཉི་ཤུ་པ།༄༅༅། །རྒྱ་གར་སྐད་དུ།";

const segments = [
    new TextSegment(0, "༄༅།"),
    new TextSegment(3, " "),
    new TextSegment(4, "།"),
    new TextSegment(5, "ཐེག"),
    new TextSegment(8, "་"),
    new TextSegment(9, "པ"),
    new TextSegment(10, "་"),
    new TextSegment(11, "ཆེན"),
    new TextSegment(14, "་"),
    new TextSegment(15, "པོ"),
    new TextSegment(17, "་"),
    new TextSegment(18, "ཉི"),
    new TextSegment(20, "་"),
    new TextSegment(21, "ཤུ"),
    new TextSegment(23, "་"),
    new TextSegment(24, "པ"),
    new TextSegment(25, "།༄༅༅།"),
    new TextSegment(30, " "),
    new TextSegment(31, "།"),
    new TextSegment(32, "རྒྱ"),
    new TextSegment(35, "་"),
    new TextSegment(36, "གར"),
    new TextSegment(38, "་"),
    new TextSegment(39, "སྐད"),
    new TextSegment(42, "་"),
    new TextSegment(43, "དུ"),
    new TextSegment(45, "།")
];

describe("SegmentedText", () => {
    const segmentedText = new SegmentedText(segments);

    it("should return segments", () => {
        expect(segmentedText.segments).toEqual(segments);
    });

    it("should return the correct complete text", () => {
        expect(segmentedText.getText()).toEqual(text);
    });

    it("should return the correct segment for the given position", () => {
        const expectedSegment = new TextSegment(11, "ཆེན");
        expect(segmentedText.segmentAtPosition(11)).toEqual(expectedSegment);

        expect(segmentedText.segmentAtPosition(12)).toEqual(expectedSegment);

        expect(segmentedText.segmentAtPosition(13)).toEqual(expectedSegment);

        expect(segmentedText.segmentAtPosition(14)).not.toEqual(
            expectedSegment
        );

        expect(segmentedText.segmentAtPosition(198)).toEqual(null);
    });

    it("should return the correct segments for the given range", () => {
        const expectedSegments = [
            new TextSegment(0, "༄༅།"),
            new TextSegment(3, " "),
            new TextSegment(4, "།"),
            new TextSegment(5, "ཐེག")
        ];

        expect(segmentedText.segmentsInRange(1, 6)).toEqual(expectedSegments);

        expect(segmentedText.segmentsInRange(0, 8)).toEqual(expectedSegments);

        expect(segmentedText.segmentsInRange(1, 1)).toEqual([
            expectedSegments[0]
        ]);

        expect(segmentedText.segmentsInRange(4, 1)).toEqual([
            expectedSegments[2]
        ]);

        expect(segmentedText.segmentsInRange(8, 3)).not.toEqual([
            expectedSegments[0]
        ]);

        expect(segmentedText.segmentsInRange(8, 1)).not.toEqual([
            expectedSegments[3]
        ]);

        let tshegSeg = new TextSegment(8, "་");
        expect(segmentedText.segmentsInRange(8, 1)).toEqual([tshegSeg]);
    });

    it("should get an extract around the given position", () => {
        let includeBoundaries = true;
        let expectedExtract = ["།ཐེག་", "པ", "་ཆེན་པོ་ཉི་ཤུ་པ།༄༅༅།"];
        expect(
            segmentedText.extractTextAroundPosition(
                9,
                10,
                constants.TEXT_EXTRACT_BOUNDARIES,
                includeBoundaries
            )
        ).toEqual(expectedExtract);

        includeBoundaries = false;
        expectedExtract = ["ཐེག་", "པ", "་ཆེན་པོ་ཉི་ཤུ་པ"];
        expect(
            segmentedText.extractTextAroundPosition(
                9,
                10,
                constants.TEXT_EXTRACT_BOUNDARIES,
                includeBoundaries
            )
        ).toEqual(expectedExtract);
    });
});

describe("Partial SegmentedText", () => {
    const slicedSegments = segments.slice(2);
    const partialSegmentedText = new SegmentedText(slicedSegments);

    it("should return the correct segment for the given position", () => {
        const expectedSegment = new TextSegment(11, "ཆེན");

        expect(partialSegmentedText.segmentAtPosition(11)).toEqual(
            expectedSegment
        );
    });

    it("should return the correct segments for the given range", () => {
        const expectedSegments = [
            new TextSegment(4, "།"),
            new TextSegment(5, "ཐེག")
        ];

        expect(partialSegmentedText.segmentsInRange(4, 1)).toEqual([
            expectedSegments[0]
        ]);

        expect(partialSegmentedText.segmentsInRange(6, 1)).toEqual([
            expectedSegments[1]
        ]);

        expect(partialSegmentedText.segmentsInRange(0, 1)).not.toEqual([
            expectedSegments[0]
        ]);
    });
});
