class Solution {
    func generateParenthesis(_ n: Int) -> [String] {
        var result = [String]()

        func backtrack( _ S: String, _ left: Int, _ right: Int) {
            if S.count == 2 * n {
                result.append(S)
                return
            }

            if n > left {
                backtrack(S+"(", left+1, right)
            }

            if left > right {
                backtrack(S+")", left, right+1)
            }
        }

        backtrack("", 0, 0)
        return result
    }
}
