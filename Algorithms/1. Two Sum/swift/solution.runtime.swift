class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var hash: [Int : Int] = [:]

        for (i, num) in nums.enumerated() {
            if let index = hash[target - num] {
                return [index, i]
            }

            hash[num] = i
        }

        return []
    }
}
