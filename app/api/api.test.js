// import { fetchTexts, fetchSources } from "./index";
import axios from "axios";
import {
    BASE_ANNOTATION_ID,
    WORKING_VERSION_ANNOTATION_ID
} from "lib/AnnotatedText";
import Source from "lib/Source";
import Text from "lib/Text";
import Witness from "lib/Witness";
import Annotation, { ANNOTATION_TYPES } from "lib/Annotation";
import * as api from "api";

const baseTextContent = "";

const source1 = new Source(1, "Working");
const source2 = new Source(2, "Chone");
const source3 = new Source(3, "Peking");

const text = new Text(
    34,
    "ཀྱེའི་རྡོ་རྗེ་ལས་བྱུང་བའི་ཀུ་རུ་ཀུལླེའི་མན་ངག་ཆེན་པོ་ལྔ།"
);

const baseWitness = new Witness(1080, text, source1, baseTextContent, false, true);
const otherWitness = new Witness(1082, text, source2);

test("gets list of texts from server", () => {});

test("creating questions", (done) => {
    let annotation = new Annotation(
        BASE_ANNOTATION_ID,
        baseWitness,
        304,
        17,
        "ཞུགས་གྱེན་སོང་ཞིང",
        ANNOTATION_TYPES.variant,
        baseWitness
    );

    let title = "Test post";
    let content = "Testing a post via JS api";

    api.setHost("http://127.0.0.1:8108");

    // TODO: Fix cross-origin error that happens when running this

    api.createQuestion(annotation, title, content)
        .then(topicId => {
            console.log("createQuestion response: %o", topicId);
            done();
        })
        .catch(error => {
            console.log("createQuestion error: %o", error);
            done();
        });
});

// test("getting questions", (done) => {
//     api.setHost("http://127.0.0.1:8108");
//     TODO: this should be a in-browser test as need
//           to login to external site via form

//     api.getQuestion(annotation)
// });
