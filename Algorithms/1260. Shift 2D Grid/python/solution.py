class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        num_rows, num_cols = len(grid), len(grid[0])
        new_grid = [[0] * num_cols for _ in range(num_rows)]
        for row in range(num_rows):
            for col in range(num_cols):
                new_col = (col + k) % num_cols
                new_row = (row + (col + k) // num_cols) % num_rows
                new_grid[new_row][new_col] = grid[row][col]
        return new_grid
