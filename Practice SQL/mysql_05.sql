-- TODO Learn Wildcards, UNIONS, JOINS

-- MySQL AND, OR, and NOT Operators

/*
 * The AND and OR operators are used to filter records based on more than one condition:
 * The AND operator displays a record if all the conditions separated by AND are TRUE.
 * The OR operator displays a record if any of the conditions separated by OR is TRUE.
 * 
 * More operators
 * < (less than), > (greater than) , <= (less than or equal to), >= (greater than or equal to), = (equal to), <> (not equal to)
*/

ALTER TABLE Persons MODIFY COLUMN ID INT AUTO_INCREMENT PRIMARY KEY

ALTER TABLE Persons DROP CHECK CHK_Person

INSERT INTO Persons (LastName,FirstName,Age,City) VALUES ('YUZ', 'ZUU', 20, 'CHINA')

INSERT INTO Persons (LastName,FirstName,Age,City) VALUES ('IOP', 'POI', 20, 'BNG'),('INV', 'UQA', 46, 'HYD')

SELECT * from Persons WHERE age < 20 OR City = "BNG"

SELECT * from Persons WHERE age < 20 AND City = "BNG"

SELECT * from Persons WHERE NOT City = "BNG"


-- ORDER BY is used to sort the result-set in ascending or descending order.

SELECT * from Persons WHERE NOT City = "BNG" ORDER BY City 

SELECT * from Persons WHERE NOT City = "BNG" ORDER BY City DESC 

-- First ORDER BY City and then LastName in descending order
SELECT * from Persons ORDER BY City, LastName DESC

-- First ORDER BY City and then LastName in descending order and then LIMIT the records to 2
SELECT * from Persons ORDER BY City, LastName DESC LIMIT 2

-- IS NULL , IS NOT NULL
ALTER TABLE Persons ADD (Country VARCHAR(200))

SELECT * from Persons WHERE Country IS NULL

INSERT INTO Persons (LastName,FirstName,Age,City,Country) VALUES ('LALA','VALA',33,'JM','IND')

SELECT * from Persons WHERE Country IS NOT NULL



-- MySQL UPDATE

/*
 * Note: Be careful when updating records in a table! Notice the WHERE clause in the UPDATE statement. 
 * The WHERE clause specifies which record(s) that should be updated. 
 * If you omit the WHERE clause, all records in the table will be updated!
 * 
 * 
 * */

UPDATE Persons SET LastName = 'LALA L' WHERE ID = 5


-- Using <> Operator

SELECT * FROM Persons WHERE age > 30

-- Now lets use <>
SELECT * FROM Persons WHERE age > 30 AND City <> 'HYD'


-- Using IN Operator

SELECT * FROM Persons WHERE City IN ('JM', 'BNG', 'CHINA')
