class Solution {
    fun lengthOfLongestSubstring(s: String): Int {
        val dict = IntArray(127) { -1 }
        var sofar = 0
        var last = 0

        for ((index, value) in s.withIndex()) {
            val idx = value.toInt()
						val diff = index - last

            if (dict[idx] >= last) {
                sofar = maxOf(sofar, diff)
                last = dict[idx] + 1
            } else {
                sofar = maxOf(sofar, diff + 1)
            }
            dict[idx] = index
            if (sofar == 127) break
        }

        return sofar
    }
}