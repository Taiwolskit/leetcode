class Solution {
    fun myAtoi(str: String): Int {
        if (str.length == 0) {
            return 0
        }

        var result = 0
        var plus = 1
        var hasNum = false
        var hasSign = false
        var startParse = false

        for (i in str.indices) {  
            if (str[i] != ' ' && !startParse) {
                startParse = true
            }

            if (!startParse) {
                continue
            }

            if (str[i] == '+' && !hasNum) {
                if (hasSign) {
                    break
                }
                hasSign = true
                plus = 1
                continue
            }

            if (str[i] == '-' && !hasNum) {
                if (hasSign) {
                    break
                }
                hasSign = true
                plus = -1
                continue
            }

            if (str[i] in '0'..'9') {
                hasNum = true

                val digit = str[i] - '0'                
                if (result > Int.MAX_VALUE/10 || 
                    (Int.MAX_VALUE/10 == result && Int.MAX_VALUE %10 < digit)) {
                    return if (plus == 1) Int.MAX_VALUE else Int.MIN_VALUE
                }

                result = result * 10 + digit
            } else {
                break
            }
        }

        result *= plus
        return result
    }
}