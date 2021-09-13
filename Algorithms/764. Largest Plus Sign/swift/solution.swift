class Solution {
    func orderOfLargestPlusSign(_ n: Int, _ mines: [[Int]]) -> Int {
        var grid: [[Int]] = Array(repeating: Array(repeating: 1, count: n), count: n)
        for mine in mines {
            grid[mine[0]][mine[1]] = 0
        }
        var dp: [[Int]] = Array(repeating: Array(repeating: n, count: n), count: n)
        var ans = 0

        for r in 0..<n {
            var count = 0
            for c in 0..<n {
                if grid[r][c] == 0 {
                    count = 0
                } else {
                    count += 1
                }
                dp[r][c] = min(dp[r][c], count)
            }

            count = 0
            for c in stride(from: n-1, to: 0, by: -1) {
                if grid[r][c] == 0 {
                    count = 0
                } else {
                    count += 1
                }
                dp[r][c] = min(dp[r][c], count)
            }
        }

        for c in 0..<n {
            var count = 0
            for r in 0..<n {
                if grid[r][c] == 0 {
                    count = 0
                } else {
                    count += 1
                }
                dp[r][c] = min(dp[r][c], count)
            }

            for r in stride(from: n-1, to: 0, by: -1) {
                if grid[r][c] == 0 {
                    count = 0
                } else {
                    count += 1
                }
                dp[r][c] = min(dp[r][c], count)
                ans = max(dp[r][c], ans)
            }
        }

        return ans
    }
}
