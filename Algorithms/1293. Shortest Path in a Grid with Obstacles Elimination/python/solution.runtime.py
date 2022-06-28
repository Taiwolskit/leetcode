class Solution:
    def shortestPath(self, grid: list[list[int]], k: int) -> int:
        m = len(grid) - 1
        n = len(grid[0]) - 1
        shortest = m + n
        if k >= shortest:
            return shortest

        visited = dict()
        stack1 = [(0, 0, k, -1)]
        stack2 = list()
        while stack1 or stack2:
            active = stack1 if stack1 else stack2
            i, j, obstacles, distance = active.pop()
            if not (0 <= i < len(grid) and 0 <= j < len(grid[0])):
                continue
            if grid[i][j] == 1:
                obstacles -= 1

            if obstacles < 0:
                continue
            if (i, j) in visited and visited[(i, j)] >= obstacles:
                continue

            visited[(i, j)] = obstacles
            distance += 1
            if (i, j) == (m, n):
                return distance
            stack1.extend([(i+1, j, obstacles, distance),
                          (i, j+1, obstacles, distance)])
            stack2.extend([(i-1, j, obstacles, distance),
                          (i, j-1, obstacles, distance)])

        return -1
