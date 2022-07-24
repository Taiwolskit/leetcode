class Solution:
    def fizzBuzz(self, n: int) -> list[str]:
        # ans list
        ans = []

        # Dictionary to store all fizzbuzz mappings
        fizz_buzz_dict = {3: "Fizz", 5: "Buzz"}

        # List of divisors which we will iterate over.
        divisors = fizz_buzz_dict.keys()

        for num in range(1, n + 1):
            # If the num is divisible by key,
            # then add the corresponding string mapping to current num_ans_str
            num_ans_str = [fizz_buzz_dict[key] for key in divisors if num % key == 0]
            if not num_ans_str:
                num_ans_str.append(str(num))

            # Append the current answer str to the ans list
            ans.append("".join(num_ans_str))

        return ans
