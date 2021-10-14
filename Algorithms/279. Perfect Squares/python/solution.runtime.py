class Solution:
    def numSquares(self, n: int) -> int:
        def is_square(n: int) -> bool:
            sqrt_n = int(math.sqrt(n))
            return sqrt_n*sqrt_n == n

        if is_square(n):
            return 1

        # n&b gives the mod of n/(b+1)
        while (n & 3) == 0:
            # n>>=b shift to right 2 bits, n/devided by 2^b, take interger
            n >>= 2

        if (n & 7) == 7:
            return 4

        for i in range(1, int(math.sqrt(n)) + 1):
            if is_square(n - i*i):
                return 2
        return 3
