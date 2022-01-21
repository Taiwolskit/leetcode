/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalTank = 0,
        currTank = 0,
        startingStation = 0;

    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i];
        currTank += gas[i] - cost[i];

        if (currTank < 0) {
            startingStation = i + 1;
            currTank = 0;
        }
    }

    return totalTank >= 0 ? startingStation : -1;
};
