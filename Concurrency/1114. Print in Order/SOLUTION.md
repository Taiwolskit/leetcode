# Solution

有一個 Foo instance 會傳送三個 thread，這三個 thread 會分別呼叫不同的函數 `first()`, `second()`, `third()`。設計一個方式要確保其執行的順序
這邊 Python 在 Runtime 使用了 Event 機制，去判斷是否放行
在 Memory 則不使用任何 Package，用了做基本的 Flag 做邏輯判斷，避免產生其他 Thread 來降低 Memory 的使用。但是相對的就會造成 Compute 的浪費。

整體來說如果要兼顧 Compute 和 Memory 的話，使用 `Lock` 機制來做的話，會是不錯的解法。

## Description

`Lock` 機制

    from threading import Lock


    class Foo:
        def __init__(self):
            self.lock1 = Lock()
            self.lock2 = Lock()
            self.lock1.acquire()
            self.lock2.acquire()


        def first(self, printFirst: 'Callable[[], None]') -> None:

            # printFirst() outputs "first". Do not change or remove this line.
            printFirst()
            self.lock1.release()


        def second(self, printSecond: 'Callable[[], None]') -> None:
            self.lock1.acquire()
            # printSecond() outputs "second". Do not change or remove this line.
            printSecond()
            self.lock2.release()


        def third(self, printThird: 'Callable[[], None]') -> None:
            self.lock2.acquire()
            # printThird() outputs "third". Do not change or remove this line.
            printThird()
