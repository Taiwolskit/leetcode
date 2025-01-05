from threading import Lock


class TrafficLight:
    def __init__(self):
        self.lock = Lock()
        self.is_road_a_green = True  # 一開始 road A 是綠燈

    def carArrived(
        self,
        carId: int,  # ID of the car
        roadId: int,  # ID of the road the car travels on. Can be 1 (road A) or 2 (road B)
        direction: int,  # Direction of the car
        turnGreen: "Callable[[], None]",  # Use turnGreen() to turn light to green on current road
        crossCar: "Callable[[], None]",  # Use crossCar() to make car cross the intersection
    ) -> None:
        with self.lock:
            # 如果車輛在 road A (roadId = 1) 但當前不是綠燈
            if roadId == 1 and not self.is_road_a_green:
                turnGreen()
                self.is_road_a_green = True
            # 如果車輛在 road B (roadId = 2) 但當前是 road A 的綠燈
            elif roadId == 2 and self.is_road_a_green:
                turnGreen()
                self.is_road_a_green = False

            crossCar()
