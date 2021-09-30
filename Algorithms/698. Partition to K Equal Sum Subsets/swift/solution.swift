class Solution {
    func canPartitionKSubsets(_ nums: [Int], _ k: Int) -> Bool {

        let sum = nums.reduce(0) {$0 + $1}
        guard sum % k == 0 else {return false}
        let subsetSum = sum / k
        var buckets = Array(repeating: 0, count: k)
        let nums = nums.sorted()

        return checkPartition(nums, nums.count - 1, &buckets, subsetSum)
    }

    private func checkPartition(_ array:[Int], _ index: Int, _ buckets: inout [Int], _ sum : Int) -> Bool {
        if index == -1 {return true}
        let item = array[index]
        for bCounter in 0..<buckets.count {
            if buckets[bCounter] + item <= sum {
                buckets[bCounter] += item
                if checkPartition(array, index - 1, &buckets, sum) == true {return true}
                buckets[bCounter] -= item
            }
            if buckets[bCounter] == 0 {break}
        }
        return false
    }
}
