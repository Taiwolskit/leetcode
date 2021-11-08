from threading import Event


class FooBar:
    def __init__(self, n):
        self.n = n
        self.foo_printed = Event()
        self.bar_printed = Event()

    def foo(self, printFoo: 'Callable[[], None]') -> None:

        for i in range(self.n):
            if i != 0:
                self.bar_printed.wait()
            # printFoo() outputs "foo". Do not change or remove this line.
            printFoo()
            self.bar_printed.clear()
            self.foo_printed.set()

    def bar(self, printBar: 'Callable[[], None]') -> None:

        for i in range(self.n):
            self.foo_printed.wait()
            # printBar() outputs "bar". Do not change or remove this line.
            printBar()
            self.foo_printed.clear()
            self.bar_printed.set()
