class Solution {
    func fourSum(_ nums: [Int], _ target: Int) -> [[Int]] {
        guard nums.count >= 4 else {
            return []
        }
        var res = Set<[Int]>()
        let sortedNums = nums.sorted()
        let numsCount = sortedNums.count
        for idx in 0..<sortedNums.count - 3 {
            let num = sortedNums[idx]
            if target <= 0 && num > 0 {
                break
            }
            if num + sortedNums[idx + 1] + sortedNums[idx + 2] + sortedNums[idx + 3] > target {
                break
            }
            if num + sortedNums[numsCount - 1] + sortedNums[numsCount - 2] + sortedNums[numsCount - 3] < target {
                continue
            }
            
            for later in (idx+1)..<(numsCount - 2) {
                let laterNum = sortedNums[later]
                if num + laterNum + sortedNums[later + 1] + sortedNums[later + 2] > target {
                    break
                }
                if num + laterNum + sortedNums[numsCount - 1] + sortedNums[numsCount - 2] < target {
                    continue
                }
                if later > idx + 1 && laterNum == sortedNums[later - 1] {
                    continue
                }
                
                var low = later + 1
                var high = numsCount - 1
                while low < high {
                    let lowNum = sortedNums[low]
                    let highNum = sortedNums[high]
                    let sum = num + laterNum + lowNum + highNum
                    if sum == target {
                        res.insert([num, laterNum, lowNum, highNum])
                        while low < high, lowNum == sortedNums[low]  {
                            low += 1
                        }
                        while low < high, highNum == sortedNums[high]  {
                            high -= 1
                        }
                    } else if sum < target {
                        low += 1
                    } else {
                        high -= 1
                    }
                }
            }
        }
        return Array(res)
    }
}