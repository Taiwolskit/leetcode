class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var hashmap: [Int: Int] = [:]

        for (i, num) in nums.enumerated() {
            if let complement: Int = hashmap[target - num] {
                return [i, complement]
            }

            hashmap[num] = i
        }

        return []
    }
}
