from threading import Lock
import math


class ZeroEvenOdd:
    def __init__(self, n):
        self.n = n

        self.l_zero = Lock()
        self.l_even = Lock()
        self.l_odd = Lock()

        self.l_even.acquire()
        self.l_odd.acquire()
        self.num_to_print = 1

    # printNumber(x) outputs "x", where x is an integer.
    def zero(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range(math.ceil(self.n)):
            self.l_zero.acquire()

            printNumber(0)

            if self.num_to_print % 2 == 0:
                self.l_even.release()
            else:
                self.l_odd.release()

    def even(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range(math.floor(self.n / 2)):
            self.l_even.acquire()

            printNumber(self.num_to_print)
            self.num_to_print += 1

            self.l_zero.release()

    def odd(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range(math.ceil(self.n / 2)):
            self.l_odd.acquire()

            printNumber(self.num_to_print)
            self.num_to_print += 1

            self.l_zero.release()
