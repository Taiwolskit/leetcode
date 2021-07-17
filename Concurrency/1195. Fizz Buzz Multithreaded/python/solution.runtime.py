from threading import Semaphore


class FizzBuzz:
    def __init__(self, n: int):
        self.n = n
        self.fz = Semaphore(0)
        self.bz = Semaphore(0)
        self.fzbz = Semaphore(0)
        self.num = Semaphore(1)

    def fizz(self, printFizz: 'Callable[[], None]') -> None:
        for _ in range(int(self.n / 3) - int(self.n / 15)):
            self.fz.acquire()
            printFizz()
            self.num.release()

    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
        for _ in range(int(self.n / 5) - int(self.n / 15)):
            self.bz.acquire()
            printBuzz()
            self.num.release()

    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        for _ in range(int(self.n / 15)):
            self.fzbz.acquire()
            printFizzBuzz()
            self.num.release()

    def number(self, printNumber: 'Callable[[int], None]') -> None:
        for i in range(1, self.n + 1):
            self.num.acquire()
            if i % 15 == 0:
                self.fzbz.release()
            elif i % 3 == 0:
                self.fz.release()
            elif i % 5 == 0:
                self.bz.release()
            else:
                printNumber(i)
                self.num.release()
