import threading


class H2O:
    def __init__(self):
        self.h_lock = threading.Lock()
        self.o_lock = threading.Lock()
        self.o_lock.acquire()
        self.hydrogen_counter = 0

    def hydrogen(self, releaseHydrogen) -> None:
        self.h_lock.acquire()
        releaseHydrogen()
        self.hydrogen_counter = self.hydrogen_counter + 1

        if self.hydrogen_counter == 2:
            self.o_lock.release()
        elif self.hydrogen_counter < 2:
            self.h_lock.release()

    def oxygen(self, releaseOxygen) -> None:
        self.o_lock.acquire()
        self.hydrogen_counter = 0
        releaseOxygen()
        self.h_lock.release()
