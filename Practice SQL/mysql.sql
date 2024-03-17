-- This is a Practice Database

/*
	This gives understanding of some basic SQL commands
	Tutorial followed https://youtu.be/HXV3zeQKqGY?si=gU9AEQZnIy0FL9T8
*/


USE Practice

CREATE TABLE dummy (id INT PRIMARY KEY, name VARCHAR(200), age INT)

ALTER TABLE dummy ADD (gpa DECIMAL)

ALTER TABLE dummy MODIFY gpa DECIMAL(3,2);

DESCRIBE dummy

INSERT INTO dummy (id, name, age, gpa) VALUES (1, 'varun', 10, 3.5)

SELECT * FROM dummy

INSERT INTO dummy VALUES (2, 'Teja', 10, NULL)
