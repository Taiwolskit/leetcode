/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    let optSet = new Set();
    for (let word of arr) optimize(optSet, word);
    optArr = [...optSet];
    return dfs(optArr, 0, 0);
};

const optimize = (optSet, word) => {
    let charBitSet = 0;
    for (let c of word) {
        const mask = 1 << (c.charCodeAt() - 97);
        if (charBitSet & mask) return;
        charBitSet += mask;
    }

    optSet.add(charBitSet + (word.length << 26));
};

const dfs = (optArr, pos, res) => {
    const oldChars = res & ((1 << 26) - 1),
        oldLen = res >> 26;
    let best = oldLen;

    for (let i = pos; i < optArr.length; i++) {
        const newChars = optArr[i] & ((1 << 26) - 1),
            newLen = optArr[i] >> 26;

        if (newChars & oldChars) continue;

        const newRes = oldChars + newChars + ((oldLen + newLen) << 26);
        best = Math.max(best, dfs(optArr, i + 1, newRes));
    }
    return best;
};
