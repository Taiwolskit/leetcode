class Solution {
    fun brokenCalc(startValue: Int, target: Int): Int {
        var ans = 0
        var diff = target
        while (diff > startValue) {
            ans++
            if (diff % 2 == 1) {
                diff++
            } else {
                diff /= 2
            }
        }
        return ans + startValue - diff
    }
}
