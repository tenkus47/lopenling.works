import indexesOf from "lib/string/indexesOf";

/**
 * Return a function to calculate the split positions using the given searchStr.
 *
 * @param searchStr - The string to search and split on
 * @param minimumSize - The minimum length of string to split. If less than this, no split positions are returned.
 * @return {function(*)}
 */
export default function splitterFactory(searchStr, minimumSize = 100) {
    return string => {
        let indexes = [];
        if (string.length < minimumSize) {
            return indexes;
        }

        indexes = indexesOf(searchStr, string);
        let positions = [];
        indexes.map(index => {
            positions.push(index + searchStr.length);
        });
        return positions;
    };
}
