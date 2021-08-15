class Solution {
    fun reverseString(s: CharArray): Unit {
        val n = s.size

        for (i in 0..(n / 2 - 1)) {
            val temp = s[i]
            s[i] = s[n - 1 - i]
            s[n - 1 - i] = temp
        }
    }
}
