class Solution {
    fun numberOfSteps(num: Int): Int {
        val binary: String = Integer.toBinaryString(num)
        val ones: Int = binary.count { it == '1' }
        return ones + binary.length - 1
    }
}
