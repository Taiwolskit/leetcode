class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        """
        To find the unique path in 4 directional walks
        """
        start = end = None
        visited = set()     # To allocate all the places visited

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    start = (i, j)
                elif grid[i][j] == 2:
                    end = (i, j)
                    visited.add(end)
                elif grid[i][j] == 0:
                    visited.add((i, j))

        def backtrack(x, y, visited):
            """
            To backtrack to all valid paths
            """
            # check if the end condition is met
            if (x, y) == end:
                return len(visited) == 0

            result = 0  # assume no valid paths available

            if (x+1, y) in visited:
                visited.remove((x+1, y))
                result += backtrack(x+1, y, visited)
                visited.add((x+1, y))

            if (x-1, y) in visited:
                visited.remove((x-1, y))
                result += backtrack(x-1, y, visited)
                visited.add((x-1, y))

            if (x, y+1) in visited:
                visited.remove((x, y+1))
                result += backtrack(x, y+1, visited)
                visited.add((x, y+1))

            if (x, y-1) in visited:
                visited.remove((x, y-1))
                result += backtrack(x, y-1, visited)
                visited.add((x, y-1))

            return result

        return backtrack(start[0], start[1], visited)
