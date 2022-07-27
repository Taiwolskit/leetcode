class Solution {
    fun numberOfSteps(num: Int): Int {
        if (num == 0) {
            return 0
        }

        var steps: Int = 0
        var powerOfTwo: Int = 1
        while (powerOfTwo <= num) {
            if (num and powerOfTwo != 0) {
                steps += 2
            } else {
                steps += 1
            }
            powerOfTwo *= 2
        }
        return steps - 1
    }
}
