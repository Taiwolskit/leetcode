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


# class Solution:
#     def isPalindrome(self, x: int) -> bool:
#         reverse = 0
#         original = x
#         temp = original
#         while original > 0:
#             new = original % 10
#             reverse = (reverse*10)+new
#             original = original//10
#         if temp == reverse:
#             return True
#         else:
#             return False
