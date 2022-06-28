class Solution:
    def findDisappearedNumbers(self, nums: list[int]) -> list[int]:
        """
        :type nums: list[int]
        :rtype: list[int]
        """

        # Iterate over each of the elements in the original array
        for num in nums:

            # Treat the value as the new index
            new_index = abs(num) - 1

            # Check the magnitude of value at this new index
            # If the magnitude is positive, make it negative
            # thus indicating that the number nums[i] has
            # appeared or has been visited.
            if nums[new_index] > 0:
                nums[new_index] *= -1

        # Response array that would contain the missing numbers
        result = []

        # Iterate over the numbers from 1 to N and add all those
        # that have positive magnitude in the array
        for i, num in enumerate(nums):
            if num > 0:
                result.append(i + 1)

        return result
