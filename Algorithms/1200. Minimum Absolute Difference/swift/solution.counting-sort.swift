class Solution {
    func minimumAbsDifference(_ arr: [Int]) -> [[Int]] {
        let minElement = arr.min()!
        let maxElement = arr.max()!
        let shift = -minElement
        var line = Array(repeating: false, count: maxElement - minElement + 1)
        var answer: [[Int]] = []
        
        // 標記數字出現
        for num in arr {
            line[num + shift] = true
        }
        
        var minPairDiff = maxElement - minElement
        var prev = 0
        
        // 遍歷找出最小差值對
        for curr in 1...maxElement + shift {
            guard line[curr] else { continue }
            
            if curr - prev == minPairDiff {
                answer.append([prev - shift, curr - shift])
            } else if curr - prev < minPairDiff {
                answer = [[prev - shift, curr - shift]]
                minPairDiff = curr - prev
            }
            prev = curr
        }
        
        return answer
    }
}
