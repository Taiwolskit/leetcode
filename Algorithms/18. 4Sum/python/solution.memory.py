class Solution:
    def fourSum(self, nums: 'list[int]', target: 'int') -> 'list[list[int]]':
        ans = []
        if not nums or len(nums) < 4:
            return ans
        nums.sort()
        for i in range(len(nums)-3):
            if i == 0 or nums[i] != nums[i-1]:

                for j in range(i+1, len(nums)-2):
                    if j == i+1 or nums[j] != nums[j-1]:
                        left = j + 1
                        right = len(nums)-1
                        new_target = target - nums[i] - nums[j]

                        while left < right:
                            if nums[left] + nums[right] == new_target:
                                ans.append(
                                    [nums[i], nums[j], nums[left], nums[right]])
                                while left < right and nums[left] == nums[left+1]:
                                    left += 1
                                while left < right and nums[right] == nums[right-1]:
                                    right -= 1
                                left += 1
                                right -= 1
                            elif nums[left] + nums[right] < new_target:
                                left += 1
                            elif nums[left] + nums[right] > new_target:
                                right -= 1
        return ans
