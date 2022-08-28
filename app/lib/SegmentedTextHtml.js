export default class SegmentedTextHtml {
    constructor(segmentedText) {
        this._segmentedText = segmentedText;
        this._html = null;
    }

    html() {
        if (!this._html) {
            let html = "";
            for (let segment of this._segmentedText.segments) {
                let id = this.idForSegment(segment);
                html += '<span id="' + id + '">' + segment.text + "</span>";
            }
            this._html = html;
        }

        return this._html;
    }

    segmentIdAtPosition(position) {
        let id = false;
        let segment = this._segmentedText.segmentAtPosition(position);
        if (segment) {
            id = this.idForSegment(segment);
        }
        return id;
    }

    segmentIdsInRange(start, length) {
        const segments = this._segmentedText.segmentsInRange(start, length);
        let segmentIds = segments.map(segment => {
            return this.idForSegment(segment);
        });

        return segmentIds;
    }

    idForSegment(segment) {
        return "s_" + segment.start;
    }
}
