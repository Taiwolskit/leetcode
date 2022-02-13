class Solution {
    fun subsets(nums: IntArray): List<List<Int>> {
        val output = ArrayList<ArrayList<Int>>()
        backtrack(nums, 0, ArrayList<Int>(), output)
        return output
    }

    private fun backtrack(
        nums: IntArray,
        first: Int,
        current: ArrayList<Int>,
        result: ArrayList<ArrayList<Int>>
    ) {
        result.add(ArrayList(current))
        for (i in first until nums.size) {
            current.add(nums[i])
            backtrack(nums, i + 1, current, result)
            current.remove(current[current.size - 1])
        }
    }
}
