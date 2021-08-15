class Solution {
    fun dfs(numList: ArrayList<Int>, retList: ArrayList<List<Int>>, itemList: ArrayList<Int>, n: Int) {
        if (itemList.size == n) {
            retList.add(ArrayList(itemList))
            return
        }
        for (i in 0 until numList.size) {
            val item: Int = numList.removeAt(i)
            itemList.add(item)
            dfs(numList, retList, itemList, n)
            itemList.remove(item)
            numList.add(i, item)
        }
    }

    fun permute(nums: IntArray): List<List<Int>> {
        val retList = ArrayList<List<Int>>()
        val numList = ArrayList<Int>()
        nums.forEach { numList.add(it) }
        dfs(numList, retList, ArrayList(), nums.size)
        return retList
    }
}
