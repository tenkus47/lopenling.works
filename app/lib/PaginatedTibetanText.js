import segmentTibetanText from "./segmentTibetanText";
import SegmentedText from "./SegmentedText";

/**
 * Represents a tibetan text split into multiple pages.
 */
export default class PaginatedTibetanText {
    /**
     * Creates a PaginatedText.
     * @param {string} text - the text to be paginated
     * @param {number[]} [pageBreaks] - positions in the text to split pages
     * @param {number} [charsPerPage=400] - if no pageBreaks are supplied, split the text every multiple of this
     */
    constructor(text, pageBreaks, charsPerPage = 400) {
        this.text = text;
        this.pageBreaks = pageBreaks;
        this.charsPerPage = charsPerPage;
        this._segmentedText = null;
        this._pages = null;
    }

    getPages() {
        if (!this._pages) {
            if (!this._segmentedText) {
                this._segmentedText = segmentTibetanText(this.text);
            }

            let segments = this._segmentedText.sortedSegments();
            let pages = null;

            if (this.pageBreaks != null) {
                pages = this.getPagesWithPageBreaks(this.pageBreaks, segments);
            } else {
                pages = this.getPagesWithCharsPerPage(
                    this.charsPerPage,
                    segments
                );
            }

            this._pages = pages;
        }

        return this._pages;
    }

    getPagesWithPageBreaks(pageBreaks, segments) {
        let pages = [];
        let charCount = 0;
        let pageSegments = [];
        for (let pageBreak of pageBreaks) {
            let segment = null;
            while ((segment = segments.shift())) {
                charCount += segment.text.length;
                if (charCount > pageBreak) {
                    const segmentedText = new SegmentedText(pageSegments);
                    pages.push(segmentedText);
                    pageSegments = [segment];
                    break;
                } else {
                    pageSegments.push(segment);
                }
            }
        }

        const remainingSegments = pageSegments.concat(segments);
        const segmentedText = new SegmentedText(remainingSegments);
        pages.push(segmentedText);

        return pages;
    }

    getPagesWithCharsPerPage(charsPerPage, segments) {
        let pages = [];
        let pageSegments = [];
        let pageCharCount = 0;
        for (let segment of segments) {
            pageCharCount += segment.text.length;
            if (pageCharCount > charsPerPage) {
                const segmentedText = new SegmentedText(pageSegments);
                pages.push(segmentedText);
                pageSegments = [];
                pageCharCount = 0;
            }
            pageSegments.push(segment);
        }
        const segmentedText = new SegmentedText(pageSegments);
        pages.push(segmentedText);

        return pages;
    }
}
