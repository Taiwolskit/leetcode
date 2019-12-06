class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums = sorted(nums)
        length = len(nums)
        i = 1
        closest = None
        while i < length - 1:
            start = 0
            end = length - 1
            while start < end:
                if start == i:
                    start += 1
                    continue
                elif end == i:
                    end -= 1
                    continue
                total = nums[start] + nums[end] + nums[i]
                if closest == None or abs(total - target) < abs(closest - target):
                    closest = total
                if total - target < 0:
                    start += 1
                else:
                    end -= 1
            i += 1
        return closest
