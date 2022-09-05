// @flow
import SegmentedText from "./SegmentedText";
import TextSegment from "./TextSegment";

export default function segmentTibetanText(text: string): SegmentedText {
  const breaks = "།།";
  const spaces = "་་ \n";

  let segments = [];
  let currentSegment = "";
  let currentStart = 0;
  let inBreak = false;
  let inSpace = false;
  let count = 0;
  let sharSpaceCount = 0;

  for (let char of text) {
    if (breaks.includes(char)) {
      if (count > 0) {
        const newSegment = new TextSegment(currentStart, currentSegment);
        segments.push(newSegment);
      }
      inBreak = true;
      inSpace = false;
      currentSegment = char;
      currentStart = count;
    } else if (spaces.includes(char)) {
      console.log(currentStart, currentSegment);

      if (inSpace) {
        currentSegment += char;
      } else {
        if (count > 0) {
          const newSegment = new TextSegment(currentStart, currentSegment);
          segments.push(newSegment);
        }

        inBreak = false;
        inSpace = true;
        currentSegment = char;
        currentStart = count;
      }
    } else {
      if (inSpace || inBreak) {
        if (count > 0) {
          const newSegment = new TextSegment(currentStart, currentSegment);
          segments.push(newSegment);
        }
        inBreak = false;
        inSpace = false;
        currentSegment = char;
        currentStart = count;
      } else {
        currentSegment += char;
      }
    }

    count++;
  }

  if (currentSegment) {
    const newSegment = new TextSegment(currentStart, currentSegment);
    segments.push(newSegment);
  }
  return new SegmentedText(segments);
}
