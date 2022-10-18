from collections import defaultdict
from typing import Any


class Solution:
    def deleteAndEarn(self, nums: list[int]) -> int:
        points: defaultdict[Any, int] = defaultdict(int)
        # Precomputed how many points we gain from taking an element
        for num in nums:
            points[num] += num

        elements: list[int] = sorted(points.keys())
        two_back: int = 0
        one_back: int = points[elements[0]]

        for i in range(1, len(elements)):
            current_element: int = elements[i]
            if current_element == elements[i - 1] + 1:
                # The 2 elements are adjacent, cannot take both - apply normal recurrence
                two_back, one_back = one_back, max(
                    one_back, two_back + points[current_element]
                )
            else:
                # Otherwise, we don't need to worry about adjacent deletions
                two_back, one_back = one_back, one_back + points[current_element]

        return one_back
