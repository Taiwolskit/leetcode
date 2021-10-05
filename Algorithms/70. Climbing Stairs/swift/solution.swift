class Solution {
    func climbStairs(_ n: Int) -> Int {
        if n < 3 { return n }

        var cur = 2
        var pre = 1
        for i in 3...n {
            let temp = pre
            pre = cur
            cur = cur + temp
        }
        return cur
    }
}
