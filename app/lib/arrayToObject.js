// @flow
export default function arrayToObject(
    arr: Array<any>,
    key: string | (any => string)
) {
    const keyFunc = typeof key === "function" ? key : null;
    return arr.reduce(function(result, item) {
        let objKey;
        if (keyFunc) {
            objKey = keyFunc(item);
        } else {
            objKey = item[key];
        }
        result[objKey] = item;
        return result;
    }, {});
}
