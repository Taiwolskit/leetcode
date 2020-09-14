class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        n = len(nums)
        i = 0
        for j in range(n):
            if val != nums[j]:
                nums[i] = nums[j]
                i += 1
        return i
