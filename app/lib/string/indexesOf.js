/**
 * Returns all indexes of searchStr in string.
 *
 * e.g. indexesOf('D', 'ABCDEFD') would return [3, 6].
 *
 * @param {string} searchStr - The string to search for
 * @param {string} string - The string to search within
 * @return {[Number]} Starting indexes. Empty if nothing found.
 */
export default function indexesOf(searchStr, string) {
    let indexes = [];
    let index;
    let startIndex = 0;

    while ((index = string.indexOf(searchStr, startIndex)) > -1) {
        indexes.push(index);
        startIndex = index + searchStr.length;
    }

    return indexes;
}
