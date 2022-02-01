/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Number.MAX_SAFE_INTEGER,
        theMaxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > theMaxProfit) {
            theMaxProfit = price - minPrice;
        }
    }

    return theMaxProfit;
};
