class Solution:
    def calPoints(self, ops: list[str]) -> int:
        stack = []
        for op in ops:
            match(op):
                case('+'):
                    stack.append(stack[-1] + stack[-2])
                case('C'):
                    stack.pop()
                case('D'):
                    stack.append(2 * stack[-1])
                case _:
                    stack.append(int(op))

        return sum(stack)
