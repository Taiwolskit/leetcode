class Solution {
    func findJudge(_ n: Int, _ trust: [[Int]]) -> Int {
        guard !(trust.isEmpty) else { return n == 1 ? 1 : -1 }

        var trustScores: [Int] = Array(repeating: 0, count: n + 1)
        for pair in trust {
            trustScores[pair[0]] -= 1
            trustScores[pair[1]] += 1
        }

        if let judge = trustScores.firstIndex(of: n-1) {
            return judge
        }
        return -1
    }
}
