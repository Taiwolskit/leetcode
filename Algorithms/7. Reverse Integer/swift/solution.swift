class Solution {
    func reverse(_ x: Int) -> Int {
        var rev = 0
        var x = x

        while x != 0 {
            rev = rev * 10 + x % 10
            x = x / 10
            guard rev >= Int32.min && rev <= Int32.max else {
                return 0
            }
        }
        return rev
    }
}

// class Solution {
//     func reverse(_ x: Int) -> Int {
//         let negative = x < 0 ? -1 : 1
//         let result = Int(String(String(abs(x)).reversed())) ?? 0
//         if result > Int(pow(2.0, 31)) {
//             return 0
//         }
//         return result * negative
//     }
// }
