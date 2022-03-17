from threading import Barrier, Semaphore


class H2O:
    def __init__(self):
        # Barrier objects in python are used to wait for a fixed number of thread to complete execution before any particular thread can proceed forward with the execution of the program.
        self.groups = Barrier(3)
        # Semaphore can be used to limit the access to the shared resources with limited capacity.
        self.h_cnt = Semaphore(2)
        self.o_cnt = Semaphore(1)

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:
        self.h_cnt.acquire()

        self.groups.wait()
        # releaseHydrogen() outputs "H". Do not change or remove this line.
        releaseHydrogen()
        self.h_cnt.release()

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:

        self.o_cnt.acquire()
        self.groups.wait()
        # releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen()
        self.o_cnt.release()
