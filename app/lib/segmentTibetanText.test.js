import segmentTibetanText, { SegmentedText } from "./segmentTibetanText";
import TextSegment from "./TextSegment";

const text = "༄༅། །ཐེག་པ་ཆེན་པོ་ཉི་ཤུ་པ།༄༅༅། །རྒྱ་གར་སྐད་དུ།།";

const expectedSegments = [
    new TextSegment(0, "༄༅"),
    new TextSegment(2, "།"),
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
    new TextSegment(25, "།"),
    new TextSegment(26, "༄༅༅"),
    new TextSegment(29, "།"),
    new TextSegment(30, " "),
    new TextSegment(31, "།"),
    new TextSegment(32, "རྒྱ"),
    new TextSegment(35, "་"),
    new TextSegment(36, "གར"),
    new TextSegment(38, "་"),
    new TextSegment(39, "སྐད"),
    new TextSegment(42, "་"),
    new TextSegment(43, "དུ"),
    new TextSegment(45, "།"),
    new TextSegment(46, "།")
];

describe("tibetan text segmented", () => {
    it("should have the correct segments", () => {
        expect(segmentTibetanText(text).segments).toEqual(expectedSegments);
    });
});
