class Solution {
    fun detectCapitalUse(word: String): Boolean {
        var n = word.length
        if (n == 1) return true

        if (word[0].isUpperCase() && word[1].isUpperCase()) {
            for (i in 2 until n) {
                if (!word[i].isUpperCase()) return false
            }
        } else {
            for (i in 1 until n) {
                if (word[i].isUpperCase()) return false
            }
        }

        return true
    }
}
