from collections import defaultdict


class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        buckets = [[] for _ in range(len(nums) + 1)]
        number_count = defaultdict(int)
        for num in nums:
            number_count[num] += 1

        for num, freq in number_count.items():
            buckets[freq].append(num)

        # buckets is a double array
        flat_list = []
        # traverse from right to left so number with higher frequency come first
        for i in range(len(buckets) - 1, -1, -1):
            bucket = buckets[i]
            if bucket:
                for num in bucket:
                    flat_list.append(num)
        return flat_list[:k]
