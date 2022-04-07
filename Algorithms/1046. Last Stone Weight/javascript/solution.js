/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const maxWeight = Math.max(...stones);
    const buckets = new Array(maxWeight + 1).fill(0);
    for (const weight of stones) {
        buckets[weight]++;
    }

    let biggestWeight = 0,
        currentWeight = maxWeight;
    while (currentWeight > 0) {
        if (buckets[currentWeight] === 0) {
            currentWeight--;
        } else if (biggestWeight === 0) {
            buckets[currentWeight] %= 2;
            if (buckets[currentWeight] === 1) {
                biggestWeight = currentWeight;
            }
            currentWeight--;
        } else {
            buckets[currentWeight]--;
            if (biggestWeight - currentWeight <= currentWeight) {
                buckets[biggestWeight - currentWeight]++;
                biggestWeight = 0;
            } else {
                biggestWeight -= currentWeight;
            }
        }
    }
    return biggestWeight;
};
