class Solution {
    fun maxTurbulenceSize(arr: IntArray): Int {
        var o = 1; var e = 1; var r = 1
        for (i in 0..arr.size-2) {
            o = if ((i % 2 != 0 && arr[i] > arr[i+1]) || (i % 2 == 0 && arr[i] < arr[i+1])) o + 1 else 1
            e = if ((i % 2 == 0 && arr[i] > arr[i+1]) || (i % 2 != 0 && arr[i] < arr[i+1])) e + 1 else 1
            r = maxOf(r, o, e)
        }
        return r
    }
}
