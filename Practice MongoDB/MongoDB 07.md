# MongoDB 07

## AGGREGATIONS in MongoDB (Code)

[Click here MongoDB Documentation for Aggregation](https://www.mongodb.com/docs/atlas/atlas-sp/stream-aggregation/)

Aggregation basically groups the data from multiple documents and operates in many ways on those grouped data in order to return one combined result.

Aggregation runs the query on the server side (mongodb) and returns the processed documents.

It works with STAGES:

`STAGE1` ==(altered_data)==> `STAGE2` ==(altered_data)==> `STAGE3`

Query:
If you are still having the users collection created in `MongoDB 01.md` or `MongoDB 02.md`

```js
// Run the code in MongoDB vscode
use("accounts"); // Select the DB
// Select the collection and the aggregation
db.users.aggregate([
  { $match: { "address.city": "New York City" } }, // stage 1 , Matching the address, city to 'New York City' with $match
  { $group: { _id: "$address.city", total: { $sum: 1 } } }, // stage 2, Group them to output as needed
]);
```

**NOTE:** The $count stage must be the last stage in the aggregation pipeline, as it always returns a single document.