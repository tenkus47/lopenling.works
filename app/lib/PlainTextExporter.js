// @flow
import { TextExporter } from "./TextExporter";
import AnnotatedText from "./AnnotatedText";

export default class PlainTextExporter implements TextExporter {
    export(text: AnnotatedText, filename: string): Promise<Blob> {
        const textContent = text.textInfo.name + "\n\n" + text.getText();
        const type = "text/plain";
        let textFile;

        try {
            textFile = new File([textContent], filename, {
                type: type
            });
        } catch (e) {
            textFile = new Blob([textContent], {
                type: type
            });
        }

        return new Promise(resolve => {
            resolve(textFile);
        });
    }
}
