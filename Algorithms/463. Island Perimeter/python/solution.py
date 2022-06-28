class Solution:
    def islandPerimeter(self, grid: list[list[int]]) -> int:
        perimeter = 0
        for i in range(len(grid)):
            for j, val in enumerate(grid[i]):
                if val:
                    perimeter += 4

                    if i > 0 and grid[i-1][j]:
                        perimeter -= 2
                    if j > 0 and grid[i][j - 1]:
                        perimeter -= 2
        return perimeter
