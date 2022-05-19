class Solution {
    fun replaceElements(arr: IntArray): IntArray {
        var mx: Int = -1
        for (i in arr.size - 1 downTo 0) {
            val tmp = arr[i]
            arr[i] = mx
            mx = maxOf(mx, tmp)
        }
        return arr
    }
}
