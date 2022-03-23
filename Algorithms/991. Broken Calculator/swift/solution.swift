class Solution {
    func brokenCalc(_ startValue: Int, _ target: Int) -> Int {
        var ans = 0
        var diff = target
        while diff > startValue {
            ans += 1
            if diff % 2 == 1 {
                diff += 1
            } else {
                diff /= 2
            }
        }

        return ans + startValue - diff
    }
}
