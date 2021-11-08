from threading import Lock


class FizzBuzz:
    def __init__(self, n: int):
        self.n = n
        self.done = False
        self.fizz_lock = Lock()
        self.buzz_lock = Lock()
        self.fizz_buzz_lock = Lock()
        self.main = Lock()

        self.fizz_lock.acquire()
        self.buzz_lock.acquire()
        self.fizz_buzz_lock.acquire()

    # printFizz() outputs "fizz"
    def fizz(self, printFizz: 'Callable[[], None]') -> None:
        while True:
            self.fizz_lock.acquire()
            if self.done:
                return
            printFizz()
            self.main.release()

    # printBuzz() outputs "buzz"
    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
        while True:
            self.buzz_lock.acquire()
            if self.done:
                return
            printBuzz()
            self.main.release()

    # printFizzBuzz() outputs "fizzbuzz"
    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        while True:
            self.fizz_buzz_lock.acquire()
            if self.done:
                return
            printFizzBuzz()
            self.main.release()

    # printNumber(x) outputs "x", where x is an integer.
    def number(self, printNumber: 'Callable[[int], None]') -> None:
        for i in range(1, self.n+1):
            self.main.acquire()
            if i % 3 == 0 and i % 5 == 0:
                self.fizz_buzz_lock.release()
            elif i % 3 == 0:
                self.fizz_lock.release()
            elif i % 5 == 0:
                self.buzz_lock.release()
            else:
                printNumber(i)
                self.main.release()

        self.main.acquire()
        self.done = True
        self.fizz_lock.release()
        self.buzz_lock.release()
        self.fizz_buzz_lock.release()
        return
