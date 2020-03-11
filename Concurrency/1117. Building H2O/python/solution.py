from threading import Barrier, Semaphore


class H2O:
    def __init__(self):
        self.oxy_lock = Semaphore()
        self.hydro_lock = Semaphore(2)
        self.barrier = Barrier(3)

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:
        # releaseHydrogen() outputs "H". Do not change or remove this line.
        self.hydro_lock.acquire()
        releaseHydrogen()
        self.barrier.wait()
        self.hydro_lock.release()

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:
        # releaseOxygen() outputs "O". Do not change or remove this line.
        self.oxy_lock.acquire()
        releaseOxygen()
        self.barrier.wait()
        self.oxy_lock.release()
