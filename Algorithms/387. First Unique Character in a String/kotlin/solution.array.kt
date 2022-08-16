class Solution {
    fun firstUniqChar(s: String): Int {
        val map = IntArray(26)
        for (i in s) {
            map[i - 'a']++
        }
        s.forEachIndexed { index, char ->
            if (map[char - 'a'] == 1) {
                return index
            }
        }

        return -1
    }
}
