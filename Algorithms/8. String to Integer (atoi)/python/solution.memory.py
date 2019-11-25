class Solution:
    def myAtoi(self, s) -> int:
        int_max = (2**31) - 1
        int_min = -(2**31)
        nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        s = s.strip()
        if not s:
            return 0
        if s[0] != '-' and s[0] != '+' and s[0] not in nums:
            return 0
        negative = '-' == s[0]

        length = 1
        answer = 0
        count = 0
        while(length < len(s) and s[length] in nums):
            length += 1

        for i in range(length - 1, -1, -1):
            if s[i] != '-' and s[i] != '+':
                answer += 10**count * int(s[i])
                count += 1

        if negative and -1 * answer >= int_min:
            return -1 * answer
        elif negative:
            return int_min
        elif not negative and answer > int_max:
            return int_max
        else:
            return answer
