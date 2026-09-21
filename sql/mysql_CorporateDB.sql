-- COMPANY DATABASE

-- EMPLOYEE
-- BRANCH
-- CLIENT
-- WORKS WITH
-- BRANCH SUPPLIER

-- Check this website - https://www.giraffeacademy.com/databases/sql/creating-company-database/

-- Practice

-- Find all employees
SELECT * FROM employee e;


-- Find all employees, order them by salary
-- Descending
SELECT * FROM employee e ORDER BY salary DESC;

-- Ascending
SELECT * FROM employee e ORDER BY salary;


-- Find all employees, order them by sex and then by name
SELECT * FROM employee e ORDER BY sex , first_name;


-- Find the first five employees
SELECT * FROM employee e LIMIT 5;

-- Find the firstname and lastname of the employees
SELECT first_name, last_name FROM employee e; 

-- Find the forename and surnames of all the employee
SELECT first_name AS forename , last_name AS surnames FROM employee e; 

-- Find all different genders
SELECT DISTINCT sex AS Gender FROM employee e; 

-- Find the number of employees
SELECT COUNT(*) FROM employee e; 

-- Find the number of female employees born after 1970
SELECT COUNT(emp_id) FROM employee e WHERE e.sex = 'F' AND birth_day >= "1971-1-1";

-- Find the average of all the employees salary
SELECT AVG(salary) FROM employee e;

-- Find the sum of all the employees salary
SELECT SUM(salary) FROM employee e; 



-- Find out how many males and females are there in employees
SELECT COUNT(*) FROM employee e;

SELECT COUNT(sex) FROM employee e;

-- ERROR - In aggregated query without GROUP BY, expression
SELECT COUNT(sex), sex FROM employee e;

-- CORRECT method
SELECT COUNT(sex), sex FROM employee e GROUP BY sex;


-- Find the total sales of each salesman
SELECT COUNT(ww.total_sales) AS 'No.of.Sales', SUM(ww.total_sales) AS 'Total Sales Amount' , e.first_name  FROM works_with ww JOIN employee e WHERE e.emp_id = ww.emp_id GROUP BY first_name; 


/*
 * 
 * 
 * 
 * --------------------------------END OF SECTION-----------------------------------------------------
 * 
 * 
 * 
*/

-- Using WILD CARDS
-- % = any # characters, _ = one character

-- Find any client who are an LLC
SELECT * FROM client c WHERE client_name LIKE '%LLC';

-- Correction to the name 
UPDATE branch_supplier SET supplier_name = "Stamford Labels" WHERE supplier_name LIKE '%Lables%'

-- Find any branch suppliers who has 'Labels' in their name
SELECT * FROM branch_supplier bs WHERE supplier_name LIKE '%Label%'


-- Find any employee born in october
SELECT * from employee e WHERE birth_day LIKE "____-10%"


-- Find any clients who are schools
SELECT * FROM client c WHERE client_name LIKE "%school%"


/*
 * 
 * 
 * 
 * --------------------------------END OF SECTION-----------------------------------------------------
 * 
 * 
 * 
*/

-- Using UNION

-- When using UNIONS there are set of rules:
-- 1. Same number of columns in the queries that are joined by UNION.
-- 2. The columns that are being selected in the queries should also have the same datatype.


-- Find a list of employee and branch names
SELECT first_name AS Names FROM employee e UNION SELECT branch_name FROM branch b UNION SELECT client_name FROM client c 


-- Find the list of all clients and branch suppliers names
SELECT client_name AS Names FROM client c UNION SELECT supplier_name FROM branch_supplier bs 


-- Find a list of all the money spent or earned by the company
-- For context the company earned money from the sales and spent money on the employee salaries 
SELECT (total_sales) AS 'Income/Expense' FROM works_with ww UNION SELECT (salary) FROM employee e 


/*
 * 
 * 
 * 
 * --------------------------------END OF SECTION-----------------------------------------------------
 * 
 * 
 * 
*/

-- Using JOINS

-- Insert another branch
INSERT INTO branch VALUES (4,'Buffalo', null, null) 


-- Find all branches and the names of their managers
SELECT e.first_name AS 'FIRSTNAME', e.last_name AS 'LASTNAME', b.branch_name AS 'BRANCH' 
FROM employee e 
JOIN branch b 
WHERE b.mgr_id = e.emp_id 


-- OTHER JOINS - LEFT & RIGHT


/*
 * 
 * 
 * 
 * --------------------------------END OF SECTION-----------------------------------------------------
 * 
 * 
 * 
*/

-- Find names of all employees who have sold over USD 30,000 to a single client
SELECT e.first_name AS 'Emp FirstName' ,ww.total_sales AS 'SALES REVENUE' FROM works_with ww 
JOIN employee e WHERE e.emp_id = ww.emp_id 
AND ww.total_sales > 30000;


-- Find all clients who are handled by the branch that Michael Scott manages.
-- Assume you know Micheal's ID

SELECT c.client_name  FROM client c
WHERE c.branch_id = (SELECT b2.branch_id  FROM branch b2 
WHERE b2.mgr_id = (SELECT emp_id FROM employee e WHERE first_name ='Michael' ) ) 


/*
 * 
 * 
 * 
 * --------------------------------END OF SECTION-----------------------------------------------------
 * 
 * 
 * 
*/

/*
 * In SQL, there are several referential actions that can be specified using foreign key constraints. 
 * These actions define what should happen to the dependent rows in a child table when a referenced row in a parent table is updated or deleted. 
 * Here are some commonly used referential actions:
 * 
 * 
 * ON DELETE CASCADE: When a referenced row in the parent table is deleted, all corresponding rows in the child table are automatically deleted.
 * ON DELETE SET NULL: When a referenced row in the parent table is deleted, the foreign key columns in the child table are set to NULL.
 * ON DELETE SET DEFAULT: When a referenced row in the parent table is deleted, the foreign key columns in the child table are set to their default values, if specified.
 * ON DELETE RESTRICT: Prevents deletion of a referenced row in the parent table if there are corresponding rows in the child table.
 * ON DELETE NO ACTION: Similar to ON DELETE RESTRICT, it prevents deletion of a referenced row in the parent table if there are corresponding rows in the child table. This is the default behavior if no other action is specified.
 * 
 * 
 * 
 * ON UPDATE CASCADE: When a referenced column in the parent table is updated, all corresponding columns in the child table are automatically updated.
 * ON UPDATE SET NULL: When a referenced column in the parent table is updated, the foreign key columns in the child table are set to NULL.
 * ON UPDATE SET DEFAULT: When a referenced column in the parent table is updated, the foreign key columns in the child table are set to their default values, if specified.
 * ON UPDATE RESTRICT: Prevents updating of a referenced column in the parent table if there are corresponding rows in the child table.
 * ON UPDATE NO ACTION: Similar to ON UPDATE RESTRICT, it prevents updating of a referenced column in the parent table if there are corresponding rows in the child table.
 * 
 * 
*/
			

/*
 * 
 * 
 * 
 * --------------------------------END OF SECTION-----------------------------------------------------
 * 
 * 
 * 
*/
			
-- CREATE
--     TRIGGER `event_name` BEFORE/AFTER INSERT/UPDATE/DELETE
--     ON `database`.`table`
--     FOR EACH ROW BEGIN
-- 		-- trigger body
-- 		-- this code is applied to every
-- 		-- inserted/updated/deleted row
--     END;

CREATE TABLE trigger_test (
     message VARCHAR(100)
);


DELIMITER $$
CREATE
    TRIGGER my_trigger BEFORE INSERT
    ON employee
    FOR EACH ROW BEGIN
        INSERT INTO trigger_test VALUES('added new employee');
    END$$
DELIMITER ;
INSERT INTO employee
VALUES(109, 'Oscar', 'Martinez', '1968-02-19', 'M', 69000, 106, 3);


DELIMITER $$
CREATE
    TRIGGER my_trigger BEFORE INSERT
    ON employee
    FOR EACH ROW BEGIN
        INSERT INTO trigger_test VALUES(NEW.first_name);
    END$$
DELIMITER ;
INSERT INTO employee
VALUES(110, 'Kevin', 'Malone', '1978-02-19', 'M', 69000, 106, 3);

DELIMITER $$
CREATE
    TRIGGER my_trigger BEFORE INSERT
    ON employee
    FOR EACH ROW BEGIN
         IF NEW.sex = 'M' THEN
               INSERT INTO trigger_test VALUES('added male employee');
         ELSEIF NEW.sex = 'F' THEN
               INSERT INTO trigger_test VALUES('added female');
         ELSE
               INSERT INTO trigger_test VALUES('added other employee');
         END IF;
    END$$
DELIMITER ;
INSERT INTO employee
VALUES(111, 'Pam', 'Beesly', '1988-02-19', 'F', 69000, 106, 3);


DROP TRIGGER my_trigger;
