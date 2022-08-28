// @flow
import Annotation from "lib/Annotation";

/**
 * Partial segment of a larger text.
 *
 * For Tibetan texts, this will be one syllable if normal text,
 * otherwise it can be contiguous 'punctuation' characters.
 */
export default class TextSegment {
    _start: number;
    _text: string;
    _annotation: ?Annotation;

    constructor(start: number, text: string) {
        this._start = start;
        this._text = text;
    }

    get start(): number {
        return this._start;
    }

    set start(value: number) {
        this._start = value;
    }

    get end(): number {
        let end = this._start + this._text.length;
        if (this._text.length > 0) end -= 1;
        return end;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get length(): number {
        return this._text.length;
    }

    toString() {
        return [this._start, this._text].join("_");
    }
}
