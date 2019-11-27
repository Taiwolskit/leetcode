class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        if x < 0 || (x % 10 == 0 && x != 0) {
            return false
        }
        
        var value: Int = x
        var reverse: Int = 0
        
        while value > 0 {
            reverse =  reverse * 10 + value % 10
            value = value / 10
        }

        return reverse == x
    }
}