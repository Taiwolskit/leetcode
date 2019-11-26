class Solution {
    func myAtoi(_ str: String) -> Int {
        var retInt = 0
        var integerChars = [Character]()
        var positive = true
        var signed = false
        for char in str {
            if integerChars.isEmpty && Int(String(char)) == nil && char != "-" && char != "+" && char != " " {
                break
            }

            if signed && (char == "+" || char == "-" || char == " ") {
                break
            }

            if char == "+" || char == "-" {
                signed = true
            }

            if integerChars.isEmpty && char != " " {
                if char == "-" {
                    positive = false
                } else if char != "+" {
                    integerChars.append(char)
                }
            } else if Int(String(char)) != nil {
                integerChars.append(char)
            } else if !integerChars.isEmpty {
                break
            }
        }

        if !integerChars.isEmpty {
            if let retInt = Int32(String(integerChars)) {
                return Int(retInt * (positive ? 1: -1))
            } else {
                if positive {
                    return Int(Int32.max)
                } else {
                    return Int(Int32.min)
                }
            }
        }
        return retInt
    }
}