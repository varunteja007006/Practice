# SQL

Setup a postgresql or mysql on your linux machine. Also install DB Beaver to visualize and run sql queries.

### Database types:

1. Relational Database (SQL)
   Organize data into one or more tables.

   - Each table has columns and rows.
   - A unique key identifies each row.

2. Non-Relational Database (NoSQL)
   Organize data into anything other than traditional tables.
   - Key/Value stores.
   - Documents such as JSON, XML, etc.
   - Graphs. (Relational Nodes)
   - Flexible Tables.

### Relational Database Management System (RDBMS)

They help users to create and maintain their relational database.
mySQL,
Oracle,
PostgreSQL,
MariaDB, etc...

Structured Query Language (SQL)

- Standardized language for interacting with RDBMS.
- Can perform CRUD operations. (User management, security, backup, etc..)
- Used to define tables and structures.
- SQL code on one RDBMS might not be portable to another.

### Non-Relational Database Management System

They help users to create and maintain their non-relational database.
mongoDB,
dynamoDB,
apache Cassandra,
firebase, etc...

- No set language standard.
- Most Non-Relational Database Management System have their own language CRUD and administrative tasks.

#### Database Queries

Queries are requests made to the database management system for specific information. It acts as a
set of instructions to relational database management system to help us query the required data.

## SQL

### Keys - Primary, Foreign, Surrogate, Natural.

**Primary Key**<br />
A primary key in a database table uniquely identifies each record in the table. It must contain unique values and cannot have NULL values. Typically, a primary key is a single column, but it can also be a combination of columns. Primary keys are crucial for maintaining data integrity and for establishing relationships between tables.

**Foreign Key**<br />
A foreign key is a column or a set of columns in a table that establishes a link between data in two tables. It creates a relationship between the data in two tables by referencing the primary key of another table. Foreign keys help enforce referential integrity, ensuring that data remains consistent across related tables.

**Surrogate Key**<br />
A surrogate key is a unique identifier for each row in a table that is generated by the database system, rather than being based on natural keys. Surrogate keys are often integers or system-generated values that have no business meaning but are used solely for the purpose of uniquely identifying records. They are useful when natural keys are not suitable or when there is no suitable candidate for a primary key.

**Natural Key**<br />
A natural key is a column or a set of columns in a table that uniquely identifies a record based on the inherent characteristics of the data. Natural keys are derived from the data itself and have a meaningful business significance. Examples of natural keys include social security numbers, email addresses, or product codes. Using natural keys can simplify data management and querying, as they reflect real-world attributes of the data.

**Candidate Key**<br />
Candidate keys are potential keys that can uniquely identify each row in a table.
They are unique and can uniquely identify each record in a table.
Every table must have at least one candidate key, and a table can have multiple candidate keys, but only one will be chosen as the primary key.

**Super Key**<br />
A super key is a set of attributes that can uniquely identify rows in a table.
It may contain additional non-unique columns along with the unique ones.
Super keys are used to uniquely identify rows in a broad sense.

**Composite Key**<br />
A composite key is a combination of two or more columns that together uniquely identify each record in a table.
It is used when a single column is not sufficient to uniquely identify rows.
Different combinations of attributes may give different accuracy in terms of identifying rows uniquely.

**Unique Key**<br />
A unique key is a column or set of columns that uniquely identify tuples in a database.
It can contain NULL values and helps prevent duplicate values in a column.
Unique keys improve data retrieval performance by making searches faster and more efficient.

**Alternate Key**<br />
Alternate keys are secondary candidate keys that can uniquely identify rows in a table.
They contain all the properties needed to become a candidate key but are not chosen as the primary key.
An alternate key can be a set of one or more attributes that uniquely identify a record.

### SQL is hybrid of 4 different languages

1. Data Query Language(DQL) - Query information.
2. Data Definition Language(DDL) - Defining database schemas.
3. Data Control Language(DCL) - Controlling access to data and permission management.
4. Data Manipulation Language(DML) - Used for inserting, updating, deleting data from the database.