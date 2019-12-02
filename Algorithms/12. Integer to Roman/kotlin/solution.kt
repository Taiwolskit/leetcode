class Solution {
    fun intToRoman(num: Int): String {
        val M = arrayOf("", "M", "MM", "MMM")
        val C = arrayOf("", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM")
        val X = arrayOf("", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC")
        val I = arrayOf("", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX")
        
        return M[num/1000] + C[num%1000 / 100] + X[num%100 / 10] + I[num%10]
    }
}