class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        var sold = Int.min, held = Int.min, reset = 0

        for price in prices {
            let preSold = sold

            sold = held + price
            held = max(held, reset - price)
            reset = max(reset, preSold)
        }

        return max(sold, reset)
    }
}
