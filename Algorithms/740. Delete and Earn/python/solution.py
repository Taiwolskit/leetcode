import math
from collections import defaultdict


class Solution:
    def deleteAndEarn(self, nums: list[int]) -> int:
        points: dict[int, int] = defaultdict(int)
        max_number: int = 0
        for num in nums:
            points[num] += num
            max_number = max(max_number, num)

        two_back = one_back = 0
        n: int = len(points)
        if max_number < n + n * math.log(n, 2):
            one_back = points[1]
            for num in range(2, max_number + 1):
                two_back, one_back = one_back, max(one_back, two_back + points[num])
        else:
            elements: list[int] = sorted(points.keys())
            one_back = points[elements[0]]
            for i in range(1, len(elements)):
                current_element: int = elements[i]
                if current_element == elements[i - 1] + 1:
                    two_back, one_back = one_back, max(
                        one_back, two_back + points[current_element]
                    )
                else:
                    two_back, one_back = one_back, one_back + points[current_element]

        return one_back
