import threading


class Foo:
    def __init__(self):
        self.f1 = threading.Event()
        self.f2 = threading.Event()

    def first(self, printFirst: 'Callable[[], None]') -> None:

        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.f1.set()

    def second(self, printSecond: 'Callable[[], None]') -> None:

        # printSecond() outputs "second". Do not change or remove this line.
        self.f1.wait()
        printSecond()
        self.f2.set()

    def third(self, printThird: 'Callable[[], None]') -> None:

        # printThird() outputs "third". Do not change or remove this line.
        self.f2.wait()
        printThird()
