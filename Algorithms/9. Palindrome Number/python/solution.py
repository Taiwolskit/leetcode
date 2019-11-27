class Solution:
    def isPalindrome(self, x: int) -> bool:
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        elif x < 10:
            return True
        else:
            return str(x)[::-1] == str(x)
