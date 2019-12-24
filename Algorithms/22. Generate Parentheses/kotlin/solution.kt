class Solution {
	fun generateParenthesis(n: Int): List<String> {
        val result = ArrayList<String>()
        backtrack(result, "", n, n)
        return result
    }

    private fun backtrack(result: ArrayList<String>, S: String, left: Int, right: Int) {
        if (left == 0 && right == 0) {
            result.add(S)
        }

        if (left > right) return 
        if (left > 0) backtrack(result, S + "(", left - 1, right)
        if (right > 0) backtrack(result, S + ")", left, right - 1)
    }
}