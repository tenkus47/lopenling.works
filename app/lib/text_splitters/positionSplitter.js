// @flow
import type { Splitter } from "lib/SplitText";

/**
 * Returns a function that accepts a string but simply
 * returns the initial array of positions passed to it.
 *
 * @param positions - The positions where a string should be split
 */
export default function positionSplitter(positions: number[]): Splitter {
    const newPositions = [...positions];
    if (newPositions[0] === 0) {
        newPositions.shift();
    }
    return string => newPositions;
}
