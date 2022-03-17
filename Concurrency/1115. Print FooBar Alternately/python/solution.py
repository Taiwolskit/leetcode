from threading import Lock


class FooBar:
    def __init__(self, n):
        self.n = n
        self.foolock = Lock()
        self.barlock = Lock()

    def foo(self, printFoo: 'Callable[[], None]') -> None:
        self.barlock.acquire()
        for _ in range(self.n):
            self.foolock.acquire()
            # printFoo() outputs "foo". Do not change or remove this line.
            printFoo()
            self.barlock.release()

    def bar(self, printBar: 'Callable[[], None]') -> None:

        for _ in range(self.n):
            self.barlock.acquire()
            # printBar() outputs "bar". Do not change or remove this line.
            printBar()
            self.foolock.release()
