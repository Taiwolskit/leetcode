class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        n = len(releaseTimes)
        max_diff = releaseTimes[0]
        result = keysPressed[0]

        for i in range(1, n):
            diff = releaseTimes[i] - releaseTimes[i-1]
            if diff > max_diff or (diff == max_diff and keysPressed[i] > result):
                max_diff = diff
                result = keysPressed[i]

        return result
