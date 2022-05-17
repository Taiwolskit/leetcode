class Solution {
    fun validMountainArray(arr: IntArray): Boolean {
        val N = arr.size
        if (N < 3) return false
        var i = 0
        while (i < N - 1 && arr[i] < arr[i + 1]) {
            i++
        }
        if (i == 0 || i == N - 1) return false
        while (i < N - 1 && arr[i] > arr[i + 1]) {
            i++
        }
        return i == N - 1
    }
}
