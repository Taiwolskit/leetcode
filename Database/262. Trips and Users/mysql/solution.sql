# Write your MySQL query statement below
SELECT
    Request_at as Day,
    ROUND(
        COUNT(IF(Status != 'completed', TRUE, NULL)) / COUNT(*),
    2) as `Cancellation Rate`
FROM Trips
JOIN Users as Clients on Clients.Users_Id = Trips.Client_Id
JOIN Users as Drivers on Drivers.Users_Id = Trips.Driver_Id
WHERE
    Clients.Banned = 'No'
    AND Drivers.Banned = 'No'
    AND Trips.Request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY Trips.Request_at