class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        map_index = {}
        words = s.split()

        if len(pattern) != len(words):
            return False
        if len(set(pattern)) != len(set(words)):
            return False

        for i in range(len(words)):
            c = pattern[i]
            w = words[i]

            if c in map_index and map_index[c] != w:
                return False

            map_index[c] = w

        return True
