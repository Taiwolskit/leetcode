class Solution {
    fun getSmallestString(n: Int, k: Int): String {
        val result = CharArray(n) { 'a' }
        var remaining = k - n

        for (i in result.lastIndex downTo 0) {
            val change = if (remaining > 25) 25 else remaining

            result[i] = result[i] + change
            remaining -= change

            if (remaining == 0) break
        }

        return String(result)
    }
}
