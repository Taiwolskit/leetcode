class Solution {
    fun partitionLabels(s: String): List<Int> {
        val ans = mutableListOf<Int>()

        val last = IntArray(26)
        for ((i, c) in s.withIndex()) {
            last[c - 'a'] = i
        }

        var anchor = 0
        var j = last[s[0] - 'a']
        for (i in s.indices) {
            j = maxOf(j, last[s[i] - 'a'])

            if (i == j) {
                ans.add(j - anchor + 1)
                anchor = j + 1
            }
        }

        return ans
    }
}
