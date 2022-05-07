/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let left = 0,
        right = s.length - 1;
    while (left <= right && s[left] === ' ') {
        left++;
    }
    while (left <= right && s[right] === ' ') {
        right--;
    }

    const d = [];
    let word = [];
    for (let i = left; i <= right; i++) {
        if (s[i] === ' ' && word.length > 0) {
            d.unshift(word.join(''));
            word = [];
        } else if (s[i] !== ' ') {
            word.push(s[i]);
        }
    }
    d.unshift(word.join(''));
    return d.join(' ');
};
