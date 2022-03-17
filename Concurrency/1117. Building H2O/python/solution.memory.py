from threading import Barrier, Lock, Semaphore


class H2O:
    def __init__(self):
        self.lock = Lock()
        self.semaphore = Semaphore(2)
        self.barrier = Barrier(3)

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:
        with self.semaphore:
            # releaseHydrogen() outputs "H". Do not change or remove this line.
            self.barrier.wait()
            releaseHydrogen()

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:
        with self.lock:
            # releaseOxygen() outputs "O". Do not change or remove this line.
            self.barrier.wait()
            releaseOxygen()
