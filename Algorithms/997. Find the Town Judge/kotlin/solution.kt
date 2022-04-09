class Solution {
    fun findJudge(n: Int, trust: Array<IntArray>): Int {
        val trustScores = IntArray(n)
        for (value in trust) {
            trustScores[value[0] - 1]--
            trustScores[value[1] - 1]++
        }
        trustScores.toList()
        return if (trustScores.contains(n - 1)) trustScores.indexOf(n - 1) + 1 else -1
    }
}
