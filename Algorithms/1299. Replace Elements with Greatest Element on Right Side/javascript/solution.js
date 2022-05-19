/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let mx = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        [arr[i], mx] = [mx, Math.max(arr[i], mx)];
    }
    return arr;
};
