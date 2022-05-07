class Solution {
    fun reverseWords(s: String): String {
        var result = ""
        var word = ""

        for (c in s) {
            if (c == ' ') {
                result = result + word + ' '
                word = ""
            } else {
                word = c + word
            }
        }

        result += word
        return result
    }
}
