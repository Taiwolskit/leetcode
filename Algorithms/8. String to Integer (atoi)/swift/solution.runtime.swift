class Solution {
    func myAtoi(_ str: String) -> Int {
        var result: Int64 = 0
        var i = 0
        let chars = Array(str)
        while i < chars.count && chars[i] == " " {
            i += 1
        }

        var minusSign = false
        if i < chars.count && chars[i] == "-" {
            i += 1
            minusSign = true
        } else if i < chars.count && chars[i] == "+" {
            i += 1
        }

        while i < chars.count && chars[i].isNumber {
            result = result * 10 + Int64(chars[i].wholeNumberValue!)
            if result > Int32.max {
                break
            }
            i += 1
        }

        if minusSign {
            if -result < Int32.min {
                return Int(Int32.min)
            } else {
                return Int(-result)
            }
        } else {
            if result > Int32.max {
                return Int(Int32.max)
            } else {
                return Int(result)
            }
        }
    }
}