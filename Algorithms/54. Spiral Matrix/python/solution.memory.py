class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if len(matrix) == 0:
            return []

        rowStart, rowEnd = 0, len(matrix) - 1
        colStart, colEnd = 0, len(matrix[0]) - 1

        result = []

        while rowStart <= rowEnd and colStart <= colEnd:

            for i in range(colStart, colEnd+1):
                result.append(matrix[rowStart][i])

            rowStart += 1

            for i in range(rowStart, rowEnd+1):
                result.append(matrix[i][colEnd])

            colEnd -= 1

            if rowStart <= rowEnd:
                for i in reversed(range(colStart, colEnd+1)):
                    result.append(matrix[rowEnd][i])

                rowEnd -= 1

            if colStart <= colEnd:
                for i in reversed(range(rowStart, rowEnd+1)):
                    result.append(matrix[i][colStart])

                colStart += 1

        return result
