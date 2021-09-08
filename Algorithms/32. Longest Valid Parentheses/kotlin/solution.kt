class Solution {
    fun longestValidParentheses(s: String): Int {
        var max = 0
        var left = 0
        var right = 0
        for (value in s) {
            if (value == '(') {
                left++
            } else {
                right++
            }

            if (left == right) {
                max = Math.max(maxlength, 2 * right)
            } else if (right > left) {
                right = 0
                left = 0
            }
        }

        right = 0
        left = 0
        for (i in s.length - 1 downTo 0) {
            if (s[i] == '(') {
                left++
            } else {
                right++
            }

            if (left == right) {
                max = Math.max(maxlength, 2 * right)
            } else if (left > right) {
                right = 0
                left = 0
            }
        }

        return max
    }
}
