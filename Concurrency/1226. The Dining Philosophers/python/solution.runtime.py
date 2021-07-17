import threading


class DiningPhilosophers:
    def __init__(self):
        self.forks = [threading.Lock() for _ in range(5)]

    # call the functions directly to execute, for example, eat()
    def wantsToEat(self,
                   philosopher: int,
                   pickLeftFork: 'Callable[[], None]',
                   pickRightFork: 'Callable[[], None]',
                   eat: 'Callable[[], None]',
                   putLeftFork: 'Callable[[], None]',
                   putRightFork: 'Callable[[], None]') -> None:
        first = philosopher
        second = (philosopher + 1) % 5
        if first > second:
            first, second = second, first

        with self.forks[first], self.forks[second]:
            pickLeftFork()
            pickRightFork()
            eat()
            putLeftFork()
            putRightFork()
