class Solution {
    func longestValidParentheses(_ s: String) -> Int {
        var res = 0
        var stack = [Int]()
        let chars = Array(s)
        stack.append(-1)

        for i in 0 ..< chars.count {
            if chars[i] == "(" {
                stack.append(i)
            } else {
                if !stack.isEmpty {
                    _ = stack.removeLast()
                }

                if stack.isEmpty {
                    stack.append(i)
                } else {
                    res = max(res, i - stack[stack.count - 1])
                }
            }
        }

        return res
    }
}
