class Solution {
    func sortArrayByParity(_ nums: [Int]) -> [Int] {
        return nums.sorted {
            $0 % 2 < $1 % 2
        }
    }
}