/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let sell = 0;
    let buy = -prices[0];
    let cooldown = 0;

    for (let i = 1; i < prices.length; i++) {
        const nextSell = Math.max(sell, buy + prices[i]);
        const nextBuy = Math.max(buy, cooldown - prices[i]);
        const nextCooldown = Math.max(cooldown, sell);

        sell = nextSell;
        buy = nextBuy;
        cooldown = nextCooldown;
    }

    return sell;
};
