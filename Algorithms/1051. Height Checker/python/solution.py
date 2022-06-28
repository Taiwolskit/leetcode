class Solution:
    def heightChecker(self, heights: list[int]) -> int:
        sort_height = sorted(heights)

        total = 0
        for num1, num2 in zip(heights, sort_height):
            if num1 != num2:
                total += 1
        return total
