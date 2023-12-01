# MongoDB 05

## Concept of INDEXES in MongoDB

In MongoDB, indexes are data structures that improve the performance of queries by enabling
the database to quickly find specific documents without having to scan through the entire
collection. Indexes work by storing a copy of the values of a specific field or set of fields
in a sorted order. When you query a collection using that field, MongoDB can use the index to
quickly locate the documents that match the query criteria.

Here are some of the benefits of using indexes in MongoDB:

- Improved query performance: Indexes can significantly improve the performance of queries,
  especially for queries that involve filtering or sorting on specific fields.

- Reduced I/O operations: By using indexes, MongoDB can avoid having to scan through the
  entire collection for each query, which can reduce the number of I/O operations required.

- Lower memory usage: Indexes can also help to reduce memory usage by storing a smaller
  copy of the data.

However, there are also some trade-offs to consider when using indexes:

- Increased disk space: Indexes require additional disk space to store the data.

- Reduced write performance: Creating and updating indexes can impact write performance,
  as the database must maintain the index structures.

Some guidelines for when to create indexes in MongoDB:

- Create indexes on fields that are frequently used in queries: If a field is used in many
  queries, creating an index on that field can significantly improve performance.

- Create indexes on fields that are used for sorting: If a field is used for sorting in
  queries, creating an index on that field can improve the sorting performance.

- Consider the size of the collection: If the collection is small, the benefits of creating
  an index may not outweigh the drawbacks.

## Stats about the query

**To check the speed of your search query analysis**:

```js
db.users.explain("executionStats").find({ age: { $lte: 60 } });
```

```js
// output

{
  explainVersion: '2',
  queryPlanner: {
    namespace: 'accounts.users',
    indexFilterSet: false,
    parsedQuery: { age: { '$lte': 60 } },
    queryHash: 'B079B07C',
    planCacheKey: '892A6D6E',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      queryPlan: {
        stage: 'COLLSCAN',
        planNodeId: 1,
        filter: { age: { '$lte': 60 } },
        direction: 'forward'
      },
      slotBasedPlan: {
        slots: '$$RESULT=s5 env: { s2 = Nothing (SEARCH_META), s3 = 1701418514398 (NOW), s1 = TimeZoneDatabase(Africa/Accra...Canada/Atlantic) (timeZoneDB), s7 = 60 }',
        stages: '[1] filter {traverseF(s4, lambda(l1.0) { ((l1.0 <= s7) ?: false) }, false)} \n' +
          '[1] scan s5 s6 none none none none lowPriority [s4 = age] @"df82dfa0-25e6-416b-a634-90586c4a6a6f" true false '
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 15,
    executionTimeMillis: 3,
    totalKeysExamined: 0,
    totalDocsExamined: 17,
    executionStages: {
      stage: 'filter',
      planNodeId: 1,
      nReturned: 15,
      executionTimeMillisEstimate: 2,
      opens: 1,
      closes: 1,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      numTested: 17,
      filter: 'traverseF(s4, lambda(l1.0) { ((l1.0 <= s7) ?: false) }, false) ',
      inputStage: {
        stage: 'scan',
        planNodeId: 1,
        nReturned: 17,
        executionTimeMillisEstimate: 2,
        opens: 1,
        closes: 1,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        numReads: 17,
        recordSlot: 5,
        recordIdSlot: 6,
        fields: [ 'age' ],
        outputSlots: [ Long('4') ]
      }
    }
  },
  command: { find: 'users', filter: { age: { '$lte': 60 } }, '$db': 'accounts' },
  serverInfo: {
    host: 'varun-HP-Laptop-15-db1xxx',
    port: 27017,
    version: '7.0.4',
    gitVersion: '38f3e37057a43d2e9f41a39142681a76062d582e'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeEngine'
  },
  ok: 1
}
```

##

###

### Creating index

Create an index on age

- 1 == ascending ordered index

- -1 == descending ordered index

- The speed doesn't depend on the sort much because mongo can find the document from either direction

```js
db.users.createIndex({ age: 1 });
```

**Explanation**
Index scans (index stage) does not return the documents. They return the pointers to the documents.
Later on, the fetch stage reach out to the actual document using that pointer.

**Problem**

Let us say we want all the users with the ages greater than 10:

```js
db.users.find({ age: { $gte: 10 } });
```

This execution will actually be slower than the one WITHOUT INDEXING.

This is because `age > 10` covers 90% of the documents inside of the database. So our database had to cover 90% of the indexes and returns all the pointers => pointing to their respective databases. And further, it took time to fetch those documents for us, so it actually was slow.

The point is, you should not be using indexes for the queries which return a gigantic number of documents.

Rather, use indexes for fields which are usually unique and return less amount of documents

### Deleting indexes

To delete an index:

```js
db.users.dropIndex({ age: 1 });
```

### Getting indexes

```js
db.users.getIndexes();
```

### Creating UNIQUE INDEX

Mongo has `_id` as default index since it is unique. Let us say we have collection of users who's email IDs are ALWAYS unique AND you want to query user using email field frequently, then you can create a new unique index like:

```js
db.users.createIndex({ email: 1 }, { unique: true });
```

### Creating COMPOUND INDEXES

This is used to create indexes using two fields in your collection:

```js
db.users.createIndex({ age: 1, alive: 1 });
```

This would create an index field something like: `33 true`.

Now that you have created a compound index. using 'age' and 'alive'. you can query the data in the following ways

Query 1:

```js
db.users.find({ age: 35, alive: true });
```

Query 2:

```js
db.users.find({ age: 35 });
```

Query 3: This does not use index because we omitted the 'age' which comes before the alive

```js
db.users.find({ alive: true });
```

You always have to start indexing the properties from left to right and you cannot index from any other order.
