-- DAY 3
/*
    TODO - Topics of Constraints -> NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT, CREATE_INDEX
*/

CREATE TABLE new_table (
    id INT PRIMARY KEY AUTO_INCREMENT, -- PRIMARY KEY - it makes the column not null, unique at same time
    -- AUTO_INCREMENT will increment the id
    name VARCHAR(200),
    age INT CHECK (age > 18), -- CHECK constraint to validate the data being inserted
    college VARCHAR(200) UNIQUE, -- UNIQUE to make sure the values in the column are unique
    city VARCHAR(200) DEFAULT 'Kakinada' -- DEFAULT to set the default value if no value is passed 
    -- in that column
);

DESCRIBE new_table

SELECT * FROM new_table

INSERT INTO new_table (name,age, college) VALUES ('Sam', 90, 'Junior college')


-- Check contraint violated
INSERT INTO new_table (name,age, college) VALUES ('Sam Jam', 10, 'Junior college Pro')


-- Duplicate entry for 'new_table.college'
INSERT INTO new_table (name,age, college) VALUES ('Sam Jam', 19, 'Junior college')


INSERT INTO new_table (name,age, college) VALUES ('Altman', 30, 'Junior college Pro')


-- Day 4
-- Add an NOT NULL Column
ALTER TABLE new_table ADD (account_active BOOLEAN NOT NULL)

-- account_active is NOT NULL hence it throws an error that it does'nt have a default value
INSERT INTO new_table (name,age, college) VALUES ('Bobby', 23, 'Jr college Pro')

-- Alter the NOT NULL Column to have a default value
ALTER TABLE new_table MODIFY account_active BOOLEAN NOT NULL DEFAULT false

-- Now try to add the same insert statement
INSERT INTO new_table (name,age, college) VALUES ('Bobby', 23, 'Jr college Pro')


-- Day 5
-- Drop UNIQUE constraint
ALTER TABLE new_table DROP INDEX college

-- Add back the UNIQUE constraint
ALTER TABLE new_table MODIFY college VARCHAR(200) UNIQUE

-- Primary key on multiple columns
CREATE TABLE myTable (
	ID INT AUTO_INCREMENT,
	name VARCHAR(200),
	age INT,
	CONSTRAINT pk_person PRIMARY KEY (ID, name)
)

DESCRIBE myTable

-- In the example above there is only ONE PRIMARY KEY (PK_Person). However, the VALUE of the primary key is made up of TWO COLUMNS (ID + name).

-- If you use ALTER TABLE to add a primary key, the primary key column(s) must have been declared to not contain NULL values (when the table was first created).
