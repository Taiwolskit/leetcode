class Solution {
    func subsets(_ nums: [Int]) -> [[Int]] {
        return nums.reduce([[]]) { result, num in
              result + result.map{$0 + [num]}
        }
    }
}
