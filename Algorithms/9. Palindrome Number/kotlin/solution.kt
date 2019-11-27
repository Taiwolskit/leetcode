class Solution {
    fun isPalindrome(x: Int): Boolean {
        return if (x == 0) {
            true
        } else if (x < 0 || x % 10 == 0) {
            false
        } else {
            var temp = 0
            var input = x
        
            while (input > temp) {
                temp = temp * 10 + input % 10
                input /= 10
            }    

            input == temp || input == temp / 10
        }
    }
}