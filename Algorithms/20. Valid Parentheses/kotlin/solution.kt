import java.util.ArrayDeque

class Solution {
    fun isValid(s: String): Boolean {
        val stack = ArrayDeque<Char>()
        for (char in s) {
            if (char == '(' || char == '{' || char == '[') {
                stack.push(char)
            } else if ((char == ')' && if (stack.contains('(')) stack.pop() != '(' else true)
                || (char == '}' && if (stack.contains('{')) stack.pop() != '{' else true)
                || (char == ']' && if (stack.contains('[')) stack.pop() != '[' else true)
            ) {
                return false
            }
        }
        return stack.isEmpty()
    }
}