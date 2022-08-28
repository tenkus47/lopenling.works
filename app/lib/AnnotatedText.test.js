// @flow
import AnnotatedText, {
    BASE_ANNOTATION_ID,
    WORKING_VERSION_ANNOTATION_ID
} from "./AnnotatedText";
import Annotation, { ANNOTATION_TYPES } from "./Annotation";
import Source from "./Source";
import Text from "./Text";
import Witness from "./Witness";
import TextSegment from "./TextSegment";
import User, { getAnonymousUser } from "lib/User";
import segmentTibetanText from "./segmentTibetanText";

const baseTextContent =
    "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅། །རྒྱ་གར་སྐད་དུ། སྟྲཱི་པྲཛྙཱ་ཤྲཱི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ནཾ་ནཱ་མ། བོད་སྐད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་ལ་གསུས་ཁྱིམ་ཡངས།";

const source1 = new Source(1, "Derge");
const source2 = new Source(2, "Narthang");
const source3 = new Source(3, "Pecin");

const text = new Text(1, "དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ");

const baseWitness = new Witness(1, text, source1, baseTextContent, true);
const otherWitness = new Witness(2, text, source2);
const anotherWitness = new Witness(3, text, source3);

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
    ),
    new Annotation(
        3,
        baseWitness,
        57,
        4,
        "ཤྲི",
        ANNOTATION_TYPES.variant,
        otherWitness
    ),
    new Annotation(
        4,
        baseWitness,
        78,
        2,
        "ན",
        ANNOTATION_TYPES.variant,
        otherWitness
    ),
    // below is gramatically incorrect but useful for testing a single char syllable replacement
    new Annotation(
        5,
        baseWitness,
        204,
        1,
        "ན་ལ",
        ANNOTATION_TYPES.variant,
        otherWitness
    ),
    new Annotation(
        6,
        baseWitness,
        256,
        2,
        "",
        ANNOTATION_TYPES.variant,
        otherWitness
    ),
    new Annotation(
        7,
        baseWitness,
        268,
        0,
        "དང་",
        ANNOTATION_TYPES.variant,
        otherWitness
    ),
    new Annotation(
        8,
        baseWitness,
        87,
        7,
        "བད་ཁད",
        ANNOTATION_TYPES.variant,
        otherWitness
    )
];

function segmenter(text) {
    return segmentTibetanText(text).sortedSegments();
}

describe("AnnotatedText", () => {
    const expectedTextContent =
        "༄༅༅། །རྒྱ་གར་སྐད་དུ། ས་པྲཛྙཱ་ཤྲི་མ་ཧཱ་ཀཱ་ལ་སཱ་དྷ་ན་ནཱ་མ། བད་ཁད་དུ། དཔལ་ནག་པོ་ཆེན་པོ་ཡུམ་ཅན་གྱི་སྒྲུབ་ཐབས་ཞེས་བྱ་བ། བླ་མ་དང་དཔལ་རྡོ་རྗེ་མཁའ་འགྲོ་ལ་ཕྱག་འཚལ་ལོ། །འགྱེལ་བའི་རོ་ན་ལ་ཞབས་མཆོག་མཉམ་པའི་སྟབས་ཀྱིས་བཞུགས་ཤིང་སྦོམ་ཐུང་དྲག་གསུས་ཁྱིམ་དང་ཡངས།";

    const segmentedText = segmentTibetanText(baseWitness.content || "");
    const annotatedText = new AnnotatedText(
        segmentedText,
        annotations,
        segmenter,
        baseWitness
    );

    test("Return the correct text", () => {
        expect(annotatedText.getText()).toEqual(expectedTextContent);
    });

    test("Annotation content is segmented correctly", () => {
        const testSegment = new TextSegment(172, "ན");
        expect(annotatedText.segmentedText.segmentAtPosition(172)).toEqual(
            testSegment
        );
    });

    test("Get segment at original position", () => {
        let testSegment = new TextSegment(222, "དྲག");
        expect(annotatedText.segmentAtOriginalPosition(252)).toEqual(
            testSegment
        );

        expect(annotatedText.segmentAtOriginalPosition(253)).toEqual(
            testSegment
        );

        testSegment = new TextSegment(0, "༄༅༅");
        expect(annotatedText.segmentAtOriginalPosition(5)).toEqual(testSegment);

        expect(annotatedText.segmentAtOriginalPosition(256)).toEqual(226);

        testSegment = new TextSegment(239, "ཡངས");
        expect(annotatedText.segmentAtOriginalPosition(268)).toEqual(
            testSegment
        );
    });

    const noAnnotatedText = new AnnotatedText(
        segmentedText,
        [],
        segmenter,
        baseWitness
    );
    test("Return the correct text when no annotation", () => {
        expect(noAnnotatedText.getText()).toEqual(baseWitness.content);
    });

    test("Get correct segments for annotation", () => {
        let testAnnotation = new Annotation(
            4,
            baseWitness,
            78,
            2,
            "ན",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[3].uniqueId
        );
        let testMissingAnnotation = new Annotation(
            27,
            baseWitness,
            256,
            7,
            "ལ་གསུས་",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        let testMissingAnnotationSingle = new Annotation(
            8,
            baseWitness,
            256,
            1,
            "ལ",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        let expectedSegment = new TextSegment(49, "ན");

        expect(annotatedText.segmentsForAnnotation(testAnnotation)).toEqual([
            expectedSegment
        ]);

        expect(
            annotatedText.segmentsForAnnotation(testMissingAnnotationSingle)
        ).toEqual([226]);

        let expectedPartialSegment = new TextSegment(226, "གསུས");
        let expectedPartialSegmentSpace = new TextSegment(230, "་");
        expect(
            annotatedText.segmentsForAnnotation(testMissingAnnotation)
        ).toEqual([226, expectedPartialSegment, expectedPartialSegmentSpace]);

        let deletedSegment = new TextSegment(226, "");
        expect(annotatedText.segmentedText.sortedSegments()).toContainEqual(
            deletedSegment
        );

        let unchangedAnnotation = new Annotation(
            17,
            baseWitness,
            223,
            15,
            "",
            ANNOTATION_TYPES.variant,
            baseWitness
        );
        let unchangedSegments = [
            new TextSegment(193, "སྟབས"),
            new TextSegment(197, "་"),
            new TextSegment(198, "ཀྱིས"),
            new TextSegment(202, "་"),
            new TextSegment(203, "བཞུགས")
        ];
        expect(
            annotatedText.segmentsForAnnotation(unchangedAnnotation)
        ).toEqual(unchangedSegments);

        let multipleAdded = new Annotation(
            5,
            baseWitness,
            204,
            1,
            "ན་ལ",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[4].uniqueId
        );
        let addedSegments = [
            new TextSegment(172, "ན"),
            new TextSegment(173, "་"),
            new TextSegment(174, "ལ")
        ];
        expect(annotatedText.segmentsForAnnotation(multipleAdded)).toEqual(
            addedSegments
        );

        let insertion = new Annotation(
            7,
            baseWitness,
            268,
            0,
            "དང་",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[6].uniqueId
        );
        let insertionSegment = new TextSegment(236, "དང");
        let insertionSegment2 = new TextSegment(238, "་");
        expect(annotatedText.segmentsForAnnotation(insertion)).toEqual([
            insertionSegment,
            insertionSegment2
        ]);

        let segmentPlusInsertion = new Annotation(
            WORKING_VERSION_ANNOTATION_ID,
            baseWitness,
            263,
            7,
            "ཁྱིམ་དང",
            ANNOTATION_TYPES.variant,
            otherWitness,
            getAnonymousUser()
        )

        let segmentPlusInsertionSegment = new TextSegment(231, "ཁྱིམ");
        let segmentPlusInsertionSegment2 = new TextSegment(235, "་");
        expect(annotatedText.segmentsForAnnotation(segmentPlusInsertion)).toEqual([
            segmentPlusInsertionSegment,
            segmentPlusInsertionSegment2,
            insertionSegment
        ]);

        let crossAnnotation = new Annotation(
            WORKING_VERSION_ANNOTATION_ID,
            baseWitness,
            201,
            4,
            "རོ་ན་ལ",
            ANNOTATION_TYPES.variant,
            otherWitness
        );

        let crossAnnotationSegment1 = new TextSegment(169, "རོ");
        let crossAnnotationSegment2 = new TextSegment(171, "་");
        let crossAnnotationSegment3 = new TextSegment(172, "ན");
        let crossAnnotationSegment4 = new TextSegment(173, "་");
        let crossAnnotationSegment5 = new TextSegment(174, "ལ");
        expect(annotatedText.segmentsForAnnotation(crossAnnotation)).toEqual([
            crossAnnotationSegment1,
            crossAnnotationSegment2,
            crossAnnotationSegment3,
            crossAnnotationSegment4,
            crossAnnotationSegment5
        ]);
    });

    test("Get original segments from amended version", () => {
        let expectedSegment = new TextSegment(87, "བོད");
        let originalSegment = annotatedText.originalSegmentAtPosition(57);
        expect(annotatedText.originalSegmentAtPosition(57)).toEqual(
            expectedSegment
        );

        expectedSegment = new TextSegment(268, "ཡངས");
        expect(annotatedText.originalSegmentAtPosition(239)).toEqual(
            expectedSegment
        );

        expect(annotatedText.originalSegmentAtPosition(1000)).toEqual(null);
    });

    test("Get base annotation", () => {
        let expectedAnnotation = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            99,
            3,
            "དཔལ",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(67, 3)).toEqual(
            expectedAnnotation
        );

        let expectedAdditionAnnotation = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            0,
            27,
            "༄༅། །སྒྲུབ་ཐབས་ཞེས་བྱ་བ།༄༅༅",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(0, 3)).toEqual(
            expectedAdditionAnnotation
        );

        let expectedInsertion = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            268,
            0,
            "",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(236, 3)).toEqual(
            expectedInsertion
        );

        let expectedInactiveInsertion = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            99,
            0,
            "",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(67, 0)).toEqual(
            expectedInactiveInsertion
        );

        let expectedInactiveInsertionBeforeAnnotation = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            57,
            0,
            "",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(29, 0)).toEqual(
            expectedInactiveInsertionBeforeAnnotation
        );

        let expectedDeletion = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            256,
            2,
            "ལ་",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(226, 0)).toEqual(
            expectedDeletion
        );

        let crossBoundaryAnnotation = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            41,
            10,
            "དུ། སྟྲཱི་",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(17, 6)).toEqual(
            crossBoundaryAnnotation
        );

        let crossBoundaryAnnotationStart = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            45,
            17,
            "སྟྲཱི་པྲཛྙཱ་ཤྲཱི་",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(21, 12)).toEqual(
            crossBoundaryAnnotationStart
        );

        let includesDeletion = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            248,
            15,
            "ཐུང་དྲག་ལ་གསུས་",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(218, 13)).toEqual(
            includesDeletion
        );

        const startDeletion = new Annotation(
            1,
            baseWitness,
            0,
            24,
            "",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        const testAnnotatedText = new AnnotatedText(
            segmentedText,
            [startDeletion],
            segmenter,
            baseWitness
        );

        let startDeletionBase = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            24,
            3,
            "༄༅༅",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(testAnnotatedText.getBaseAnnotation(0, 3)).toEqual(
            startDeletionBase
        );

        let currentEndPos = annotatedText.getText().length;
        let originalEndPos = annotatedText.originalText.getText().length;
        const afterEndBase = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            originalEndPos,
            0,
            "",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getBaseAnnotation(currentEndPos, 0)).toEqual(
            afterEndBase
        );

        const afterEndInsertion = new Annotation(
            10,
            baseWitness,
            testAnnotatedText.originalText.getText().length,
            0,
            "Test",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        testAnnotatedText.addAnnotation(afterEndInsertion);
        currentEndPos = testAnnotatedText.getText().length;
        originalEndPos = testAnnotatedText.originalText.getText().length;

        const afterEndInsertionBase = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            originalEndPos,
            0,
            "",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(testAnnotatedText.getBaseAnnotation(currentEndPos, 0)).toEqual(
            afterEndInsertionBase
        );
    });

    test("Get Annotation", () => {
        let expectedBaseAnnotation = new Annotation(
            BASE_ANNOTATION_ID,
            annotatedText.baseWitness,
            147,
            4,
            "བླ་མ",
            ANNOTATION_TYPES.variant,
            annotatedText.baseWitness
        );

        expect(annotatedText.getAnnotation(147, 4)).toEqual(
            expectedBaseAnnotation
        );

        let testStart = 204;
        let expectedVariant = annotations.filter((annotation: Annotation) => {
            return annotation.start === testStart;
        })[0];

        expect(annotatedText.getAnnotation(testStart, 1)).toEqual(
            expectedVariant
        );

        let insertionStart = 268;
        let expectedInsertion = annotations.filter((annotation: Annotation) => {
            return annotation.start === insertionStart;
        })[0];

        expect(annotatedText.getAnnotation(insertionStart, 0)).toEqual(
            expectedInsertion
        );

        let crossAnnotation = new Annotation(
            null,
            baseWitness,
            201,
            4,
            "རོ་ན་ལ",
            ANNOTATION_TYPES.variant,
            baseWitness,
            null,
            null
        );
        let gotCrossAnnotation = annotatedText.getAnnotation(201, 4);
        if (gotCrossAnnotation) {
            gotCrossAnnotation._uniqueId = null;
        }
        expect(gotCrossAnnotation).toEqual(
            crossAnnotation
        );
    });

    test("Annotations for position", () => {
        let expectedAnnotation1 = new Annotation(
            1,
            baseWitness,
            0,
            27,
            "༄༅༅",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[0].uniqueId
        );
        let expectedAnnotation3 = new Annotation(
            3,
            baseWitness,
            57,
            4,
            "ཤྲི",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[2].uniqueId
        );
        let expectedAnnotation5 = new Annotation(
            5,
            baseWitness,
            204,
            1,
            "ན་ལ",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[4].uniqueId
        );
        //let expectedAnnotation7 = new Annotation(7, baseWitness, 261, 1, "", otherWitness);

        expect(annotatedText.annotationsForPosition(0)).toEqual([
            expectedAnnotation1
        ]);

        expect(annotatedText.annotationsForPosition(29)).toEqual([
            expectedAnnotation3
        ]);

        expect(annotatedText.annotationsForPosition(172)).toEqual([
            expectedAnnotation5
        ]);

        expect(annotatedText.annotationsForPosition(175)).toEqual([]);

        expect(annotatedText.annotationsForPosition(227)).toEqual([]);

        let deletedAnnotation = new Annotation(
            6,
            baseWitness,
            256,
            2,
            "",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[5].uniqueId
        );
        expect(annotatedText.annotationsForPosition(226)).toEqual([
            deletedAnnotation
        ]);

        let expectedInsertion = new Annotation(
            7,
            baseWitness,
            268,
            0,
            "དང་",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[6].uniqueId
        );
        expect(annotatedText.annotationsForPosition(236)).toEqual([
            expectedInsertion
        ]);
    });

    test("Get current position of annotation", () => {
        let annotation = new Annotation(
            1,
            baseWitness,
            0,
            27,
            "",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        let annotation2 = new Annotation(
            6,
            baseWitness,
            256,
            2,
            "",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        let annotation3 = new Annotation(
            3,
            baseWitness,
            57,
            4,
            "ཤྲི",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        let annotation4 = new Annotation(
            5,
            baseWitness,
            204,
            1,
            "ན་ལ",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        let annotation5 = new Annotation(
            6,
            baseWitness,
            204,
            0,
            "དང་",
            ANNOTATION_TYPES.variant,
            otherWitness
        );
        let newAnnotations = [
            annotation,
            annotation2,
            annotation3,
            annotation4,
            annotation5
        ];
        const newAnnotatedText = new AnnotatedText(
            segmentedText,
            newAnnotations,
            segmenter,
            baseWitness
        );

        let expectedPosition = [0, 0];
        expect(newAnnotatedText.getPositionOfAnnotation(annotation)).toEqual(
            expectedPosition
        );

        const annotationAtSamePosition = new Annotation(
            200,
            baseWitness,
            0,
            27,
            "༄༅༅",
            ANNOTATION_TYPES.variant,
            anotherWitness
        );
        expectedPosition = [0, 3];
        // note: using annotatedText not newAnnotatedText
        expect(
            annotatedText.getPositionOfAnnotation(annotationAtSamePosition)
        ).toEqual(expectedPosition);

        expectedPosition = [233, 0];
        expect(newAnnotatedText.getPositionOfAnnotation(annotation2)).toEqual(
            expectedPosition
        );

        expectedPosition = [30, 3];
        expect(newAnnotatedText.getPositionOfAnnotation(annotation3)).toEqual(
            expectedPosition
        );

        expectedPosition = [179, 3];
        expect(newAnnotatedText.getPositionOfAnnotation(annotation4)).toEqual(
            expectedPosition
        );

        expectedPosition = [200, 15];
        let unchangedAnnotation = new Annotation(
            9,
            baseWitness,
            223,
            15,
            "",
            ANNOTATION_TYPES.variant,
            baseWitness
        );
        expect(
            newAnnotatedText.getPositionOfAnnotation(unchangedAnnotation)
        ).toEqual(expectedPosition);

        let endAdditionAnnotation = new Annotation(
            10,
            baseWitness,
            272,
            0,
            "མངྒཱ་ལཾམངྒཱལཾ",
            ANNOTATION_TYPES.variant,
            baseWitness
        );
        expectedPosition = [newAnnotatedText.getText().length, 0];
        expect(
            newAnnotatedText.getPositionOfAnnotation(endAdditionAnnotation)
        ).toEqual(expectedPosition);

        let insertion = new Annotation(
            7,
            baseWitness,
            268,
            0,
            "དང་",
            ANNOTATION_TYPES.variant,
            otherWitness,
            null,
            annotations[6].uniqueId
        );
        expectedPosition = [236, 3];
        expect(annotatedText.getPositionOfAnnotation(insertion)).toEqual(
            expectedPosition
        );

        let nonactiveInsertion = new Annotation(
            77,
            baseWitness,
            268,
            0,
            "དང་",
            ANNOTATION_TYPES.variant,
            anotherWitness
        );
        expectedPosition = [239, 0];
        expect(
            annotatedText.getPositionOfAnnotation(nonactiveInsertion)
        ).toEqual(expectedPosition);

        let adjacentInsertion = annotation5;
        expect(
            newAnnotatedText.getPositionOfAnnotation(adjacentInsertion)
        ).toEqual([176, 3]);

        let includesDeletion = new Annotation(
            WORKING_VERSION_ANNOTATION_ID,
            baseWitness,
            248,
            15,
            "ཐུང་དྲག་གསུས་",
            ANNOTATION_TYPES.variant,
            baseWitness,
            getAnonymousUser()
        );
        expectedPosition = [218, 13];
        expect(annotatedText.getPositionOfAnnotation(includesDeletion)).toEqual(
            expectedPosition
        );

        // TODO: write some more tests for multi-segment changes
    });

    test("AnnotatedText uniqueId", () => {
        const segmentedText = segmentTibetanText(baseWitness.content || "");
        const annotatedText = new AnnotatedText(
            segmentedText,
            annotations,
            segmenter,
            baseWitness
        );

        let expectedId = baseWitness.id + "-" + baseWitness.id + "-";
        let sortedAnnotations = [...annotations];
        sortedAnnotations.sort((el1, el2) => {
            if (el1.uniqueId < el2.uniqueId) {
                return -1;
            }
            if (el1.uniqueId > el2.uniqueId) {
                return 1;
            }

            return 0;
        });
        expectedId += sortedAnnotations.reduce(
            (acc: string, annotation: Annotation) => {
                return acc + annotation.uniqueId + annotation.content;
            },
            ""
        );
        expect(annotatedText.getUniqueId()).toEqual(expectedId);
    });
});
