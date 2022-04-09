class Solution {
    fun findAnagrams(s: String, p: String): List<Int> {
        val ns = s.length
        val np = p.length
        if (ns < np) return emptyList()

        val pCount = IntArray(26)
        val sCount = IntArray(26)
        for (ch in p) {
            pCount[ch - 'a']++
        }

        val output = mutableListOf<Int>()
        for (i in 0 until ns) {
            sCount[s[i] - 'a']++

            if (i >= np) {
                sCount[s[i - np] - 'a']--
            }

            if (sCount.contentEquals(pCount)) {
                output.add(i-np+1)
            }
        }

        return output
    }
}
