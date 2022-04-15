class Solution {
    fun reverse(x: Int): Int {
        var result = 0L
        var tmp = x
        while (tmp != 0) {
            result = result * 10 + tmp % 10
            tmp /= 10
        }
        return if (result > Integer.MAX_VALUE || result < Integer.MIN_VALUE) 0 else result.toInt()
    }
}
