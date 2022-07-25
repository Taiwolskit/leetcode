class Solution:
    def numberOfSteps(self, num: int) -> int:
        binary: list[str] = bin(num)[2:]
        ones: int = binary.count("1")
        total: int = len(binary)
        return ones + total - 1
