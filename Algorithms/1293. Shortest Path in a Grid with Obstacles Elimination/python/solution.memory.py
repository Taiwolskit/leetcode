class Solution:
    def shortestPath(self, grid: list[list[int]], k: int) -> int:
        """
        row, col = len(grid)-1, len(grid[0])-1
        estimate_step + step, k, i, j
        estimate_step = row+col-i-j
        """
        if not grid or not grid[0]:
            return 0

        row, col = len(grid), len(grid[0])
        status_k = [[-1] * col for _ in range(row)]
        if grid[0][0] == 1:
            if k == 0:
                return -1
            status_k[0][0] = k-1
        else:
            status_k[0][0] = k

        h = [(row+col-2, -status_k[0][0], 0, 0, 0)]
        moves = [(-1, 0), (1, 0), (0, 1), (0, -1)]

        while h:
            g, k, i, j, step = heapq.heappop(h)
            if i == row-1 and j == col-1:
                return step
            step += 1
            for di, dj in moves:
                if 0 <= i+di < row and 0 <= j+dj < col:
                    newk = k+grid[i+di][j+dj]
                    if -newk > status_k[i+di][j+dj]:
                        status_k[i+di][j+dj] = -newk
                        heapq.heappush(
                            h, (row+col-i-di-j-dj-2+step, newk, i+di, j+dj, step))

        return -1
