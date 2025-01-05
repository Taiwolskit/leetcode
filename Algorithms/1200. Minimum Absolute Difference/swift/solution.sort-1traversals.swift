class Solution {
    func minimumAbsDifference(_ arr: [Int]) -> [[Int]] {
        let sortedArr = arr.sorted()
        var minPairDiff = Int.max
        var answer: [[Int]] = []
        
        for i in 0..<sortedArr.count - 1 {
            let currPairDiff = sortedArr[i + 1] - sortedArr[i]
            
            if currPairDiff == minPairDiff {
                answer.append([sortedArr[i], sortedArr[i + 1]])
            } else if currPairDiff < minPairDiff {
                answer = [[sortedArr[i], sortedArr[i + 1]]]
                minPairDiff = currPairDiff
            }
        }
        
        return answer
    }
}
