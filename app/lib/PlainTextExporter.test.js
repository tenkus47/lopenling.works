// @flow
import PlainTextExporter from "./PlainTextExporter";
import AnnotatedText from "./AnnotatedText";
import Source from "./Source";
import Text from "./Text";
import Witness from "./Witness";
import segmentTibetanText from "./segmentTibetanText";
import Annotation, { ANNOTATION_TYPES } from "./Annotation";

const baseTextContent =
    "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ། སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ།";

const source1 = new Source(1, "Derge");
const source2 = new Source(2, "Narthang");

const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");

const baseWitness = new Witness(1, text, source1, baseTextContent, true);
const otherWitness = new Witness(2, text, source2);

const annotations = [
    new Annotation(
        1,
        baseWitness,
        0,
        27,
        "༄༅༅",
        ANNOTATION_TYPES.variant,
        otherWitness
    ),
    new Annotation(
        2,
        baseWitness,
        45,
        5,
        "ས",
        ANNOTATION_TYPES.variant,
        otherWitness
    )
];

function segmenter(text) {
    return segmentTibetanText(text).sortedSegments();
}

const segmentedText = segmentTibetanText(baseWitness.content || "");
const annotatedText = new AnnotatedText(
    segmentedText,
    annotations,
    segmenter,
    baseWitness
);

const amendedText =
    "༄༅༅། །རྒྱ་གར་སྐད་དུ། ས་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ།";

describe("PlainTextExporter", () => {
    const exporter = new PlainTextExporter();
    const expectedText = annotatedText.textInfo.name + "\n\n" + amendedText;

    test("Format text", done => {
        exporter.export(annotatedText).then(file => {
            const reader = new FileReader();
            reader.onload = () => {
                expect(reader.result).toEqual(expectedText);
                done();
            };
            reader.readAsText(file);
        });
    });
});
