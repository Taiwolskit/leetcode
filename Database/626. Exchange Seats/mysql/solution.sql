# Write your MySQL query statement below
SELECT CASE
         WHEN id%2 = 0 THEN id - 1
         WHEN id%2 != 0
              AND id != (SELECT Max(id)
                         FROM   seat) THEN id + 1
         ELSE id
       end AS id,
       student
FROM   seat
ORDER  BY id