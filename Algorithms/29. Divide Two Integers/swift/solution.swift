class Solution {
    func divide(_ dividend: Int, _ divisor: Int) -> Int {
        let isPositive = (dividend < 0) == (divisor < 0)
        var dividend = abs(dividend)
        let divisor = abs(divisor)
        var count = 0

        while dividend >= divisor {
            var shift = 1
            while dividend >= (divisor << shift) {
                shift += 1
            }
            shift -= 1
            dividend -= divisor << shift
            count += 1 << shift
        }

        if !isPositive {
            count = -count
        }

        return min(Int(Int32.max), count)
    }
}
