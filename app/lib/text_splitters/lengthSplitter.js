// @flow
import type { Splitter } from "lib/SplitText";

/**
 * Return a function to calculate the positions in a string in order to split it to a
 * minimum length.
 *
 * If endStringTest is supplied, it will get a string of the given length, then continue
 * adding characters until endStringTest is passed.
 * endStringTest will be given endString plus endStringSuffixLength characters that are
 * after the end of the string.
 *
 * @param {number} length - The minimum length of string. If less than this, no split positions are returned.
 * @param {RegExp|string} [endStringTest] - Split the string at the first match of endStringTest after length
 * @param {number} [endStringLength=0] - The number of characters to use for endStringTest
 * @param {number} [endStringSuffixLength=0] - The number of characters after the end of the string to use for endStringTest
 * @return {function(*)}
 */
export default function splitterFactory(
    length: number,
    endStringTest: string | RegExp | null,
    endStringLength: number = 0,
    endStringSuffixLength: number = 0
): Splitter {
    if (endStringLength === 0) {
        if (typeof endStringTest === "string") {
            endStringLength = endStringTest.length;
        } else {
            endStringLength = 1;
        }
    }
    return string => {
        let indexes = [];
        if (string.length < length) {
            return indexes;
        }

        const test = chars => {
            let passed = true;

            if (endStringTest) {
                if (typeof endStringTest === "string") {
                    if (chars !== endStringTest) {
                        passed = false;
                    }
                } else if (!endStringTest.test(chars)) {
                    passed = false;
                }
            }

            return passed;
        };

        let start = 0;
        while (start < string.length) {
            let end = start + length;
            if (!endStringTest) {
                indexes.push(end);
                continue;
            }

            let testChars = "";
            while (!test(testChars) && end < string.length) {
                testChars = string.slice(
                    end - endStringLength,
                    end + endStringSuffixLength
                );
                end++;
            }
            if (end < string.length) {
                indexes.push(end - 1);
            }
            start = end;
        }

        return indexes;
    };
}
