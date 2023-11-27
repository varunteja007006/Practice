# MongoDB 03

Let us update the users whose age is below or equal to 40 with hobbies.

```js
db.users.updateMany(
  { age: { $lte: 40 } },
  {
    $set: {
      hobbies: [
        { title: "sports", frequency: 4 },
        { title: "cooking", frequency: 2 },
      ],
    },
  }
);
```

```js
db.users.updateMany(
  { hobbies: { $elemMatch: { title: "sports", frequency: { $gte: 3 } } } }, // elemMatch refers to the exact field on the document
  {
    $set: {
      "hobbies.$.frequency": 10, // $ refers to the exact(FIRST MATCHED ELEMENT) array element of the filtered document
    },
  }
);
```

In the same query condition above, find all the documents and change the 'frequency' for 'sports' field to +1

```js
db.users.updateMany(
  { hobbies: { $elemMatch: { title: "Sports", frequency: { $gte: 3 } } } },
  { $inc: { "hobbies.$.frequency": 1 } }
);
```
