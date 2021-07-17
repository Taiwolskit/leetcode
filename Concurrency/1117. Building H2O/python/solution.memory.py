class H2O:

    oxy = []
    hydr = []

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:
        self.hydr.append(releaseHydrogen)
        self.check()

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:
        self.oxy.append(releaseOxygen)
        self.check()

    def check(self) -> None:
        if len(self.oxy) > 0 and len(self.hydr) > 1:
            self.oxy.pop(0)()
            self.hydr.pop(0)()
            self.hydr.pop(0)()
