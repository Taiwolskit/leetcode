import kotlin.math.pow

class Solution {
    fun divide(dividend: Int, divisor: Int): Int {
     if (divisor == 0) return Int.MAX_VALUE

        var remain: Long = dividend.toLong()
        var div: Long = divisor.toLong()
        var sign = true

        if (dividend > 0 && divisor < 0) {
            div = 0L - divisor
            sign = false
        } else if (dividend < 0 && divisor > 0) {
            remain = 0 - remain
            sign = false
        } else if (dividend < 0 && divisor < 0) {
            remain = 0 - remain
            div = 0 - div
        }

        var quotient = recursiveDivide(remain, div)

        quotient = if (sign) quotient else 0 - quotient

        if (quotient > Int.MAX_VALUE) quotient = Int.MAX_VALUE.toLong()

        if (quotient < Int.MIN_VALUE) quotient = Int.MIN_VALUE.toLong()

        return quotient.toInt()
    }

    private fun recursiveDivide(dividend: Long, divisor: Long): Long {
        if (divisor == 1L) return dividend

        if (dividend < divisor) return 0L

        var div = divisor
        var quotient = 1L
        while (div + div <= dividend) {
            div += div
            quotient += quotient
        }
        return quotient + recursiveDivide(dividend - div, divisor)
    }
}
