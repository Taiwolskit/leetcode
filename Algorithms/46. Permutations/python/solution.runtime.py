# Recursive
# 每次取一個數字作為第一個數字，其他數字作排列後，再將第一個數字將上去
class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        res = []
        self.dfs(nums, [], res)
        return res

    def dfs(self, nums, path, res):
        if not nums:
            res.append(path)
        for i in range(len(nums)):
            self.dfs(nums[:i] + nums[i + 1:], path + [nums[i]], res)


# Backtracking
# 回朔法是解決排列問題的經典方法。對每個可能的結果進行輪詢，如果某個數字已經使用過則略過。
# 下面的做法中，使用了 visited 陣列来儲存是否經過這個位置。
class Solution(object):
    def permute(self, nums):
        """
        :type nums: list[int]
        :rtype: list[list[int]]
        """
        visited = [0] * len(nums)
        res = []

        def dfs(path):
            if len(path) == len(nums):
                res.append(path)
            else:
                for i in range(len(nums)):
                    if not visited[i]:
                        visited[i] = 1
                        dfs(path + [nums[i]])
                        visited[i] = 0

        dfs([])
        return res
