class Solution {
    func heightChecker(_ heights: [Int]) -> Int {
        let sortedHeights: [Int] = heights.sorted()
        var count: Int = 0
        for i: Int in 0..<heights.count {
            if heights[i] != sortedHeights[i] {
                count += 1
            }
        }
        return count
    }
}
