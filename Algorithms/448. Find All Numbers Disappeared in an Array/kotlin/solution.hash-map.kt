class Solution {
    fun findDisappearedNumbers(nums: IntArray): List<Int> {
        var hashTable = HashMap<Int, Int>()
        for (num in nums) {
            hashTable[num] = 1
        }

        var result = ArrayList<Int>()
        for (i in 1..nums.size) {
            if (!hashTable.containsKey(i)) {
                result.add(i)
            }
        }
        return result
    }
}
