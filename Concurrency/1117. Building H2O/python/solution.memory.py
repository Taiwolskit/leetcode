from threading import Semaphore


class H2O:
    def __init__(self):
        self.h_lock = Semaphore(2)
        self.o_lock = Semaphore(2)
        self.lock = Semaphore(1)

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:

        self.h_lock.acquire()
        # releaseHydrogen() outputs "H". Do not change or remove this line.
        releaseHydrogen()
        self.o_lock.release()

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:

        self.lock.acquire()
        self.o_lock.acquire()
        self.o_lock.acquire()
        # releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen()
        self.lock.release()
        self.h_lock.release(2)
