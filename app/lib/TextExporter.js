// @flow
import AnnotatedText from "./AnnotatedText";

export interface TextExporter {
    export(text: AnnotatedText, filename: string): Promise<Blob>;
}
