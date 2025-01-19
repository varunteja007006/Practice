Handling a large dataset of 1 lakh rows in a stored procedure can indeed lead to performance issues, especially when you're using temp tables and multiple queries for pagination. Here are some optimization strategies you can consider to improve the performance:

### 1. **Optimize Temp Table Usage**

- **Indexes on Temp Tables**: Ensure that your temp table is properly indexed on the columns you will use for filtering and sorting (e.g., user type, pagination offset, etc.). Indexes can dramatically improve the performance of queries that involve large datasets.

  Example:

  ```sql
  CREATE TABLE #TempTable (
      id INT PRIMARY KEY,
      userType VARCHAR(50),
      -- other columns
  );
  CREATE INDEX idx_userType ON #TempTable(userType);
  ```

- **Use `SELECT INTO` Instead of `INSERT INTO`**: Instead of inserting rows into the temp table row by row, you can use `SELECT INTO` to create the temp table and populate it in one go. This can improve performance as it reduces the overhead of multiple insert operations.

  Example:

  ```sql
  SELECT id, userType, other_columns
  INTO #TempTable
  FROM YourMainTable
  WHERE conditions
  ```

### 2. **Optimize Query for Total Records**

Instead of doing a separate query to count the total number of records, try using the **`COUNT()`** in a `SELECT` query without fetching all rows. If you need the total count of records for pagination, you can directly count the rows from your source table or temp table without the need for another select query.

For example:

```sql
SELECT COUNT(*)
FROM #TempTable
WHERE condition
```

Or, better yet, **skip creating the temp table for the count query** and just run the count query directly on the main table with the necessary filters. If possible, calculate the total count before fetching the paged data.

### 3. **Optimize Pagination**

- Instead of doing one query to fetch the total count and then another to fetch the paged rows, consider using **`OFFSET`** and **`FETCH NEXT`** (available in SQL Server and other RDBMS) to fetch the rows directly based on the pagination logic. This way, you can do both in one query.

For example:

```sql
SELECT id, userType, other_columns
FROM YourMainTable
WHERE userType = @userType
ORDER BY id
OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY;
```

In this case, you're fetching the paginated rows and can also include a `COUNT()` in a separate query if needed. However, if your filtering (like userType) and sorting are already optimal, this approach reduces the need for the temp table and multiple queries.

### 4. **Limit Data Retrieval**

- If you don’t need all the rows from your temp table, avoid loading unnecessary data into the temp table. Ensure that the data inserted into the temp table is already filtered and aggregated as much as possible based on your conditions.

- If you're selecting only specific columns, avoid selecting unnecessary columns. For example, if you only need the `id` and `userType`, select only those columns to save memory and improve performance.

### 5. **Consider Using `CTE` (Common Table Expressions)**

If you need to filter based on user types or other conditions, using **CTEs** might offer a more efficient way to handle the logic. Instead of using temp tables, CTEs allow you to work with intermediate results within the same query scope, which could reduce the overhead of temporary table management.

Example:

```sql
WITH FilteredData AS (
    SELECT id, userType, other_columns
    FROM YourMainTable
    WHERE userType = @userType
)
SELECT COUNT(*) FROM FilteredData;  -- Total records count
SELECT id, userType, other_columns
FROM FilteredData
ORDER BY id
OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY;  -- Paginated data
```

### 6. **Database Tuning**

- **Proper Indexing**: Ensure that the main table (or temp table if used) is properly indexed, particularly on the columns that you use for filtering and sorting (e.g., `userType`, `id`, etc.).
- **Query Execution Plans**: Check the execution plan for your queries to identify bottlenecks. If necessary, adjust your queries or indexing to make them more efficient.

### 7. **Batch Processing**

If fetching the data in one go is not necessary and you can process data in batches, you can consider breaking the large query into smaller chunks and fetching them incrementally. This will reduce memory usage and could speed up response times.

### Example of Optimized Query with Pagination and Count:

```sql
-- Query to get the total count of records
SELECT COUNT(*)
FROM YourMainTable
WHERE userType = @userType;

-- Query to get the paginated rows
SELECT id, userType, other_columns
FROM YourMainTable
WHERE userType = @userType
ORDER BY id
OFFSET @offset ROWS FETCH NEXT @limit ROWS ONLY;
```

### Conclusion:

- Focus on reducing the number of queries and temp table usage.
- Use indexing on relevant columns.
- Consider using `OFFSET` and `FETCH` for pagination instead of doing multiple selects.
- If possible, try using CTEs instead of temp tables.

By implementing these strategies, you should see an improvement in the performance of your stored procedure when handling large datasets.
