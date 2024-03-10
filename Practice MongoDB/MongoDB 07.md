# MongoDB 07

## AGGREGATIONS in MongoDB (Code)

[Click here MongoDB Documentation for Aggregation](https://www.mongodb.com/docs/atlas/atlas-sp/stream-aggregation/)

Aggregation basically groups the data from multiple documents and operates in many ways on those grouped data in order to return one combined result.

Aggregation runs the query on the server side (mongodb) and returns the processed documents.

It works with STAGES:

`STAGE1` ==(altered_data)==> `STAGE2` ==(altered_data)==> `STAGE3`

If you are still having the users collection created in `MongoDB 01.md` or `MongoDB 02.md`

Query 1:

```js
// Run the code in MongoDB vscode
use("accounts"); // Select the DB
// Select the collection and the aggregation
db.users.aggregate([
  { $match: { "address.city": "New York City" } }, // stage 1 , Matching the address, city to 'New York City' with $match
  { $group: { _id: "$address.city", total: { $sum: 1 } } }, // stage 2, Group them to output as needed
]);
```

Query 2: Find all the alive users and group them based on the city and keep a count of them.

```js
// Run the code in MongoDB vscode
use("accounts"); // Select the DB
// Select the collection and the aggregation
db.users.aggregate([
  { $match: { alive: true } }, // match criteria
  { $group: { _id: "$address.city", total: { $sum: 1 } } }, // count based on address.city which we mention in _id
  { $sort: { total: -1 } }, // We are sorting based onn the total count in desc by mentioning -1
]);
```

Query 3: Count the hobbies that all the users have.

```js
// Run the code in MongoDB vscode
use("accounts"); // Select the DB
// Select the collection and the aggregation
db.users.aggregate([
  {
    $unwind: {
      path: "$hobbies",
    },
  },
  { $group: { _id: "$_id", numberOfHobbies: { $sum: 1 } } },
  { $group: { _id: null, totalHobbies: { $sum: "$numberOfHobbies" } } },
]);
```

Explanation:

$unwind: This stage deconstructs an array field from the input documents to output a document for each element. Each output document contains the original document and the element as a separate field. In this case, the hobbies array field of each user document is deconstructed.

After this stage, the documents in the users collection are transformed into multiple documents with each hobby being a separate document.

$group: This stage groups input documents by some specified expression and outputs a document for each distinct grouping. In this case, the stage groups documents by the `_id` field, which ensures that all hobbies of a user are grouped together. The $sum accumulator is used to count the number of hobbies per user, resulting in a numberOfHobbies field for each group.

After this stage, the documents are transformed into documents with the `_id` field representing the user and the numberOfHobbies field representing the count of hobbies for that user.

$group: This stage is similar to the previous one, but in this case, the documents are grouped regardless of the user. The $sum accumulator is used to add up the numberOfHobbies field value to get the total number of hobbies across all users.

**NOTE:** The $count stage must be the last stage in the aggregation pipeline, as it always returns a single document.
