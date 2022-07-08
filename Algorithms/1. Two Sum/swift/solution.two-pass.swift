class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var hashmap: [Int: Int] = [:]

        for (i, num) in nums.enumerated() {
            hashmap[num] = i
        }
        for (i, num) in nums.enumerated() {
            let complement: Int = target - num
            if hashmap.keys.contains(complement) && i != hashmap[complement] {
                return [i, hashmap[complement]!]
            }
        }

        return []
    }
}
