class Solution {
    fun getMaxLength(
            arr: List<String>,
            charsInstring: Array<Int>,
            uniqueLength: Int,
            i: Int,
            maxLengthTillNow: Int
    ): Int {
        if (i >= arr.size) return maxLengthTillNow
        var maxLength = 0
        if (charsInstring[i] != -1 && charsInstring[i] and uniqueLength == 0) {
            var includeLength =
                    getMaxLength(
                            arr,
                            charsInstring,
                            uniqueLength or charsInstring[i],
                            i + 1,
                            maxLengthTillNow + arr[i].length
                    )
            maxLength = includeLength
        }
        var excludeLength = getMaxLength(arr, charsInstring, uniqueLength, i + 1, maxLengthTillNow)
        maxLength = maxOf(maxLength, excludeLength)
        return maxLength
    }

    fun maxLength(arr: List<String>): Int {
        val charsInstring: Array<Int> = Array(arr.size) { 0 }
        arr.forEachIndexed { index, word ->
            var number = 0
            var unique = true
            word.forEach {
                if (number and (1 shl (it - 'a')) != 0) {
                    unique = false
                }
                number = number or (1 shl (it - 'a'))
            }

            if (unique == false) {
                charsInstring[index] = -1
            } else {
                charsInstring[index] = number
            }
        }
        return getMaxLength(arr, charsInstring, 0, 0, 0)
    }
}
