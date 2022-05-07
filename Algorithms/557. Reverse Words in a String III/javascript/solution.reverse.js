/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const result = [];
    let word = '';
    for (const ch of s) {
        if (ch === ' ') {
            result.push(word);
            word = '';
        } else {
            word = ch + word;
        }
    }
    result.push(word);
    return result.join(' ');
};
