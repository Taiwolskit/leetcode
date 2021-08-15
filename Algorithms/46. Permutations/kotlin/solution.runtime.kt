class Solution {
    fun permute(nums: IntArray): List<List<Int>> {
        val res = ArrayList<ArrayList<Int>>()
        val track = ArrayList<Int>()
        backtrack(track, nums, res)
        return res
    }

    private fun backtrack(path: ArrayList<Int>, nums: IntArray, ans: ArrayList<ArrayList<Int>>) {
        if (path.size == nums.size) {
            ans.add(ArrayList(path))
        }
        for (num in nums) {
            if (path.contains(num)) continue
            path.add(num)
            backtrack(path, nums, ans)
            path.removeAt(path.size - 1)
        }
    }
}
