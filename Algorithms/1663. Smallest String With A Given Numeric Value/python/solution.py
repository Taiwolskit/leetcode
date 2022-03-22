class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        result = ['a'] * n
        for i in range(n - 1, -1, -1):
            add = min(k - i, 26)
            result[i] = chr(add + ord('a') - 1)
            k -= add
        return ''.join(result)
