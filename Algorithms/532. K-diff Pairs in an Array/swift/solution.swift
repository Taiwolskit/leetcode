class Solution {
    func findPairs(_ nums: [Int], _ k: Int) -> Int {
        var counter = [Int: Int]()
        for num in nums {
            counter[num, default: 0] += 1
        }

        var result = 0
        for (num, count) in counter {
            if (k == 0 && count > 1) || (k > 0 && counter[num - k] != nil) {
                result += 1
            }

        }

        return result
    }
}
