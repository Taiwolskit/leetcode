class Solution {
    fun validPalindrome(s: String): Boolean {
        var i = 0
        var j = s.length - 1
        while (i < j) {
            if (s[i] != s[j]) {
                return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
            }
            i++
            j--
        }
        return true
    }

    fun isPalindrome(s: String, i: Int, j: Int): Boolean {
        var i = i
        var j = j
        while (i < j) {
            if (s[i] != s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
}
