/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const counter = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    };
    const doubleChar = new Set(['l', 'o']);
    for (let char of text) {
        if (char in counter) {
            counter[char] += doubleChar.has(char) ? 1 : 2;
        }
    }

    return Math.floor(Math.min(...Object.values(counter)) / 2);
};
