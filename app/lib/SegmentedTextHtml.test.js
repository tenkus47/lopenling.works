import SegmentedTextHtml from "./SegmentedTextHtml";
import segmentTibetanText from "lib/segmentTibetanText";
import TextSegment from "./TextSegment";

const text = "༄༅། །ཐེག་པ་ཆེན་པོ་ཉི་ཤུ་པ།";

const segments = [
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
    new TextSegment(25, "།")
];

describe("SegmentedTextHtml", () => {
    const segmentedText = segmentTibetanText(text);
    const segmentedTextHtml = new SegmentedTextHtml(segmentedText);

    const expectedHtml =
        '<span id="s_0">༄༅</span><span id="s_2">།</span><span id="s_3"> </span><span id="s_4">།</span><span id="s_5">ཐེག</span><span id="s_8">་</span><span id="s_9">པ</span><span id="s_10">་</span><span id="s_11">ཆེན</span><span id="s_14">་</span><span id="s_15">པོ</span><span id="s_17">་</span><span id="s_18">ཉི</span><span id="s_20">་</span><span id="s_21">ཤུ</span><span id="s_23">་</span><span id="s_24">པ</span><span id="s_25">།</span>';

    it("should return the correct html", () => {
        expect(segmentedTextHtml.html()).toEqual(expectedHtml);
    });

    it("should return the correct segmentId for the given position", () => {
        expect(segmentedTextHtml.segmentIdAtPosition(12)).toEqual("s_11");
    });

    it("should get the correct segmentIds for the given range", () => {
        const expectedIds = ["s_11", "s_14", "s_15"];

        expect(segmentedTextHtml.segmentIdsInRange(12, 5)).toEqual(expectedIds);
    });
});
