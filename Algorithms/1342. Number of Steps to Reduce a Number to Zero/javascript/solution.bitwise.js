/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    if (num === 0) {
        return 0;
    }

    let steps = 0,
        powerOfTwo = 1;
    while (powerOfTwo <= num) {
        if (num & powerOfTwo) {
            steps += 2;
        } else {
            steps++;
        }
        powerOfTwo *= 2;
    }
    return steps - 1;
};
