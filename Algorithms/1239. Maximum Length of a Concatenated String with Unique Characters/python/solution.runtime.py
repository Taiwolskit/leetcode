class Solution:
    def maxLength(self, arr: list[str]) -> int:
        def max_len_of_merged_word(words):
            largest, M = 0, len(words)
            for i in range(M):
                word_set_1 = set(words[i])
                size = len(words[i])
                for j in range(M):
                    if j == i:
                        continue
                    word_set_2 = set(words[j])
                    if word_set_1.isdisjoint(word_set_2):
                        size += len(words[j])
                        word_set_1 = word_set_1.union(word_set_2)
                largest = max(largest, size)
            return largest

        strs = [arr[i]
                for i in range(len(arr)) if len(arr[i]) == len(set(arr[i]))]
        return max(
            max_len_of_merged_word(strs),
            max_len_of_merged_word(sorted(strs, reverse=True)))
