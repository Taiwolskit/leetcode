class Solution {
    fun minimumAbsDifference(arr: IntArray): List<List<Int>> {
        val minElement = arr.minOrNull()!!
        val maxElement = arr.maxOrNull()!!
        val shift = -minElement
        val line = BooleanArray(maxElement - minElement + 1)
        val answer = mutableListOf<List<Int>>()
        
        // 標記數字出現
        for (num in arr) {
            line[num + shift] = true
        }
        
        var minPairDiff = maxElement - minElement
        var prev = 0
        
        // 遍歷找出最小差值對
        for (curr in 1..maxElement + shift) {
            if (!line[curr]) continue
            
            when {
                curr - prev == minPairDiff -> 
                    answer.add(listOf(prev - shift, curr - shift))
                curr - prev < minPairDiff -> {
                    answer.clear()
                    minPairDiff = curr - prev
                    answer.add(listOf(prev - shift, curr - shift))
                }
            }
            prev = curr
        }
        
        return answer
    }
}
