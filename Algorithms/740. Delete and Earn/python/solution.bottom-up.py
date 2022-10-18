from collections import defaultdict
from typing import Any


class Solution:
    def deleteAndEarn(self, nums: list[int]) -> int:
        points: defaultdict[Any, int] = defaultdict(int)
        max_number: int = 0
        # Precomputed how many points we gain from taking an element
        for num in nums:
            points[num] += num
            max_number = max(max_number, num)

        # Declare our array along with base cases
        max_points = [0] * (max_number + 1)
        max_points[1] = points[1]

        for num in range(2, len(max_points)):
            # Apply recurrence relation
            max_points[num] = max(
                max_points[num - 1], max_points[num - 2] + points[num]
            )

        return max_points[max_number]
