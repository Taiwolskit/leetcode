# [917. Reverse Only Letters](https://leetcode.com/problems/reverse-only-letters/)

Given a string `s`, reverse the string according to the following rules:

-   All the characters that are not English letters remain in the same position.
-   All the English letters (lowercase or uppercase) should be reversed.

Return `s` _after reversing it_.

**Example 1:**

    Input: s = "ab-cd"
    Output: "dc-ba"

**Example 2:**

    Input: s = "a-bC-dEf-ghIj"
    Output: "j-Ih-gfE-dCba"

**Example 3:**

    Input: s = "Test1ng-Leet=code-Q!"
    Output: "Qedo1ct-eeLg=ntse-T!"

**Constraints:**

-   `1 <= s.length <= 100`
-   `s` consists of characters with ASCII values in the range `[33, 122]`.
-   `s` does not contain `'\"'` or `'\\'`.

**Hint 1:**

This problem is exactly like reversing a normal string except that there are certain characters that we have to simply skip. That should be easy enough to do if you know how to reverse a string using the two-pointer approach.
