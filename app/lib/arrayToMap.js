export default function arrayToMap(arr, key) {
    return arr.reduce(function(result, item) {
        if (item[key] != undefined) {
            const objKey = item[key];
            result.set(objKey, item);
            // result[objKey] = item
            return result;
        }
    }, new Map());
}
