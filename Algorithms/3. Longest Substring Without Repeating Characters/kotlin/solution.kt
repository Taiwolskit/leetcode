class Solution {
    fun lengthOfLongestSubstring(s: String): Int {
        var ans = 0
        val mp = mutableMapOf<Char, Int>()

        var i = 0
        for ((j, char) in s.withIndex()) {
            if (mp.keys.contains(char)) {
                i = Math.max(i, mp[char]!! + 1)
            }

            ans = Math.max(ans, j - i + 1)
            mp[char] = j
        }
        return ans
    }
}
