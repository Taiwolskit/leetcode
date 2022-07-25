class Solution:
    def numberOfSteps(self, num: int) -> int:
        # We need to handle this as a special case, otherwise it'll return -1.
        if num == 0:
            return 0

        steps: int = 0
        power_of_two: int = 1

        while power_of_two <= num:
            # Apply the bit mask to check if the bit at "power_of_two" is a 1.
            if (power_of_two & num) != 0:
                steps += 2
            else:
                steps += 1
            power_of_two *= 2

        # We need to subtract 1, because the last bit was over-counted.
        return steps - 1
