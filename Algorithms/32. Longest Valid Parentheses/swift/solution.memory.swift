class Solution {
    func longestValidParentheses(_ s: String) -> Int {
        var maxLength = 0, left = 0, right = 0

        for value in s {
            if value == "(" {
                left += 1
            } else {
                right += 1
            }

            if left == right {
                maxLength = max(maxLength, right * 2)
            } else if right > left {
                left = 0
                right = 0
            }
        }

        left = 0
        right = 0
        for value in s.reversed() {
            if value == "(" {
                left += 1
            } else {
                right += 1
            }

            if left == right {
                maxLength = max(maxLength, left * 2)
            } else if left > right {
                left = 0
                right = 0
            }
        }

       return maxLength
    }
}
