class Solution:
    def findMinArrowShots(self, points: list[list[int]]) -> int:
        if not points:
            return 0

        # sort by x_end
        points.sort(key=lambda x: x[1])

        arrows = 1
        first_end = points[0][1]
        for x_start, x_end in points:
            # if the current balloon starts after the end of another one,
            # one needs one more arrow
            if x_start > first_end:
                arrows += 1
                first_end = x_end

        return arrows
