class Solution {
    func reverse(_ x: Int) -> Int {
        var x = x
        var reversedX = 0
        while x != 0 {
            reversedX = reversedX * 10 + x % 10
            x = x / 10
            if (reversedX < 0 && x != 0 && Int(Int32.min) / 10 > reversedX) { return 0 }
            if (reversedX > 0 && x != 0 && Int(Int32.max) / 10 < reversedX) { return 0 }
        }
        return reversedX
    }
}