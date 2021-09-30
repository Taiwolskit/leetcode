class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        nums.sort(reverse=True)
        nums_sum = sum(nums)
        if nums_sum % k != 0:
            return False
        per_group_sum = nums_sum // k
        groups = [0] * k

        def helper(index):
            if index == len(nums):
                return True
            for group_index, group_sum in enumerate(groups):
                if nums[index] + group_sum > per_group_sum:
                    continue
                groups[group_index] += nums[index]
                if helper(index+1):
                    return True
                groups[group_index] -= nums[index]
            return False

        return helper(0)
