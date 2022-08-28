// @flow
import type { TextExporter } from "./TextExporter";
import AnnotatedText from "./AnnotatedText";
import lengthSplitterFactory from "lib/text_splitters/lengthSplitter";

const TIBETAN_FONT = "Microsoft Himalaya";
const HEADING = "TibetanHeading";
const TEXT = "TibetanText";

class DocxExporter implements TextExporter {
    async export(text: AnnotatedText, filename: string): Promise<Blob> {
        // We are importing dynamically as docx is a large library that
        // is only required occasionally, thus not worth slowing down
        // the initial load for.
        const docx = await import(/* webpackChunkName: "docx" */ "docx");

        const doc = new docx.Document();

        this.generateStyles(doc);

        const title = doc.createParagraph(text.textInfo.name).style(HEADING);

        const content = text.getText();
        const splitter = lengthSplitterFactory(1000, /^།[\s]+(?!།[\s]+)/, 2, 5);
        const positions = splitter(content);

        let startPos = 0;
        while (positions.length > 0) {
            const pos = positions.shift();
            const paraContent = content.substring(startPos, pos);
            const para = new docx.Paragraph(paraContent).style(TEXT);
            doc.addParagraph(para);
            startPos = pos;
        }

        const packer = new docx.Packer();
        const blob = await packer.toBlob(doc);
        return blob;
    }

    generateStyles(doc: Document) {
        // As we are now dynamically importing docx, these types are not
        // available until runtime.
        //$FlowFixMe
        doc.Styles.createParagraphStyle(HEADING, HEADING)
            .basedOn("Normal")
            .size(28)
            .font(TIBETAN_FONT)
            .spacing({
                after: 120
            });
        //$FlowFixMe
        doc.Styles.createParagraphStyle(TEXT, TEXT)
            .basedOn("Normal")
            .size(18)
            .font(TIBETAN_FONT);
    }
}

export default DocxExporter;
