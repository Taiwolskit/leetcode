from threading import Event


class Foo:
    def __init__(self):
        self.lock1 = Event()
        self.lock2 = Event()

    def first(self, printFirst: 'Callable[[], None]') -> None:

        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.lock1.set()

    def second(self, printSecond: 'Callable[[], None]') -> None:

        # printSecond() outputs "second". Do not change or remove this line.
        self.lock1.wait()
        printSecond()
        self.lock2.set()

    def third(self, printThird: 'Callable[[], None]') -> None:

        # printThird() outputs "third". Do not change or remove this line.
        self.lock2.wait()
        printThird()
