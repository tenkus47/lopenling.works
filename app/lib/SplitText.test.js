import SplitText from "./SplitText";
import AnnotatedText, { BASE_ANNOTATION_ID } from "./AnnotatedText";
import Annotation, { ANNOTATION_TYPES } from "lib/Annotation";
import Source from "./Source";
import Text from "./Text";
import Witness from "./Witness";
import segmentTibetanText from "./segmentTibetanText";
import stringSplitter from "./text_splitters/stringSplitter";
import positionSplitter from "./text_splitters/positionSplitter";

function segmenter(text) {
    return segmentTibetanText(text).sortedSegments();
}

const baseTextContent =
    "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ།། སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ།། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་ལ་གསུས་ཁྱིམ་ཡངས།";
const source1 = new Source(1, "Derge");
const source2 = new Source(2, "Narthang");
const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");
const baseWitness = new Witness(1, text, source1, baseTextContent, true);
const otherWitness = new Witness(2, text, source2);

const segmentedText = segmentTibetanText(baseTextContent);
const annotatedText = new AnnotatedText(segmentedText, [], segmenter, baseWitness);

const splitter = stringSplitter("།།");
const splitText = new SplitText(annotatedText, splitter);

describe("SplitText", () => {
    const texts = splitText.texts;

    test("Returns the correct number of SegmentedTexts", () => {
        expect(texts.length).toEqual(3);
    });

    test("Segmented texts contain the correct text", () => {
        expect(texts[0].getText()).toEqual(
            "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ།།"
        );

        expect(texts[1].getText()).toEqual(
            " སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ།།"
        );

        expect(texts[2].getText()).toEqual(
            " བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་ལ་གསུས་ཁྱིམ་ཡངས།"
        );
    });

    test("Get correct text index for position", () => {
        expect(splitText.getTextIndexOfPosition(29)).toEqual(0);

        expect(splitText.getTextIndexOfPosition(45)).toEqual(1);

        expect(splitText.getTextIndexOfPosition(92)).toEqual(1);

        expect(splitText.getTextIndexOfPosition(250)).toEqual(2);
    });

    test("Get correct text index for position after changing annotated text", () => {
        const annotation = new Annotation(
            1,
            baseWitness,
            0,
            24,
            "",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        annotatedText.addAnnotation(annotation);

        expect(splitText.getTextIndexOfPosition(29)).toEqual(1);
    });

    const posSplitter = positionSplitter([0, 149, 249]);
    const posSplitText = new SplitText(annotatedText, posSplitter);

    test("Get the correct number of texts", () => {
        expect(posSplitText.texts.length).toEqual(2);
    });
});
