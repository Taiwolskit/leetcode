class Solution {
    func reverse(_ x: Int) -> Int {
        var reverse = 0 
        var x = x

        while x != 0 {
            reverse = reverse * 10 + x % 10
            x = x / 10
            guard reverse >= Int32.min && reverse <= Int32.max else {
                return 0
            }     
        }
        return reverse        
    }
}