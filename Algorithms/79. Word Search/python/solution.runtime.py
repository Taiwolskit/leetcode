class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n, k = len(board), len(board[0]), len(word)
        hash = defaultdict(int)

        def pre_check():
            preDict = {}

            for i in word:
                if i in preDict:
                    preDict[i] += 1
                else:
                    preDict[i] = 1

            for i in board:
                for j in i:
                    if j in preDict and preDict[j] > 0:
                        preDict[j] -= 1
            for i in preDict.values():
                if i > 0:
                    return False
            return True

        if pre_check() is False:
            return False

        def dfs(i, j, letter):
            if hash[(i, j, letter)] > 1:
                return False

            hash[(i, j, letter)] += 1
            if letter == k:
                return True

            if 0 <= i < m and 0 <= j < n and board[i][j] == word[letter]:
                board[i][j] = '#'
                for x, y in (i, j+1), (i, j-1), (i+1, j), (i-1, j):
                    if dfs(x, y, letter+1):
                        return True

                board[i][j] = word[letter]
            return False

        for i in range(m):
            for j in range(n):
                if board[i][j] == word[0] and dfs(i, j, 0):
                    return True
        return False
