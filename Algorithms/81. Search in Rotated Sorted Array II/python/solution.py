class Solution:
    def search(self, nums: list[int], target: int) -> bool:
        n = len(nums)
        if n == 0:
            return False
        end = n - 1
        start = 0
        while start <= end:
            mid = (start + end) // 2

            if nums[mid] == target:
                return True

            if nums[start] == nums[mid]:
                start += 1
                continue

            pivot_array = nums[start] <= nums[mid]
            if pivot_array ^ (nums[start] <= target):
                if pivot_array:
                    start = mid + 1
                else:
                    end = mid - 1
            else:
                if nums[mid] < target:
                    start = mid + 1
                else:
                    end = mid - 1
        return False
