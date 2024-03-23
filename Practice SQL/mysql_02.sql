-- DAY 3

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


-- Check constraint violated
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

ALTER TABLE myTable ADD (unique_id VARCHAR(200))

-- If you use ALTER TABLE to add a primary key, the primary key column(s) must have been declared to not contain NULL values (when the table was first created).

ALTER TABLE myTable MODIFY unique_id VARCHAR(200) NOT NULL

ALTER TABLE myTable MODIFY pk_person PRIMARY KEY (ID,name,unique_id)

-- Error

ALTER TABLE myTable DROP PRIMARY KEY


-- Alter the table to auto-increment

ALTER TABLE myTable MODIFY COLUMN ID INT AUTO_INCREMENT,    
DROP PRIMARY KEY,
ADD PRIMARY KEY (ID, name, unique_id);


-- Adding FOREIGN KEY
-- First create a column that is similar to PRIMARY KEY of the other table 'new_table'
ALTER TABLE myTable ADD (fk_id INT)

-- Now refer that PRIMARY KEY has FOREIGN KEY in this table 'myTable'
ALTER TABLE myTable ADD CONSTRAINT fk_id FOREIGN KEY (fk_id) REFERENCES new_table(id);

SELECT * from myTable

INSERT INTO myTable (name,age,unique_id,fk_id) VALUES ('Ms. Sam',85,'IH12',1)

-- Drop the FOREIGN KEY
ALTER TABLE myTable DROP FOREIGN KEY fk_id;


