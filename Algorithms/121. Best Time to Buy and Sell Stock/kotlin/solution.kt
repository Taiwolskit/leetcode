class Solution {
    fun maxProfit(prices: IntArray): Int {
        var minPrice = Int.MAX_VALUE
        var theMaxProfit = 0

        for (price in prices) {
            if (price < minPrice) {
                minPrice = price
            } else if (price - minPrice > theMaxProfit) {
                theMaxProfit = price - minPrice
            }
        }

        return theMaxProfit
    }
}
