class Solution {
    fun minimumAbsDifference(arr: IntArray): List<List<Int>> {
        // 排序原始陣列
        arr.sort()
        val answer = mutableListOf<List<Int>>()
        
        // 初始化最小差值
        var minPairDiff = Int.MAX_VALUE
        
        // 第一次遍歷計算最小差值
        for (i in 0 until arr.size - 1) {
            minPairDiff = minOf(minPairDiff, arr[i + 1] - arr[i])
        }
        
        // 第二次遍歷找出所有符合最小差值的配對
        for (i in 0 until arr.size - 1) {
            if (arr[i + 1] - arr[i] == minPairDiff) {
                answer.add(listOf(arr[i], arr[i + 1]))
            }
        }
        
        return answer
    }
}
