from threading import Semaphore, Lock


class H2O:
    def __init__(self):
        self._lock_h = Semaphore(2)
        self._lock_o = Semaphore(1)
        self._lock_o.acquire()
        self._lock_acquire_o = Lock()

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:
        self._lock_h.acquire()
        # releaseHydrogen() outputs "H". Do not change or remove this line.
        releaseHydrogen()
        self._lock_o.release()

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:
        self._lock_acquire_o.acquire()
        self._lock_o.acquire()
        self._lock_o.acquire()
        self._lock_acquire_o.release()
        # releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen()
        self._lock_h.release()
        self._lock_h.release()
