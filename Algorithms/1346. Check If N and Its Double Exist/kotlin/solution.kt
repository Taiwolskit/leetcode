class Solution {
    fun checkIfExist(arr: IntArray): Boolean {
        val seen = hashSetOf<Int>()
        arr.forEach { num ->
            if (seen.contains(num * 2)) return true
            if (num % 2 == 0 && seen.contains(num / 2)) return true
            seen.add(num)
        }
        return false
    }
}
