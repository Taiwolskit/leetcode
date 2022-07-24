class Solution {
    func maximumWealth(_ accounts: [[Int]]) -> Int {
        var max: Int = 0
        for account: [Int] in accounts {
            var sum: Int = 0
            for num: Int in account {
                sum += num
            }
            max = max > sum ? max : sum
        }
        return max
    }
}
