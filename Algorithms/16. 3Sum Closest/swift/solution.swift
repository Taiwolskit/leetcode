class Solution {
    func threeSumClosest(_ nums: [Int], _ target: Int) -> Int {
        guard nums.count > 2 else { fatalError() }
        let sorted = nums.sorted()
        var result = 0, minValue = Int.max

        for i in 0..<sorted.count - 2 {
            var j = i + 1
            var k = sorted.count - 1

            while j < k {
                let currentValue = sorted[i] + sorted[j] + sorted[k]
                let difference = abs(target - currentValue)

                guard difference != 0 else { return currentValue }

                if difference < minValue {
                    minValue = difference
                    result = currentValue
                }

                if currentValue < target {
                    j += 1
                } else {
                    k -= 1
                }
            }
        }

        return result
    }
}