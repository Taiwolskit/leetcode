class Solution {
    func generateParenthesis(_ n: Int) -> [String] {
        var optionsArray = [String]()
        buildOptions(&optionsArray, soFar: "", open: n, close: n)
        return optionsArray
    }
    
    func buildOptions(_ optionsArray: inout [String], soFar: String, open: Int, close: Int) {
        if close < open {
            return
        }
        if open <= 0 && close <= 0 {
            optionsArray.append(soFar)
            return
        }
        if open > 0 && close >= 1 {
            buildOptions(&optionsArray, soFar: soFar + "(", open: open - 1, close: close)
        }
        if close > 0 {
            buildOptions(&optionsArray, soFar: soFar + ")", open: open, close: close - 1)
        }
    }
}