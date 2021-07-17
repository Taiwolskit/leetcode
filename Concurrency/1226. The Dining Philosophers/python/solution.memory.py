from threading import Lock


class DiningPhilosophers:
    def __init__(self):
        self.l = Lock()

    # call the functions directly to execute, for example, eat()
    def wantsToEat(self,
                   philosopher: int,
                   pickLeftFork: 'Callable[[], None]',
                   pickRightFork: 'Callable[[], None]',
                   eat: 'Callable[[], None]',
                   putLeftFork: 'Callable[[], None]',
                   putRightFork: 'Callable[[], None]') -> None:
        with self.l:
            pickLeftFork()
            pickRightFork()
            eat()
            putLeftFork()
            putRightFork()
