class Solution:
    def deleteAndEarn(self, nums: list[int]) -> int:
        points: dict[int, int] = {}
        max_number: int = 0
        # Precomputed how many points we gain from taking an element
        for num in nums:
            points[num] = points.get(num, 0) + num
            max_number = max(max_number, num)

        # Base cases
        two_back: int = 0
        one_back: int = points.get(1, 0)

        for num in range(2, max_number + 1):
            two_back, one_back = one_back, max(one_back, two_back + points.get(num, 0))

        return one_back
