class Solution {
    fun reverseOnlyLetters(s: String): String {
        val sarr = s.toCharArray()
        val m = s.length
        val st = ArrayDeque<Char>()
        val queue = ArrayDeque<Int>()

        for (i in 0 until m) {
            val ch = sarr[i]
            if (ch.isLetter()) {
                st.push(ch)
            } else {
                queue.offer(i)
            }
        }

        var idx = 0
        val sb = StringBuilder()

        while (idx < m) {
            if (!queue.isEmpty() && queue.peek() == idx) {
                sb.append(s[queue.poll()])
            } else {
                if (!st.isEmpty()) {
                    sb.append(st.pop())
                }
            }
            idx++
        }

        return sb.toString()
    }
}
