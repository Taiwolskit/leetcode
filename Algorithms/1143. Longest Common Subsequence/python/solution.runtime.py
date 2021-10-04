class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n, m = len(text1), len(text2)

        charPos1 = defaultdict(list)
        charPos2 = defaultdict(list)
        for i, c in enumerate(text1):
            charPos1[c].append(i)

        for i, c in enumerate(text2):
            charPos2[c].append(i)

        text1 += "$"
        heap = []
        for i in range(n-1, -1, -1):
            for idx in charPos2[text1[i]]:
                j = bisect.bisect_right(heap, idx)
                if j == 0:
                    heap.insert(0, idx)
                else:
                    heap[j-1] = idx

        return len(heap)
