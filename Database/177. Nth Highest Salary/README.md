# [177. Nth Highest Salary](https://leetcode.com/problems/nth-highest-salary/)

Write a SQL query to get the *n*th highest salary from the `Employee` table.

    +----+--------+
    | Id | Salary |
    +----+--------+
    | 1  | 100    |
    | 2  | 200    |
    | 3  | 300    |
    +----+--------+

For example, given the above Employee table, the *n*th highest salary where _n_ = 2 is `200`. If there is no *n*th highest salary, then the query should return `null`.

    +------------------------+
    | getNthHighestSalary(2) |
    +------------------------+
    | 200                    |
    +------------------------+
