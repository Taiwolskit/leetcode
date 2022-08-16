class Solution {
    fun firstUniqChar(s: String): Int {
        val map = mutableMapOf<Char, Int>()
        for (ch in s) {
            map[ch] = map.getOrDefault(ch, 0) + 1
        }
        for (i in s.indices) {
            if (map[s[i]] == 1) {
                return i
            }
        }
        return -1
    }
}
