-- CHECK constraint
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);
-- DROP CHECK constraint
ALTER TABLE Persons DROP CONSTRAINT CHK_Person

-- ADD CHECK constraint
ALTER TABLE Persons ADD CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')

-- ERROR check constraint violated
INSERT INTO Persons VALUES (1, 'ABC', 'DEF', 10, 'Sandnes')
-- ERROR check constraint violated
INSERT INTO Persons VALUES (1, 'ABC', 'DEF', 18, 'NOT Sandnes')

-- successful insertion
INSERT INTO Persons VALUES (1, 'ABC', 'DEF', 19, 'Sandnes')

-- Add DEFAULT constraint
ALTER TABLE Persons ALTER City SET DEFAULT 'Sandnes';

-- Drop DEFAULT constraint
ALTER TABLE Persons ALTER City DROP DEFAULT;