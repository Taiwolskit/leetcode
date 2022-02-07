class Solution {
    fun findTheDifference(s: String, t: String): Char {
        val firstSum = s.toCharArray().sumBy { it.toInt() }
        val secondSum = t.toCharArray().sumBy { it.toInt() }
        return (secondSum - firstSum).toChar()
    }
}
