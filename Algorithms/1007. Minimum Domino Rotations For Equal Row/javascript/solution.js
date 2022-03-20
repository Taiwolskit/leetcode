/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
    const check = (x) => {
        let rotationsA = 0,
            rotationsB = 0;
        for (let i = 0; i < tops.length; i++) {
            if (tops[i] != x && bottoms[i] != x) return -1;
            else if (tops[i] != x) rotationsA++;
            else if (bottoms[i] != x) rotationsB++;
        }
        return Math.min(rotationsA, rotationsB);
    };

    const rotations = check(tops[0]);
    return rotations !== -1 || bottoms[0] === tops[0]
        ? rotations
        : check(bottoms[0]);
};
