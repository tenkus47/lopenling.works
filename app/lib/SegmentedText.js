// @flow
import TextSegment from "./TextSegment";

const DEFAULT_BOUNDARIES = [" "];

export default class SegmentedText {
  segments: TextSegment[];
  _sortedSegments: TextSegment[];
  _sortedText: string | null;

  constructor(segments: TextSegment[]) {
    this.segments = segments;
    // this._sortedSegments = null;
    this._sortedText = null;
  }

  /**
   * Combine all the text's segments into a string.
   */
  getText(): string {
    if (this._sortedText == null) {
      let text = "";
      for (let i = 0, len = this.segments.length; i < len; i++) {
        text += this.segments[i].text;
      }
      this._sortedText = text;
    }
    return this._sortedText;
  }

  extractTextAroundPosition(
    start: number,
    end: number,
    boundaries: string[],
    includeBoundaries: boolean = true
  ): [string, string, string] {
    // TODO: in future add options for length etc.

    let totalSegments = this.segments.length;
    let index = this.indexOfSegmentAtPosition(start);
    let startIndex = null;
    if (boundaries.length === 0) {
      boundaries = DEFAULT_BOUNDARIES;
    }
    const boundariesLength = boundaries.length;

    let startExtract = "";
    let currentIndex = index - 1;

    while (startIndex === null) {
      let segment = this.segments[currentIndex];
      for (let i = 0; i < boundariesLength; i++) {
        let boundary = boundaries[i];
        if (segment.text.includes(boundary)) {
          startIndex = currentIndex;
          break;
        }
      }
      if (!startIndex || includeBoundaries) {
        startExtract = segment.text + startExtract;
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          startIndex = 0;
        }
      }
    }

    let positionSegment = this.segments[index];

    currentIndex = index + 1;
    let endIndex = null;
    let endExtract = "";
    while (endIndex === null) {
      let segment = this.segments[currentIndex];
      for (let i = 0; i < boundariesLength; i++) {
        let boundary = boundaries[i];
        if (segment.text.includes(boundary)) {
          endIndex = currentIndex;
          break;
        }
      }
      if (!endIndex || includeBoundaries) {
        endExtract = endExtract + segment.text;
        if (currentIndex < totalSegments) {
          currentIndex++;
        } else {
          endIndex = currentIndex;
        }
      }
    }

    return [startExtract, positionSegment.text, endExtract];
  }

  /**
   * Get the texts segments sorted by start position.
   */
  sortedSegments(): TextSegment[] {
    if (!this._sortedSegments) {
      // Note: much faster than slice(0)
      this._sortedSegments = [...this.segments];
      this._sortedSegments.sort((a, b) => {
        let res = a.start - b.start;
        if (res == 0) {
          // shorter segments should come first
          res = a.length - b.length;
        }

        return res;
      });

      let segmentsStr = this.segments.reduce(
        (acc: string, curr: TextSegment): string => {
          return (acc += curr.text);
        },
        ""
      );

      let sortedSegmentsStr = this._sortedSegments.reduce(
        (acc: string, curr: TextSegment): string => {
          return (acc += curr.text);
        },
        ""
      );

      if (segmentsStr != sortedSegmentsStr) {
        console.warn(
          "segments not same as sortedSegments, length: %d",
          segmentsStr.length
        );
      }
    }
    return this._sortedSegments;
  }

  /**
   * Return the index of the segment at the given position.
   *
   * Intended to be used privately by internal methods.
   *
   * @return 0 or greater if a segment is found; -1 if not found.
   */
  indexOfSegmentAtPosition(position: number): number {
    let foundSegmentIndex = -1;

    const segments = this.segments;
    let minIndex = 0;
    let maxIndex = segments.length - 1;
    let currentIndex;
    let currentSegment;

    while (minIndex <= maxIndex) {
      currentIndex = ((minIndex + maxIndex) / 2) | 0;
      currentSegment = segments[currentIndex];
      const segmentEnd = currentSegment.start + currentSegment.text.length - 1;
      if (segmentEnd < position) {
        minIndex = currentIndex + 1;
      } else if (currentSegment.start > position) {
        maxIndex = currentIndex - 1;
      } else {
        return currentIndex;
      }
    }

    return foundSegmentIndex;
  }

  /**
   * Get the TextSegment at the given position in the text.
   */
  segmentAtPosition(position: number): TextSegment | null {
    let foundSegment = null;
    let segmentIndex = this.indexOfSegmentAtPosition(position);
    if (segmentIndex > -1) {
      foundSegment = this.segments[segmentIndex];
    }
    return foundSegment;
  }
  /**
   * Get TextSegments within the given range of characters in the text.
   */
  segmentsInRange(start: number, length: number): TextSegment[] {
    let segments = [];
    let rangeEnd;
    if (length == 0) {
      rangeEnd = start;
    } else {
      rangeEnd = start + length - 1;
    }

    const allSegments = this.segments;
    const firstSegmentIndex = this.indexOfSegmentAtPosition(start);
    if (firstSegmentIndex > -1) {
      for (let i = firstSegmentIndex; i < allSegments.length; i++) {
        let segment = allSegments[i];
        const segmentEnd = segment.start + segment.text.length - 1;

        if (
          (segment.start <= start &&
            segmentEnd >= start &&
            segmentEnd <= rangeEnd) ||
          (segment.start >= start && segmentEnd <= rangeEnd) ||
          (segment.start <= rangeEnd && segmentEnd >= rangeEnd)
        ) {
          segments.push(segment);
        } else {
          break;
        }
      }
    }
    return segments;
  }
}
