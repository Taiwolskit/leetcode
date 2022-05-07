/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const l = trimSpaces(s);
    reverse(l, 0, l.length - 1);
    reverseEachWord(l);
    return l.join('');
};

const trimSpaces = (s) => {
    let left = 0,
        right = s.length - 1;
    while (left <= right && s[left] === ' ') {
        left++;
    }
    while (left <= right && s[right] === ' ') {
        right--;
    }

    const output = [];
    for (let i = left; i <= right; i++) {
        if (s[i] !== ' ' || output[output.length - 1] !== ' ') {
            output.push(s[i]);
        }
    }
    return output;
};

const reverse = (l, left, right) => {
    while (left < right) {
        const temp = l[left];
        l[left] = l[right];
        l[right] = temp;
        left++;
        right--;
    }
};

const reverseEachWord = (l) => {
    const n = l.length;
    let start = 0,
        end = 0;
    while (start < n) {
        while (end < n && l[end] !== ' ') {
            end++;
        }
        reverse(l, start, end - 1);
        start = end + 1;
        end++;
    }
};
