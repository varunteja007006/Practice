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

**You can also use the above query to reset the documents**

Check the results

```js
db.users.find({ age: { $lte: 40 } });
```

## Update operation on Array

### Update single element(FIRST MATCH) in an array using ==> $ <==

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

**NOTE: In the above $ refers to the exact(FIRST MATCHED ELEMENT) array element of the filtered document**

###

In the same query condition above, find all the documents and change the 'frequency' for 'sports' field to +1

```js
db.users.updateMany(
  { hobbies: { $elemMatch: { title: "sports", frequency: { $gte: 3 } } } },
  { $inc: { "hobbies.$.frequency": 1 } }
);
```

### Update all elements in an array using ==> $[] <==

Find all the people who's hobbies is Sports and frequency is $gte 2 and update their frequency to +20 for all their hobbies (for all the elements in their hobbies array)

```js
db.users.updateMany(
  {
    "hobbies.title": "sports",
    "hobbies.frequency": { $gte: 2 },
  },
  {
    $inc: { "hobbies.$[].frequency": +20 }, // $[] targets all the elements in the array
  }
);
```

###

### Update multiple elements in an array using ==> $[el] <==

Find all the people who's hobbies frequency are greater than 2 . Now update all their hobbies frequencies who's frequency is greater than 3 to +10.
<br />

**NOTE: it may also return docs/people who have some hobbies who's frequency is less than 2**

**The idea is to find docs with frequencies > 2 and update only those elements.**
<br />
You can neither use `$` because it only updates first matched element nor `$[]` as it updates all.

```js
// This will take 3 arguments

db.users.updateMany(
  { "hobbies.frequency": { $gt: 2 } }, // filter
  { $inc: { "hobbies.$[el].frequency": +10 } }, // setting the values (not saving yet)
  { arrayFilters: [{ "el.frequency": { $gt: 2 } }] } // setting it(condition) on particular elements inside the array
);
```

### Update multiple elements in an array using ==> $[el] <==

Find all the people who's hobbies frequency are greater than 2. Now update all their hobbies frequencies who's frequency is greater than 3 to +10.
<br />
**NOTE: it may also return docs/people who have some hobbies who's frequency is less than 2**

**The idea is to find docs with frequencies > 2 and update only those elements.**
<br />
You can neither use `$` because it only updates first matched element nor `$[]` as it updates all.

**This will take 3 arguments**

```js
// This will take 3 arguments

db.users.updateMany(
  { "hobbies.frequency": { $gt: 2 } }, // filter
  { $inc: { "hobbies.$[el].frequency": +10 } }, // setting the values (not saving yet)
  { arrayFilters: [{ "el.frequency": { $gt: 2 } }] } // setting it(condition) on particular elements inside the array
);
```

##

### Add element to an array field inside the document using ==> $push <==

Find the person with name Clint and add another hobby to its hobby array field

```js
db.users.updateOne(
  { firstname: "Clint" },
  { $push: { hobbies: { title: "Swimming", frequency: 3 } } }
);
```

### Add multiple elements to array field inside the document using => $push w/ $each <==

Find the person with name Max and add two hobbies to the hobbies array field

```js
db.users.updateOne(
  { firstname: "Clint" },
  {
    $push: {
      hobbies: {
        $each: [
          { title: "Driving", frequency: 3 },
          { title: "Hiking", frequency: 5 },
        ],
      },
    },
  }
);
```

You can add **$sort** to sort the entire array whilst pushing an element to it:

```js
db.users.updateOne(
  { name: "Max" },
  {
    $push: {
      hobbies: {
        $each: [
          { title: "Farming", frequency: 3 },
          { title: "Gliding", frequency: 5 },
        ],
        $sort: { frequency: -1 },
      },
    },
  }
);
```

Now we made a mistake, some titles start with lower case and some upper case 😥. Lets correct our mistake

```js
db.users.updateOne(
  { firstname: "Clint" }, // filter the user
  { $set: { "hobbies.$[el].title": "farming" } }, // update data
  { arrayFilters: [{ "el.title": { $eq: "Farming" } }] } // add filter so that only one element of array with title 'Farming' will change.
);
```

##

### Remove element from the array field inside the document using ==> $pull <==

Remove the Hiking hobby from the array field

```js
db.users.updateOne(
  { firstname: "Clint" },
  { $pull: { "hobbies.title": "farming" } }
);
```

Oh no! we got an error ⚠️

    MongoServerError: Cannot use the part (title) of (hobbies.title) to traverse the element ({hobbies: [ { title: "farming", frequency: 12 }, { title: "Gliding", frequency: 11 }, { title: "sports", frequency: 4 }, { title: "swimming", frequency: 3 }, { title: "cooking", frequency: 2 }, { title: "Shooting", frequency: 2 }, { title: "Driving", frequency: 1 } ]})

Lets try the below code snippet now

```js
db.users.updateOne(
  { firstname: "Clint" },
  { $pull: { hobbies: { title: "farming" } } }
);
```

Hooray!! it worked 😄

### Remove multiple elements from the array field inside the document using ==> $pull <==

```js
db.users.updateOne(
  { firstname: "Clint" }, // filter the record
  { $pull: { hobbies: { frequency: { $in: [2, 4] } } } } // remove multiple records using $in for range
);
```

Remove all the elements from the Array 'hobbies'

```js
db.users.updateOne(
  { firstname: "Clint" }, // filter the record
  { $pull: { hobbies: {} } } // remove multiple records using $in for range
);
```

### Remove multiple elements from the array field inside the document using ==> $pullAll <==

**NOTE: This won't work well with array of documents (use above example for that)**

Dataset:

```js
db.survey.insertOne({ scores: [0, 2, 5, 5, 1, 0] });
```

Solution:

```js
db.survey.update(
  { _id: ObjectId("6564901d2207d6b8f568d6c2") },
  { $pullAll: { scores: [0, 5] } }
);
```

Updated dataset:

```js
db.survey.find();
```

```sh
[ { _id: ObjectId('6564901d2207d6b8f568d6c2'), scores: [ 2, 1 ] } ]
```
