class Solution:
    def reverse(self, x: int) -> int:
        """
        :type x: int
        :rtype: int
        """
        if x > 0:
            result = int(str(x)[::-1])
        else:
            result = -1 * int(str(-x)[::-1])

        if result > (2**31 - 1) or result < -(2**31):
            result = 0
        return result
