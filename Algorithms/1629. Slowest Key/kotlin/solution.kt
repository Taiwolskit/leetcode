class Solution {
    fun slowestKey(releaseTimes: IntArray, keysPressed: String): Char {
        var result = keysPressed[0]
        var maxDiff = releaseTimes[0]
        var index = 1

        while (index < keysPressed.length) {
            val currentSymbol = keysPressed[index]
            val diff = releaseTimes[index] - releaseTimes[index - 1]

            if (diff > maxDiff || (diff == maxDiff && currentSymbol > result)) {
                maxDiff = diff
                result = currentSymbol
            }

            index++
        }

        return result
    }
}
