from collections import defaultdict


class Solution:
    def deleteAndEarn(self, nums: list[int]) -> int:
        points: dict[int, int] = defaultdict(int)
        max_number: int = 0
        # Precomputed how many points we gain from taking an element
        for num in nums:
            points[num] += num
            max_number = max(max_number, num)

        @cache
        def max_points(num) -> int:
            # Check for base cases
            if num == 0:
                return 0
            if num == 1:
                return points[1]

            # Apply recurrence relation
            return max(max_points(num - 1), max_points(num - 2) + points[num])

        return max_points(max_number)
