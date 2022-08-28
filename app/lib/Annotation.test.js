// @flow
import Annotation, { ANNOTATION_TYPES } from "./Annotation";
import Source from "./Source";
import Text from "./Text";
import Witness from "./Witness";

const baseTextContent =
    "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ། སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་ལ་གསུས་ཁྱིམ་ཡངས།";

const source1 = new Source(1, "Derge");
const source2 = new Source(2, "Narthang");

const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");

const baseWitness = new Witness(1, text, source1, baseTextContent, true);
const otherWitness = new Witness(2, text, source2);

const pageBreak = new Annotation(
    1,
    baseWitness,
    23,
    0,
    "1",
    ANNOTATION_TYPES.pageBreak,
    otherWitness
);

const insertion = new Annotation(
    1,
    baseWitness,
    3,
    0,
    "insertion",
    ANNOTATION_TYPES.variant,
    otherWitness
);

describe("Annotation", () => {
    test("End of annotation", () => {
        expect(pageBreak.contentEnd).toEqual(23);
        expect(insertion.contentEnd).toEqual(11);
    });

    test("Is an insertion", () => {
        expect(pageBreak.isInsertion).toEqual(false);
        expect(insertion.isInsertion).toEqual(true);
    });
});
