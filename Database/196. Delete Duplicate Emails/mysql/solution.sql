# Write your MySQL query statement below
DELETE FROM Person
WHERE Id NOT IN (
    SELECT * 
    FROM (
        SELECT Min(Id) 
        FROM Person
        GROUP BY Email
    ) AS a
);