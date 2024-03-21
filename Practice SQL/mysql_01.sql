-- This is a Practice Database

/*
	This gives understanding of some basic SQL commands
	Tutorial followed https://youtu.be/HXV3zeQKqGY?si=gU9AEQZnIy0FL9T8
	Tutorial Notes https://www.giraffeacademy.com/databases/sql/creating-company-database/
*/

-- Select the database to switch to
USE Practice

-- Create a table
CREATE TABLE dummy (id INT PRIMARY KEY, name VARCHAR(200), age INT)

-- Alter the table by adding a new column
ALTER TABLE dummy ADD (gpa DECIMAL)

-- Alter the table's column i.e modify
ALTER TABLE dummy MODIFY gpa DECIMAL(3,2);

-- This command will describe the table and the data types of the columns
DESCRIBE dummy

-- Insert values in the columns
INSERT INTO dummy (id, name, age, gpa) VALUES (1, 'varun', 10, 3.5)

-- Show all the rows(data) stored in the table
SELECT * FROM dummy

-- Insert null values
INSERT INTO dummy VALUES (2, 'Teja', 10, NULL)


-- Day 2

-- Copy dummy table to dummyTwo
CREATE TABLE dummy2 AS SELECT id, name FROM dummy WHERE age < 10

-- To check the copied table
DESCRIBE dummy2

-- Check all the data inside the table
SELECT * from dummy2

-- Modify the id col in dummy2 to auto-increment
ALTER TABLE dummy2 MODIFY id INT AUTO_INCREMENT PRIMARY KEY;





-- Drop the dummy2 table = Delete the table and its data.
DROP TABLE dummy2

-- Truncate the table =  This will just delete the data inside the table not the table.
TRUNCATE TABLE dummy2

-- Alter the table by adding a new column
ALTER TABLE dummy2 ADD (gpa DECIMAL)

-- Drop column from the table
ALTER TABLE dummy2 DROP COLUMN name
