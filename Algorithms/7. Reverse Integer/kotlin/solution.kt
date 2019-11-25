class Solution {
    fun reverse(x: Int): Int {
        var original = x
        var reversed = 0

        while (original != 0) {
            val digit = original % 10
            var newReversed = reversed * 10 + digit

            if ((newReversed - digit) / 10 != reversed) return 0
            reversed = newReversed
            original /= 10
        }

        return reversed
    }
}