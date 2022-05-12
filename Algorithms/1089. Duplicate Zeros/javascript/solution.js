/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let possibleDups = 0,
        length_ = arr.length - 1;
    for (let i = 0; i <= length_; i++) {
        if (i > length_ - possibleDups) {
            break;
        }

        if (arr[i] === 0) {
            if (i === length_ - possibleDups) {
                arr[length_] = 0;
                length_--;
                break;
            }
            possibleDups++;
        }
    }

    const last = length_ - possibleDups;
    for (let i = last; i >= 0; i--) {
        arr[i + possibleDups] = arr[i];
        if (arr[i] === 0) {
            possibleDups--;
            arr[i + possibleDups] = arr[i];
        }
    }
};
