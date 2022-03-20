class Solution {
    fun minDominoRotations(tops: IntArray, bottoms: IntArray): Int {
        var rotations = check(tops, bottoms, tops[0])
        if (rotations != -1 || tops[0] == bottoms[0]) {
            return rotations

        }
        return check(tops, bottoms, bottoms[0])
    }

    private fun check(tops: IntArray, bottoms: IntArray, x: Int): Int {
        var rotationsA = 0
        var rotationsB = 0
        for (i in tops.indices) {
            if (tops[i] != x && bottoms[i] != x) return -1
            if (tops[i] != x) rotationsA++
            if (bottoms[i] != x) rotationsB++
        }
        return Math.min(rotationsA, rotationsB)
    }
}
