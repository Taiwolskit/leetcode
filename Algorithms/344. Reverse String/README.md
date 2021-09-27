# [344. Reverse String](https://leetcode.com/problems/reverse-string/)

Write a function that reverses a string. The input string is given as an array of characters `s`.

**Example 1:**

    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

**Example 2:**

    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

**Constraints:**

-   `1 <= s.length <= 105`
-   `s[i]` is a [printable ascii character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

**Follow up:** Do not allocate extra space for another array. You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with `O(1)` extra memory.

**Hint 1:**

The entire logic for reversing a string is based on using the opposite directional two-pointer approach!