/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    const n = word.length;
    if (n === 1) return true;

    if (
        word[0] === word[0].toUpperCase() &&
        word[1] === word[1].toUpperCase()
    ) {
        for (let i = 2; i < n; i++) {
            if (word[i] !== word[i].toUpperCase()) return false;
        }
    } else {
        for (let i = 1; i < n; i++) {
            if (word[i] === word[i].toUpperCase()) return false;
        }
    }

    return true;
};
