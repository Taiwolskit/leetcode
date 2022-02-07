/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let ch = 0;
    for (let i = 0; i < s.length; i++) ch ^= s.charCodeAt(i);
    for (let i = 0; i < t.length; i++) ch ^= t.charCodeAt(i);
    return String.fromCharCode(ch);
};
