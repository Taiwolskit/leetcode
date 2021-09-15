/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    let oddTurb = 1;
    let evenTurb = 1;
    let maxLen = 1;

    for (let k = 0; k < arr.length - 1; k++) {
        if (k % 2 == 1) {
            oddTurb = arr[k] > arr[k + 1] ? oddTurb + 1 : 1;
            evenTurb = arr[k] < arr[k + 1] ? evenTurb + 1 : 1;
        } else {
            evenTurb = arr[k] > arr[k + 1] ? evenTurb + 1 : 1;
            oddTurb = arr[k] < arr[k + 1] ? oddTurb + 1 : 1;
        }

        maxLen = Math.max(maxLen, oddTurb, evenTurb);
    }

    return maxLen;
};
