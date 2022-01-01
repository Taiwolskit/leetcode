class Solution {
    func maxCoins(_ nums: [Int]) -> Int {
        // add dummy 1s to start and end
        var arr = [1] + nums + [1]

        let n = arr.count

        var coins = Array(repeating: Array(repeating: 0, count: n), count: n)

        // coins[l][r] - max # of coins we can get after destroying (l,r) interval

        for len in 2..<n {
            for l in 0..<n-len {
                var r = l+len
                // iterate over elements we destroy last
                for j in (l+1)..<r {
                    // if element j is destroyed last we have to destroy intervals (l,j) and (j, r) before it
                    // and for the last operation we recieve arr[l]*arr[j]*arr[r] coins
                    coins[l][r] = max(coins[l][r], coins[l][j] + coins[j][r] + arr[l]*arr[j]*arr[r])
                }
            }
        }

        return coins[0][n-1]
    }
}
