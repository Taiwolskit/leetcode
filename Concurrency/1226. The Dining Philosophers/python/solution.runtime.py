from threading import Lock


class DiningPhilosophers:

    forks = [Lock() for _ in range(5)]

    # call the functions directly to execute, for example, eat()
    def wantsToEat(self,
                   philosopher: int,
                   pickLeftFork: 'Callable[[], None]',
                   pickRightFork: 'Callable[[], None]',
                   eat: 'Callable[[], None]',
                   putLeftFork: 'Callable[[], None]',
                   putRightFork: 'Callable[[], None]') -> None:

        i = philosopher
        right_fork = i
        left_fork = (i+1) % 5
        if i % 2 == 0:
            self.forks[right_fork].acquire()
            self.forks[left_fork].acquire()
        else:
            self.forks[left_fork].acquire()
            self.forks[right_fork].acquire()
        pickRightFork()
        pickLeftFork()
        eat()
        putLeftFork()
        putRightFork()
        if i % 2 == 0:
            self.forks[left_fork].release()
            self.forks[right_fork].release()
        else:
            self.forks[right_fork].release()
            self.forks[left_fork].release()
