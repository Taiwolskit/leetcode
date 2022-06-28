class Solution:
    def checkIfExist(self, arr: list[int]) -> bool:
        seen = set(arr)
        for value in arr:
            if 2 * value in seen or value / 2 in seen:
                return True
            seen.add(value)
        return False
