class Solution {
    func twoSum(_ numbers: [Int], _ target: Int) -> [Int] {
        var low: Int = 0
        var high: Int = numbers.count - 1
        while low < high {
            let sum: Int = numbers[low] + numbers[high]
            if sum == target {
                return [low + 1, high + 1]
            }
            if sum < target {
                low += 1
            } else {
                high -= 1
            }
        }

        return [-1, -1]
    }
}