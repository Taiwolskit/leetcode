class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        s = sum(nums)
        if s % k != 0:
            return False
        target = s // k
        visited = [False] * len(nums)
        nums.sort(reverse=True)

        def backtrack(start, currSum, currK):
            if currK == 1:
                return True

            if currSum == target:
                return backtrack(0, 0, currK-1)

            for i in range(start, len(nums)):
                if not visited[i] and currSum + nums[i] <= target:
                    visited[i] = True
                    if backtrack(i + 1, currSum + nums[i], currK):
                        return True
                    visited[i] = False

            return False

        return backtrack(0, 0, k)
