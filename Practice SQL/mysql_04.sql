-- MySQL Date Data Types
/*
 * MySQL comes with the following data types for storing a date or a date/time value in the database:
 * DATE - format YYYY-MM-DD
 * DATETIME - format: YYYY-MM-DD HH:MI:SS
 * TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
 * YEAR - format YYYY or YY
 * 
 * Tip: To keep your queries simple and easy to maintain, do not use time-components in your dates, unless you have to!
 * 
 * Note: Two dates can easily be compared if there is no time component involved!
*/

-- MySQL Views
/*
 * In SQL, a view is a virtual table based on the result-set of an SQL statement.
 * A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.
 * 
 * 
*/

-- Create a virtual table using VIEW, from single TABLE
CREATE VIEW show_table AS SELECT ID,name FROM myTable;

SELECT * FROM show_table;

-- Create a virtual table using VIEW, from MULTIPLE TABLE 
CREATE VIEW show_more_table AS SELECT m.ID, m.name, n.name AS husband_name from myTable m JOIN new_table n ON m.fk_id = n.id

SELECT * FROM show_more_table
