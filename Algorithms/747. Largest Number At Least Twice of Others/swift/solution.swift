class Solution {
    func dominantIndex(_ nums: [Int]) -> Int {
        guard nums.count > 1 else { return 0 }

        var largest = -1
        var secondLargest = -1
        var largestIndex = 0

        for (i, val) in nums.enumerated() {
            if val >= largest {
                secondLargest = largest
                largest = val
                largestIndex = i
            } else if val > secondLargest {
                secondLargest = val
            }
        }

        return largest >= 2 * secondLargest ? largestIndex : -1
    }
}
