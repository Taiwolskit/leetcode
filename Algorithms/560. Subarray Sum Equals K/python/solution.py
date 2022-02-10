class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count, amount = 0, 0
        hash_map = {0: 1}
        for num in nums:
            amount += num
            count += hash_map.get(amount - k, 0)
            hash_map[amount] = hash_map.get(amount, 0) + 1
        return count
