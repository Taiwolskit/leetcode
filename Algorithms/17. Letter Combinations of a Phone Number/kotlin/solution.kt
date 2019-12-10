class Solution {
    val phone = mapOf(
        '2' to charArrayOf('a', 'b', 'c'),
        '3' to charArrayOf('d', 'e', 'f'),
        '4' to charArrayOf('g', 'h', 'i'),
        '5' to charArrayOf('j', 'k', 'l'),
        '6' to charArrayOf('m', 'n', 'o'),
        '7' to charArrayOf('p', 'q', 'r', 's'),
        '8' to charArrayOf('t', 'u', 'v'),
        '9' to charArrayOf('w', 'x', 'y', 'z')
    )

    fun letterCombinations(digits: String): List<String> {
        var result = mutableListOf<String>()
        digits.takeIf {
            it.length > 0
        }?.let {
            helper(result, StringBuilder(digits.length), digits, 0)
        }
        return result
    }
    
    fun helper(all: MutableList<String>, ans: StringBuilder, digits: String, index: Int) {
        if (index == digits.length) {
            all.add(ans.toString())
            return
        }
        for (c in phone[digits[index]]!!) {
            ans.append(c)
            helper(all, ans, digits, index + 1)
            ans.deleteCharAt(ans.length - 1)
        }
    }
}