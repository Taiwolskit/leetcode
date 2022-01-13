class Solution {
    func findMinArrowShots(_ points: [[Int]]) -> Int {
        if points.isEmpty { return 0 }
        let points = points.sorted { $0[1] < $1[1] }

        var arrows = 1
        var firstEnd = points[0][1]
        for i in 1..<points.count {
            if points[i][0] > firstEnd {
                arrows += 1
                firstEnd = points[i][1]
            }
        }
        return arrows
    }
}
