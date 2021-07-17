from threading import Lock


class FizzBuzz:
    def __init__(self, n: int):
        self.n = n
        self.l1 = [Lock() for _ in range(3)]
        self.l2 = [Lock() for _ in range(3)]

        # lock all the locks
        for i in range(3):
            self.l1[i].acquire()
            self.l2[i].acquire()

    # printFizz() outputs "fizz"
    def fizz(self, printFizz: 'Callable[[], None]') -> None:
        for val in range(1, self.n + 1):
            if val % 3 == 0 and val % 5:
                self.l1[0].acquire()
                printFizz()
                self.l2[0].release()

    # printBuzz() outputs "buzz"
    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
        for val in range(1, self.n + 1):
            if val % 5 == 0 and val % 3:
                self.l1[1].acquire()
                printBuzz()
                self.l2[1].release()

    # printFizzBuzz() outputs "fizzbuzz"
    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        for val in range(1, self.n + 1):
            if val % 3 == 0 and val % 5 == 0:
                self.l1[2].acquire()
                printFizzBuzz()
                self.l2[2].release()

    # printNumber(x) outputs "x", where x is an integer.
    def number(self, printNumber: 'Callable[[int], None]') -> None:
        for val in range(1, self.n + 1):
            if val % 3 and val % 5:
                printNumber(val)
            elif val % 3 == 0 and val % 5:
                self.l1[0].release()
                self.l2[0].acquire()
            elif val % 5 == 0 and val % 3:
                self.l1[1].release()
                self.l2[1].acquire()
            else:
                self.l1[2].release()
                self.l2[2].acquire()
