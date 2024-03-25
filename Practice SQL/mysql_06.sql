-- MySQL Limit and OFFSET
SELECT * FROM Persons
LIMIT 2

-- Limit = It acts has to number of records to be shown

SELECT * FROM Persons
LIMIT 2 OFFSET 2

-- OFFSET = It helps to ignore a certain number of records

-- MySQL MIN and MAX
SELECT MIN(total) FROM Invoice i ;

SELECT Max(total) FROM Invoice i ;

-- MySQL COUNT, SUM, AVG
SELECT COUNT(total) FROM Invoice i ;

SELECT SUM(total) FROM Invoice i ;

SELECT AVG(total) FROM Invoice i ;


-- MySQL LIKE Operator
-- WHERE CustomerName LIKE 'a%'	Finds any values that start with "a"
-- WHERE CustomerName LIKE '%a'	Finds any values that end with "a"
-- WHERE CustomerName LIKE '%or%'	Finds any values that have "or" in any position
-- WHERE CustomerName LIKE '_r%'	Finds any values that have "r" in the second position
-- WHERE CustomerName LIKE 'a_%'	Finds any values that start with "a" and are at least 2 characters in length
-- WHERE CustomerName LIKE 'a__%'	Finds any values that start with "a" and are at least 3 characters in length
-- WHERE ContactName LIKE 'a%o'	Finds any values that start with "a" and ends with "o"


-- MySQL IN Operator
-- The IN operator is a shorthand for multiple OR conditions.
-- eg:
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);


-- MySQL BETWEEN Operator
-- The BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.
-- The BETWEEN operator is inclusive: begin and end values are included.
-- BETWEEN
SELECT * FROM Invoice i WHERE CustomerId BETWEEN 15 AND 20

-- NOT BETWEEN
SELECT * FROM Invoice i WHERE CustomerId NOT BETWEEN 15 AND 20

-- MySQL JOINS
-- A JOIN clause is used to combine rows from two or more tables, based on a related column between them.
-- INNER = Returns records that have matching values in both tables
-- LEFT = Returns all records from the left table, and the matched records from the right table
-- RIGHT = Returns all records from the right table, and the matched records from the left table
-- OUTER = Returns all records from both tables

-- LEFT JOIN eg:
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

-- RIGHT JOIN eg:
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

-- CROSS JOIN eg:
SELECT column_name(s)
FROM table1
CROSS JOIN table2;


-- SELF JOIN 
-- A self join is a regular join, but the table is joined with itself.
-- Eg:
SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;
-- T1 and T2 are different table aliases for the same table.


-- MySQL UNION
-- Note: If some customers or suppliers have the same city, each city will only be listed once, 
-- because UNION selects only distinct values. Use UNION ALL to also select duplicate values!
-- Eg:
SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers
ORDER BY City;

SELECT a.ArtistId  FROM Artist a 
UNION ALL 
SELECT a2.ArtistId FROM Album a2 

-- MySQL ON Statement
SELECT t.Name, a.Title, a2.Name AS 'ARTIST'  FROM Track t 
JOIN Album a ON  t.AlbumId = a.AlbumId 
JOIN Artist a2 ON a.ArtistId  = a2.ArtistId 
GROUP BY a2.Name;


-- TODO check the below resources as well
-- https://www.w3schools.com/MySQL/mysql_having.asp
-- https://www.w3schools.com/MySQL/mysql_exists.asp
-- https://www.w3schools.com/MySQL/mysql_any_all.asp
-- https://www.w3schools.com/MySQL/mysql_insert_into_select.asp
-- https://www.w3schools.com/MySQL/mysql_case.asp
-- https://www.w3schools.com/MySQL/mysql_ifnull.asp
-- https://www.w3schools.com/MySQL/mysql_operators.asp