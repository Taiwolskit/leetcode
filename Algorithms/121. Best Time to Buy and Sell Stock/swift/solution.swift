class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        var minPrice = Int.max
        var theMaxProfit = 0

        for price in prices {
            if price < minPrice {
                minPrice = price
            } else if price - minPrice > theMaxProfit {
                theMaxProfit = price - minPrice
            }
        }

        return theMaxProfit
    }
}
