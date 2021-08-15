class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        ans = 0
        right = -1
        occ = set()
        for i in range(n):
            print('1------', i)
            print(ans)
            print(right)
            print(occ)
            if i != 0:
                print('2--------')
                print(s[i-1])
                occ.remove(s[i-1])
            while right + 1 < n and s[right + 1] not in occ:
                print('3--------', right)
                print(s[right + 1])
                print('d----', occ)
                occ.add(s[right + 1])
                right += 1
            ans = max(ans, right - i + 1)
        return ans

if __name__ == '__main__':
    row = Solution()
    row.lengthOfLongestSubstring('abcabcee')
