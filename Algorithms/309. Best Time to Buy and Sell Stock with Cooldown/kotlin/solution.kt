class Solution {
    fun maxProfit(prices: IntArray): Int {
        var sold = Int.MIN_VALUE
        var held = Int.MIN_VALUE
        var reset = 0

        for (price in prices) {
            val preSold = sold
            sold = held + price
            held = maxOf(held, reset - price)
            reset = maxOf(reset, preSold)
        }

        return maxOf(sold, reset)
    }
}
