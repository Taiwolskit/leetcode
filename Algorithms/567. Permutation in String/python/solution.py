class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        s1map = [0] * 26
        s2map = [0] * 26
        for i in range(len(s1)):
            s1map[ord(s1[i]) - ord('a')] += 1
            s2map[ord(s2[i]) - ord('a')] += 1

        count = 0
        for i in range(26):
            if s1map[i] == s2map[i]:
                count += 1

        for i in range(len(s2) - len(s1)):
            r = ord(s2[i + len(s1)]) - ord('a')
            l = ord(s2[i]) - ord('a')
            if count == 26:
                return True
            s2map[r] += 1
            if s2map[r] == s1map[r]:
                count += 1
            elif s2map[r] == s1map[r] + 1:
                count -= 1
            s2map[l] -= 1
            if s2map[l] == s1map[l]:
                count += 1
            elif s2map[l] == s1map[l] - 1:
                count -= 1

        return count == 26
