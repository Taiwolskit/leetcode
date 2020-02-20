# Write your MySQL query statement below
SELECT b.Id
FROM Weather a, Weather b
WHERE b.Temperature > a.Temperature
AND TO_DAYS(b.RecordDate) - TO_DAYS(a.RecordDate) = 1;