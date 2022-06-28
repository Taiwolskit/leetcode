class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        low: int = 0
        high: int = len(numbers) - 1
        while low < high:
            total: int = numbers[low] + numbers[high]
            if total == target:
                return [low + 1, high + 1]
            if total < target:
                low += 1
            else:
                high -= 1
        return [-1, -1]
