class Solution {
    func romanToInt(_ s: String) -> Int {
        var result = 0
        var lastChar: Character = "_"
        for c in s {
            switch c {
                case "M":
                result += 1000
                if lastChar == "C" {
                    result -= 200
                }
                case "D":
                result += 500
                if lastChar == "C" {
                    result -= 200
                }
                case "C":
                result += 100
                if lastChar == "X" {
                    result -= 20
                }
                case "L":
                result += 50
                if lastChar == "X" {
                    result -= 20
                }
                case "X":
                result += 10
                if lastChar == "I" {
                    result -= 2
                }
                case "V":
                result += 5
                if lastChar == "I" {
                    result -= 2
                }
                case "I":
                result += 1
                default:
                break
            }
            lastChar = c
        }
        return result
    }

}
