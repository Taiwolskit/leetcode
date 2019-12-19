class Solution {
    func isValid(_ s: String) -> Bool {
        var stack: [Character] = []
        for char in s {
            if char == "(" || char == "[" || char == "{" {
                stack.append(char)
            } else if let lastStack = stack.last {
                if lastStack == "(", char == ")" {
                    _ = stack.popLast()
                } else if lastStack == "[", char == "]" {
                    _ = stack.popLast()
                } else if lastStack == "{", char == "}" {
                    _ = stack.popLast()
                } else {
                    return false
                }
            } else {
                return false
            }
        }

        return stack.isEmpty
    }
}