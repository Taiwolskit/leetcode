class Solution:
    def minDominoRotations(self, tops: List[int], bottoms: List[int]) -> int:
        def check(x):
            """
            Return min number of swaps
            if one could make all elements in tops or bottoms equal to x.
            Else return -1.
            """
            # how many rotations should be done
            # to have all elements in tops equal to x
            # and to have all elements in bottoms equal to x
            rotations_a = rotations_b = 0
            for i in range(n):
                # rotations couldn't be done
                if tops[i] != x and bottoms[i] != x:
                    return -1
                # tops[i] != x and bottoms[i] == x
                elif tops[i] != x:
                    rotations_a += 1
                # tops[i] == x and bottoms[i] != x
                elif bottoms[i] != x:
                    rotations_b += 1
            # min number of rotations to have all
            # elements equal to x in tops or bottoms
            return min(rotations_a, rotations_b)

        n = len(tops)
        rotations = check(tops[0])
        # If one could make all elements in tops or bottoms equal to tops[0]
        if rotations != -1 or tops[0] == bottoms[0]:
            return rotations
        # If one could make all elements in tops or bottoms equal to bottoms[0]
        return check(bottoms[0])
