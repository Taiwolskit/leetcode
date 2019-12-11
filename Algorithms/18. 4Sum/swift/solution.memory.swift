class Solution {
    func fourSum(_ nums: [Int], _ target: Int) -> [[Int]] {
        var nums = nums.sorted()
        var res = [[Int]]()
        
        for i in  0 ..< nums.count {
            if i > 1 && nums[i-2] == nums[i] {
                continue
            }
            for j in 0 ..< i {
                if j > 0 && nums[j-1] == nums[j] {
                    continue
                }
                if (nums[i] == nums[i-1] && j + 1 != i) {
                    continue
                }
                var l = i + 1
                var r = nums.count - 1
                while (l < r) {
                    let v = nums[j] + nums[i] + nums[l] + nums[r]
                    if v == target {
                        res.append([nums[j], nums[i], nums[l], nums[r]])
                    }
                    if (v <= target) {
                        repeat {
                            l += 1
                        } while l < r && nums[l] == nums[l-1]
                    } else {
                        repeat {
                            r -= 1
                        } while l < r && nums[r] == nums[r+1]
                    }
                }
            }
        }
        return res
    }
}