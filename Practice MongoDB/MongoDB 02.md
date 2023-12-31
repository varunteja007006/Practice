# MongoDB 02

This is a continuation for the MongoDB 01.md

We discuss CRUD operations in mongodb

## C R U D Operations:

    - C means Create

    - R means Read

    - U means update

    - D means Delete

    The operations done on a database.

### C for Create

Insert a single document into collections 'users'

```js
db.users.insertOne({
  personID: 25,
  firstname: "Tommy",
  lastname: "Ja",
  dob: new Date("2004-12-25"),
  age: 19,
  debt: 400,
  balance: 34,
  email: "tommy@dummy.com",
  phone: 11111111,
  address: {
    street: "434 main road",
    ity: "Alps",
    pincode: "423423",
  },
  alive: true,
});
```

Insert Many documents into collections

```js
db.users.insertMany([ {....}, {....}, {.....} ])
```

Pass an array of documents. Each document is a object.

**NOTE: Sample data can be found in 'MongoDB 01.md' file.**

### R for Read

Show all documents in the collection

```js
db.users.find();
```

To show only required keys of a document. Pass two arguments in find().

**First argument** is 'query to fetch' condition. <br />
<br />
**Second argument** is the condition to specify which keys have to be shown by mentioning '1', rest of the keys will not be shown.  
Similarly, to specify which keys should not to be shown mention '0', rest of the keys will be shown.

```js
db.users.find({ age: { $lt: 20 } }, { personID: 1, firstname: 1, lastname: 1 });
```

Here inside find(),

- **first argument** is {age: { $lt: 20}} condition to fetch query, i.e age less than 20.

- **second argument** is { personID:1, firstname:1, lastname:1 } condition to specify required keys,
  i.e show documents with keys personID, firstname, lastname since they are mentioned with '1'.

More Commands that can used along with find()

- **sort by ascending**

  ```js
  db.users.find().sort({ personID: 1 });
  ```

- **sort by descending**

  ```js
  db.users.find().sort({ personID: -1 });
  ```

- **limit the documents to show**

  ```js
  db.users.find().limit(5);
  ```

- **Skip the documents and show the rest**

  ```js
  db.users.find().skip(5);
  ```

  **NOTE: Make sure to always use skip() before limit()**

- Available comparison operators

  - **$gt = 'greater than'**

    ```js
    db.users.find({ age: { $gt: 58 } });
    ```

  - **$gte = 'greater than equal to'**

    ```js
    db.users.find({ age: { $gte: 58 } });
    ```

  - **$lt = 'less than'**

    ```js
    db.users.find({ age: { $lt: 20 } });
    ```

  - **$gte = 'less than equal to'**

    ```js
    db.users.find({ age: { $lt: 53 } });
    ```

  Using multiple comparison operators

  ```js
  db.users.find({ age: { $gt: 50, $lt: 60 } });
  ```

**AND Operator**

```js
db.users.find({ age: { $lt: 40 }, debt: { $lt: 1000 } });
```

```js
db.users.find({ $and: [{ age: { $lt: 40 } }, { debt: { $lt: 1000 } }] });
```

**OR Operator**

```js
db.users.find({ $or: [{ age: { $lte: 3 } }, { firstname: "Peter" }] });
```

**NOT Operator**

```js
db.users.find({ age: { $not: { $lt: 50 } } });
```

**NOTE: It will also return documents which has no key; something greater than or less than will not do**

**OPERATOR $in**

Use $in to get the documents that match the given values

```js
db.users.find({ age: { $in: [53, 100] } }); // get documents between the range 53 & 100
```

In MongoDB is used to select documents where the value of a field equals any value in the specified array. It is a versatile operator that can be used to match documents based on a variety of criteria, including matching against multiple values, matching against arrays of values, and matching against regular expressions.

###

**OPERATOR $exists**

Fetch only the documents if the key exist using $exists

**NOTE: key with 'null' value, its documents will also appear**

```js
db.users.find({ hobbies: { $exists: true } });
```

Fetch the documents which has key by mentioning 'true'

```js
db.users.find({ hobbies: { $exists: false } });
```

Fetch the documents which has no 'hobbies' in the 'users' collection documents by mentioning 'false'

**NESTED queries**

```js
db.users.find({ "address.city": "New York City" }); // gets the ocuments of 'users' whos 'address' obj and the property 'city' and its value is 'New York City'
```

**EXPRESSION - $expr operator**

The below expression compares two columns where 'ColName' is greater than 'AnotherColName'. We use '$'
before ColName for columns. Without '$' it indicates just a value.

```js
db.users.find({ $expr: { $gt: ["$debt", "$balance"] } });
```

This query basically fetches the data of the users whose debt is more than their balance.

### U for Update

Update a document in a collection

```js
db.users.updateOne({ firstname: "Peter" }, { $set: { age: 27 } });
```

This will update only one document who's firstname is 'Peter', it will update the key age to 27.

Update all documents in a collection

```js
db.users.updateMany({}, { $set: { dummy: null } });
```

This will update all the documents since we passed '{}', it will update new key 'dummy'

**Other update operations**

- **OPERATOR $rename**

  ```js
  db.users.updateMany(
    { email: { $exists: true } },
    { $rename: { email: "mail" } }
  );
  ```

  The $rename command renames a field in a document. This will rename the 'email' keys to 'mail' in all the document since we mentioned '{email: {$exists:true}}'

- **OPERATOR $unset**

  ```js
  db.users.updateMany({}, { $unset: { dummy: "" } });
  ```

  This will remove the key 'dummy' from all the documents since we mentioned '{}'.

- **OPERATOR $push**

  ```js
  db.users.updateOne({ personID: 18 }, { $push: { hobbies: "eating" } });
  ```

  This will add the 'eating' to the array hobbies in the document with the personID 18.

- **OPERATOR $pull**

  ```js
  db.users.updateOne({ personID: 18 }, { $pull: { hobbies: "eating" } });
  ```

  This will add the 'eating' to the array hobbies in the document with the personID 18.

- **OPERATOR $inc**

  ```js
  db.users.updateOne({ personID: 21 }, { $inc: { age: 1 } });
  ```

  The $inc will increment the age by 1.

  Similarly, if you want to decrement then

  ```js
  db.users.updateOne({ personID: 21 }, { $inc: { age: -1 } });
  ```

To replace the complete document

```js
db.users.replaceOne({ firstname: "Susan" }, { firstname: "Demon" });
```

This replaces the whole document who's firstname is 'Susan', with whatever is passed as second argument.

**OPERATOR $mul, $max, $min**

Find the document by the name of Peter and set the age to 40 if existing age is LESS THAN 40 otherwise do nothing.

```js
db.users.updateOne({ name: "Peter" }, { $min: { age: 40 } });
```

Find the document by the name of Peter and set the age to 40 if existing age is MORE THAN 40 otherwise do nothing.

```js
db.users.findOne({ name: "Peter", { $max: : { age: 40 } } })
```

Find the document by the name of Peter and set the age to DOUBLE

```js
db.users.findOne({ name: "Peter", { $mul: : { age: 2 } } })
```

### D for Delete

Delete a single document

```js
db.users.deleteOne({ firstname: "Peter" });
```

Delete multiple documents

```js
db.users.deleteMany({});
```

This deletes all the documents in a collection
