class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)

        # move along the input array starting from the end
        for i in range(n - 1, -1, -1):
            # set all the nines at the end of array to zeros
            if digits[i] == 9:
                digits[i] = 0
            # here we have the rightmost not-nine
            else:
                # increase this rightmost not-nine by 1
                digits[i] += 1
                # and the job is done
                return digits

        # we're here because all the digits are nines
        return [1] + digits
