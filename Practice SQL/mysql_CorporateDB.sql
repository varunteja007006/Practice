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