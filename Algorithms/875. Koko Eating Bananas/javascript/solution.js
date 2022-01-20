/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1,
        right = Math.max(...piles);
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        const hourSpent = piles.reduce(
            (amount, pile) => amount + Math.ceil(pile / middle),
            0
        );

        if (h >= hourSpent) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    return right;
};
