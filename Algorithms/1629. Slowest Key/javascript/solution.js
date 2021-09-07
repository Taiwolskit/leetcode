/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    const n = releaseTimes.length;
    let maxDiff = releaseTimes[0];
    let result = keysPressed[0];

    for (let i = 1; i < n; i++) {
        const diff = releaseTimes[i] - releaseTimes[i - 1];
        if (
            diff > maxDiff ||
            (diff === maxDiff && keysPressed[i] > result)
        ) {
            maxDiff = diff;
            result = keysPressed[i];
        }
    }

    return result;
};
