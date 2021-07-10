from threading import Lock
import math


class ZeroEvenOdd:
    def __init__(self, n):
        self.n = n
        self.l1 = Lock()
        self.l_even = Lock()
        self.l_even.acquire()
        self.l_odd = Lock()
        self.l_odd.acquire()
        self.num_to_print = 1
        self.e = 2
        self.o = 1
        self.is_even = False

    # printNumber(x) outputs "x", where x is an integer.
    def zero(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range(math.ceil(self.n)):
            self.l1.acquire()

            printNumber(0)

            if self.is_even:
                self.l_even.release()
            else:
                self.l_odd.release()

    def even(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range(math.floor(self.n/2)):
            self.l_even.acquire()

            printNumber(self.num_to_print)
            self.is_even = False
            self.num_to_print += 1

            self.l1.release()

    def odd(self, printNumber: 'Callable[[int], None]') -> None:
        for _ in range(math.ceil(self.n/2)):
            self.l_odd.acquire()

            printNumber(self.num_to_print)
            self.num_to_print += 1
            self.is_even = True

            self.l1.release()
