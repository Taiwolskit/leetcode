class ZeroEvenOdd:
    def __init__(self, n):
        self.n = n

    # printNumber(x) outputs "x", where x is an integer.
    def zero(self, printNumber: 'Callable[[int], None]') -> None:
        printNumber(0)

    def even(self, printNumber: 'Callable[[int], None]') -> None:
        n = self.n
        for i in range(1, n):
            printNumber(i * 10)
        if n % 2 == 0:
            printNumber(n)

    def odd(self, printNumber: 'Callable[[int], None]') -> None:
        n = self.n
        if n % 2 == 1:
            printNumber(n)
