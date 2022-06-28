class Solution:
    def findMaxConsecutiveOnes(self, nums: list[int]) -> int:
        prev, curr, maxlen = -1, 0, 0
        for num in nums:
            if num == 0:
                prev, curr = curr, 0
            else:
                curr += 1

            maxlen = max(maxlen, prev + 1 + curr)

        return maxlen
