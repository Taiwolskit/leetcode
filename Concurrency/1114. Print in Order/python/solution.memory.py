class Foo:
    call = 0

    def first(self, printFirst: 'Callable[[], None]') -> None:
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.call = 1

    def second(self, printSecond: 'Callable[[], None]') -> None:
        while self.call != 1:
            continue
        # printSecond() outputs "second". Do not change or remove this line.
        printSecond()
        self.call = 2

    def third(self, printThird: 'Callable[[], None]') -> None:
        while self.call != 2:
            continue
        # printThird() outputs "third". Do not change or remove this line.
        printThird()
