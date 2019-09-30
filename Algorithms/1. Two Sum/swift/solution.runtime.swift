class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var hash: [Int : Int] = [:]

        for (i, j) in nums.enumerated() {
            if let index = hash[target - j] {
                return [index, i]
            }

            hash[j] = i
        }

        return [];
    }
}
