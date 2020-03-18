# Write your MySQL query statement below
SELECT id, 
       Max(CASE 
             WHEN month = 'Jan' THEN revenue 
             ELSE NULL 
           end) AS Jan_Revenue, 
       Max(CASE 
             WHEN month = 'Feb' THEN revenue 
             ELSE NULL 
           end) AS Feb_Revenue, 
       Max(CASE 
             WHEN month = 'Mar' THEN revenue 
             ELSE NULL 
           end) AS Mar_Revenue, 
       Max(CASE 
             WHEN month = 'Apr' THEN revenue 
             ELSE NULL 
           end) AS Apr_Revenue, 
       Max(CASE 
             WHEN month = 'May' THEN revenue 
             ELSE NULL 
           end) AS May_Revenue, 
       Max(CASE 
             WHEN month = 'Jun' THEN revenue 
             ELSE NULL 
           end) AS Jun_Revenue, 
       Max(CASE 
             WHEN month = 'Jul' THEN revenue 
             ELSE NULL 
           end) AS Jul_Revenue, 
       Max(CASE 
             WHEN month = 'Aug' THEN revenue 
             ELSE NULL 
           end) AS Aug_Revenue, 
       Max(CASE 
             WHEN month = 'Sep' THEN revenue 
             ELSE NULL 
           end) AS Sep_Revenue, 
       Max(CASE 
             WHEN month = 'Oct' THEN revenue 
             ELSE NULL 
           end) AS Oct_Revenue, 
       Max(CASE 
             WHEN month = 'Nov' THEN revenue 
             ELSE NULL 
           end) AS Nov_Revenue, 
       Max(CASE 
             WHEN month = 'Dec' THEN revenue 
             ELSE NULL 
           end) AS Dec_Revenue 
FROM   department 
GROUP  BY id ASC 