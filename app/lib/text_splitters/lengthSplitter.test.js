import lengthSplitter from "./lengthSplitter";

const testString =
    "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ། སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། ། །འགྱེལ་བའི་རོ་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་ལ་གསུས་ཁྱིམ་ཡངས།";

describe("lengthSplitter", () => {
    test("Splitting text correctly with just string", () => {
        const splitter = lengthSplitter(80, "། ");
        const expectedPositions = [87, 190];

        expect(splitter(testString)).toEqual(expectedPositions);
    });

    test("Splitting text correctly with regex test", () => {
        const splitter = lengthSplitter(80, /^།[\s]+(?!།[\s]+)/, 2, 5);
        const expectedPositions = [87, 192];

        expect(splitter(testString)).toEqual(expectedPositions);
    });
});
