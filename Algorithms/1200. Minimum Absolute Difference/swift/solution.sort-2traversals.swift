class Solution {
    func minimumAbsDifference(_ arr: [Int]) -> [[Int]] {
        // 排序原始陣列
        let sortedArr = arr.sorted()
        var answer: [[Int]] = []
        
        // 初始化最小差值
        var minPairDiff = Int.max
        
        // 第一次遍歷計算最小差值
        for i in 0..<sortedArr.count-1 {
            minPairDiff = min(minPairDiff, sortedArr[i+1] - sortedArr[i])
        }
        
        // 第二次遍歷找出所有符合最小差值的配對
        for i in 0..<sortedArr.count-1 {
            if sortedArr[i+1] - sortedArr[i] == minPairDiff {
                answer.append([sortedArr[i], sortedArr[i+1]])
            }
        }
        
        return answer
    }
}
