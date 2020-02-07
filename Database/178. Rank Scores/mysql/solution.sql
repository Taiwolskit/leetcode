# Write your MySQL query statement below
SELECT s.Score, 
       r.rank 
FROM   Scores AS s 
       LEFT JOIN (SELECT s.Score, 
                         CAST((@cnt := @cnt + 1) AS signed) AS Rank 
                  FROM   (SELECT Score 
                          FROM   Scores 
                          GROUP  BY Score 
                          ORDER  BY Score DESC) AS s 
                         CROSS JOIN (SELECT @cnt := 0) AS d) AS r 
              ON r.Score = s.Score 
ORDER  BY s.Score DESC; 