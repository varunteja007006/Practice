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

