class Solution:
    def getRow(self, rowIndex: int) -> list[int]:
        return [self.getNum(rowIndex, i) for i in range(rowIndex + 1)]

    def getNum(self, row: int, col: int) -> int:
        if row == 0 or col == 0 or row == col:
            return 1
        return self.getNum(row - 1, col - 1) + self.getNum(row - 1, col)
