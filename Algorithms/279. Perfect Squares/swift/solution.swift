class Solution {
    func numSquares(_ n: Int) -> Int {
        var root = Int(sqrt(Double(n)))
        let sameN = n
        var n = n

        if root * root == n {
            return 1
        }

        while n % 4 == 0 {
            n >>= 2 // делим на 4, пока делится
        }

        if n % 8 == 7 {
            return 4
        }

        var mult = 1
        while mult * mult <= n {
            var j = n - mult*mult
            let root = Int(sqrt(Double(j)))
            if root*root == j {
                return 2
            }
            mult += 1
        }

        return 3
    }
}
