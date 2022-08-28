const tibetanVowels = ["ི", "ུ", "ེ", "ོ"];
const shaySwallowers = ["ཀ", "ག"];
export const NON_BREAKING_TSHEG = "༌";

function isTibetanCharacter(char) {
    return char.codePointAt(0) >= 3840 && char.codePointAt(0) <= 4095;
}

/**
 * Returns the given string with a Tibetan shay character
 * added (or omitted) correctly.
 * @param {string} str
 * @returns {string}
 */
export default function addTibetanShay(str, alternateEnd = null) {
    const lastChar = str.slice(-1);
    let newStr = "";

    if (!isTibetanCharacter(lastChar)) {
        newStr = str;
        if (alternateEnd) {
            newStr += alternateEnd;
        }
    } else if (lastChar === "ང") {
        newStr += str + NON_BREAKING_TSHEG + "།";
    } else if (shaySwallowers.indexOf(lastChar) !== -1) {
        newStr += str;
    } else if (tibetanVowels.indexOf(lastChar) !== -1) {
        if (shaySwallowers.indexOf(str.charAt(str.length - 2)) !== -1) {
            newStr += str;
        } else {
            newStr += str + "།";
        }
    } else {
        newStr += str + "།";
    }

    return newStr;
}
