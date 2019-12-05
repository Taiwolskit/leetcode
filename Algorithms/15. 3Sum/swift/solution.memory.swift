class Solution {
    func threeSum(_ nums: [Int]) -> [[Int]] {
        guard nums.count > 2 else { return [[Int]]() }
        var ans = [[Int]]()
        let nums = nums.sorted()
        var hashMap = [Int: Int]()

        for i in 2..<nums.endIndex {
            hashMap[-nums[i]] = i
        }

        var i = 0
        while i < nums.endIndex - 2 {
            let a = nums[i]
            var j = i + 1
            while j < nums.endIndex - 1 {
                let b = nums[j]
                if let k = hashMap[a+b], k > j {
                    ans.append([a, b, -(a+b)])
                }
                while j < nums.endIndex - 1, nums[j] == nums[j+1] {
                    j += 1
                }
                j += 1
            }
            while i < nums.endIndex - 1, nums[i] == nums[i+1] {
                i += 1
            }
            i += 1
        }
        return ans
    }
}
