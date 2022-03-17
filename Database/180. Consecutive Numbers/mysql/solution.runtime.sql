# Write your MySQL query statement below
SELECT
    DISTINCT r.num0 AS ConsecutiveNums
FROM
    (
        SELECT
            num AS num0,
            LEAD(num, 1) OVER() AS num1,
            LEAD(num, 2) OVER() AS num2
        FROM
            logs
    ) AS r
WHERE
    r.num1 = r.num2
    AND r.num0 = r.num1
