class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        N = len(arr)
        ans = 1
        anchor = 0

        for i in range(1, N):
            c = self.cmp(arr[i-1], arr[i])

            if c == 0:
                anchor = i
            elif i == N-1 or c * self.cmp(arr[i], arr[i+1]) != -1:
                ans = max(ans, i - anchor + 1)
                anchor = i
        return ans

    def cmp(self, x, y):
        if x > y:
            return 1
        elif x < y:
            return -1
        elif x == y:
            return 0


# class Solution:
#     def maxTurbulenceSize(self, arr: List[int]) -> int:
#         m = len(arr)
#         inc = [1] * m
#         dec = [1] * m

#         for i in range(1, m):
#             if arr[i] > arr[i-1]:
#                 inc[i] = dec[i-1] + 1
#             elif arr[i] < arr[i-1]:
#                 dec[i] = inc[i-1] + 1

#         return max(max(inc), max(dec))
