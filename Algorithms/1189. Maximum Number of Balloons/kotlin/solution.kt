class Solution {
    fun maxNumberOfBalloons(text: String): Int {
        val map = hashMapOf<Char, Int>()
        for (ch in text) {
            map[ch] = (map[ch] ?: 0) + 1
        }

        var cnt = if (map.contains('b')) map['b']!! else 0
        for (ch in "balon") {
            if (ch == 'l' || ch == 'o') {
                cnt = Math.min(cnt, map[ch]!! / 2)
            } else {
                cnt = Math.min(cnt, map[ch]!!)
            }
        }
        return cnt
    }
}
