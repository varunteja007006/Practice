-- This is a Practice Database

/*
	This gives understanding of some basic SQL commands
	Tutorial followed https://youtu.be/HXV3zeQKqGY?si=gU9AEQZnIy0FL9T8
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
