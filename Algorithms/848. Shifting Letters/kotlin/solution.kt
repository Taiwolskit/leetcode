class Solution {
    fun shiftingLetters(string: String, shifts: IntArray): String {
        val sums = LongArray(shifts.size)
        sums[sums.lastIndex] = shifts.last().toLong()
        for (i in shifts.lastIndex - 1 downTo 0) {
            sums[i] = shifts[i] + sums[i + 1]
        }

        val array = CharArray(string.length)
        for (i in array.indices) {
            array[i] = 'a' + ((string[i] - 'a' + sums[i]) % 26).toInt()
        }

        return array.joinToString("")
    }
}
