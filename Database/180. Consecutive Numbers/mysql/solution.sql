# Write your MySQL query statement below
SELECT DISTINCT Num AS ConsecutiveNums
FROM (
    SELECT Num, CASE
        WHEN @record = Num THEN @num := @num + 1
        WHEN @record:= Num THEN @num:=1 END AS n
    FROM Logs, (
        SELECT @num:=0, @record:=NULL
    ) r
) a
WHERE a.n >= 3;