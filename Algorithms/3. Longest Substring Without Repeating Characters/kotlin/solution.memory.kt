class Solution {
    fun lengthOfLongestSubstring(s: String): Int {
        var doubleCount = 0
        val count = IntArray(128){0}
        var longest = 0
        var left = 0
        for (right in s.indices) {
            count[s[right].toInt()]++
            if (count[s[right].toInt()] == 2) ++doubleCount
            while(doubleCount > 0){
                count[s[left].toInt()]--
                if (count[s[left].toInt()] == 1) --doubleCount
                ++left
            }
            if (longest < right - left + 1) longest = right - left + 1
        }
        return longest
    }
}
