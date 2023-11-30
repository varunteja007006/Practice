# MongoDB 04

Let us update the data,

Clear the hobbies

```js
db.users.updateMany({}, { $set: { hobbies: [] } });
```

Now update with new hobbies:

```js
db.users.updateMany(
  { age: { $lte: 40 } },
  { $push: { hobbies: { $each: ["reading", "singing", "sleeping"] } } }
);
```

### $elemMatch

```js
db.users.find({ hobbies: { $elemMatch: { $eq: "reading" } } });
```

### $eq

```js
db.users.find({ "address.city": { $eq: "Any" } });
```

### Difference between $elemMatch and $eq

The $elemMatch and $eq operators in MongoDB are both used to match documents based on the values of their fields. However, there are some key differences between the two operators.

The $elemMatch operator is used to match documents that contain an array field with at least one element that matches all the specified query criteria. This can be used to match documents that
contain a specific item, a specific number of items, or items that meet other criteria.

The $eq operator is used to match documents based on the value of a field. It can be used to match documents that contain a specific value, or to match documents that contain a value that is equal to another field.

The $elemMatch operator is more powerful than the $eq operator. This is because it allows you to match documents based on more complex criteria, such as the number of elements in an array, or the values of multiple fields. However, the $eq operator is simpler to use and can be more efficient for matching documents based on simple criteria.

###

#### $regex

```js
// option === i is for ignore case
db.movies.find({ "details.genres": { $regex: "act", $option: "i" } });
```

### To find docs with exact match of an array using ===> $all <===

The $all operator in MongoDB selects documents where the value of a field is an array that contains all of the specified elements. It is a versatile operator that can be used to match documents based on a variety of criteria, including matching against multiple values, matching against nested arrays, and matching against arrays of embedded documents.

```js
db.users.find({ hobbies: { $all: ["reading", "sleeping"] } });
```

### To find the docs if size of array is 3

```js
db.users.find({ hobbies: { $size: 3 } });
```
