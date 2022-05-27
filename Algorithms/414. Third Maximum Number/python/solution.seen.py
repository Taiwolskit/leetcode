class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        def maximum_ignoring_seen_maximums(nums, seen_maximums):
            maximum = None
            for num in nums:
                if num in seen_maximums:
                    continue
                if maximum is None or num > maximum:
                    maximum = num
            return maximum

        seen_maximums: Set[int] = set()

        for _ in range(3):
            current_maximum = maximum_ignoring_seen_maximums(nums, seen_maximums)
            if current_maximum is None:
                return max(seen_maximums)
            seen_maximums.add(current_maximum)

        return min(seen_maximums)
