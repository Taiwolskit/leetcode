class Solution {
    fun duplicateZeros(arr: IntArray): Unit {
        var possibleDups: Int = 0
        var length_: Int = arr.size - 1
        for (i in 0..length_) {
            if (i > length_ - possibleDups) {
                break
            }

            if (arr[i] == 0) {
                if (i == length_ - possibleDups) {
                    arr[length_] = 0
                    length_--
                    break
                }
                possibleDups++
            }
        }

        val last = length_ - possibleDups
        for (i in last downTo 0) {
            arr[i + possibleDups] = arr[i]
            if (arr[i] == 0) {
                possibleDups--
                arr[i + possibleDups] = arr[i]
            }
        }
    }
}
