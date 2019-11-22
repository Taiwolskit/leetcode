class Solution {
    fun convert(s: String, numRows: Int): String {
        if (s.length <= numRows || numRows == 1) return s

        val sb = StringBuilder(s.length)

        for (j in 0 until numRows) {

            var i = j
            while (i<s.length) {
                sb.append(s[i])
                i += 2 * numRows - 2

                if (j > 0 && j < numRows - 1 && i - 2 * j > 0  && i - 2 * j < s.length) {
                    sb.append(s[i - 2 * j])
                }
            }
        }

        return sb.toString()
    }
}