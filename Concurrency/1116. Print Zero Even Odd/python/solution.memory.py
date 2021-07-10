from threading import Lock

class ZeroEvenOdd:
    def __init__(self, n):
        self.n = n

        self.zero_mutex = Lock()
        self.odd_mutex = Lock()
        self.even_mutex = Lock()

        # Lock mutex for even number and odd number,
        # because 0 must be printed first
        self.even_mutex.acquire()
        self.odd_mutex.acquire()


	# printNumber(x) outputs "x", where x is an integer.
    def zero(self, printNumber: 'Callable[[int], None]') -> None:

        for i in range(1, self.n+1):

            # lock mutex for zero
            self.zero_mutex.acquire()

            printNumber(0)


            if ( i % 2 )== 1:
                # unlock mutex for odd number
                self.odd_mutex.release()
            else:
                # unlock mutex for even number
                self.even_mutex.release()

    def even(self, printNumber: 'Callable[[int], None]') -> None:

        for j in range(2, self.n+1, 2):

            # lock mutex for even number
            self.even_mutex.acquire()

            printNumber(j)

            # unlock mutex for zero
            self.zero_mutex.release()


    def odd(self, printNumber: 'Callable[[int], None]') -> None:

        for k in range(1, self.n+1, 2):

            # lock mutex for odd number
            self.odd_mutex.acquire()

            printNumber(k)

            # unlock mutex for zero
            self.zero_mutex.release()
