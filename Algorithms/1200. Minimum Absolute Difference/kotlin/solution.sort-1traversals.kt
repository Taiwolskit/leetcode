class Solution {
    fun minimumAbsDifference(arr: IntArray): List<List<Int>> {
        arr.sort()
        var minPairDiff = Int.MAX_VALUE
        val answer = mutableListOf<List<Int>>()
        
        for (i in 0 until arr.size - 1) {
            val currPairDiff = arr[i + 1] - arr[i]
            when {
                currPairDiff == minPairDiff -> answer.add(listOf(arr[i], arr[i + 1]))
                currPairDiff < minPairDiff -> {
                    answer.clear()
                    answer.add(listOf(arr[i], arr[i + 1]))
                    minPairDiff = currPairDiff
                }
            }
        }
        
        return answer
    }
}
