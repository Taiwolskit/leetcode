class Solution {
    fun lengthOfLongestSubstring(s: String): Int {
        val dict = IntArray(127) { -1 }
        var sofar = 0
        var last = 0

        for ((i, c) in s.withIndex()) {
            val idx = c.toInt()
            if (dict[idx] >= last) {
                sofar = maxOf(sofar, i - last)
                last = dict[idx] + 1
            } else {
                sofar = maxOf(sofar, i - last + 1)
            }
            dict[idx] = i
            if (sofar == 127) break
        }

        return sofar
    }
}