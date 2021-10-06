class Solution {
    func findDuplicates(_ nums: [Int]) -> [Int] {
        var frequencyArr = Array(repeating: 0, count: nums.count)
        var result = [Int]()
        for num in nums {
            frequencyArr[num - 1] = frequencyArr[num - 1] + 1
            if frequencyArr[num - 1] == 2 {
                result.append(num)
            }
        }
        return result
    }
}
