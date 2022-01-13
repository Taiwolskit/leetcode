class Solution {
    fun findMinArrowShots(points: Array<IntArray>): Int {
        if (points.isEmpty()) return 0

        points.sortBy({ it[1] })

        var arrows = 1
        var firstEnd = points[0][1]
        for (i in 1..points.size - 1) {
            if (points[i][0] > firstEnd) {
                arrows++
                firstEnd = points[i][1]
            }
        }
        return arrows
    }
}
