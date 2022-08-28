import Annotation, { AnnotationUniqueId } from "lib/Annotation";
import Answer from "./Answer";

export default class Question {
    annotationUniqueId: AnnotationUniqueId;
    name: string;
    username: string;
    title: string;
    content: string;
    topicId: number;
    answers: Answer[];
    created: Date;

    constructor() {
        this.answers = [];
    }
}
