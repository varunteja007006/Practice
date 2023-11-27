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
  personid: 25,
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

**NOTE: Sample data can be found at the end of this file.**

### R for Read

Show all documents in the collection

```js
db.users.find();
```

To Show only required keys of a document. Pass two arguments in find().

**First argument** is 'query to fetch' condition and **Second argument** is the condition to specify which keys have to be shown by mentioning '1', rest of the keys will not be shown.  
Similarly, to specify which keys should not to be shown mention '0', rest of the keys will be shown.

Below is the command:

```js
db.users.find({ age: { $lt: 20 } }, { personid: 1, firstname: 1, lastname: 1 });
```

Here inside find(),

- **first argument** is {age: { $lt: 20}} condition to fetch query, i.e age less than 20.

- **second argument** is { personid:1, firstname:1, lastname:1 } condition to specify required keys,
  i.e show documents with keys personid, firstname, lastname since they are mentioned with '1'.

More Commands that can used along with find()

- sort by ascending

  ```js
  db.users.find().sort({ personid: 1 });
  ```

- sort by descending

  ```js
  db.users.find().sort({ personid: -1 });
  ```

- limit the documents to show

  ```js
  db.users.find().limit(5);
  ```

- Skip the documents and show the rest

  ```js
  db.users.find().skip(5);
  ```

  **NOTE: Make sure to always use skip() before limit()**

- Available comparison operators

  - $gt = 'greater than'

    ```js
    db.users.find({ age: { $gt: 58 } });
    ```

  - $gte = 'greater than equal to'

    ```js
    db.users.find({ age: { $gte: 58 } });
    ```

  - $lt = 'less than'

    ```js
    db.users.find({ age: { $lt: 20 } });
    ```

  - $gte = 'less than equal to'

    ```js
    db.users.find({ age: { $lt: 53 } });
    ```

  Using multiple comparison operators

  ```js
  db.users.find({ age: { $gt: 50, $lt: 60 } });
  ```

AND Operator

```js
db.users.find({ age: { $lt: 40 }, debt: { $lt: 1000 } });
```

```js
db.users.find({ $and: [{ age: { $lt: 40 } }, { debt: { $lt: 1000 } }] });
```

OR Operator

```js
db.users.find({ $or: [{ age: { $lte: 3 } }, { firstname: "Peter" }] });
```

NOT Operator

```js
db.users.find({ age: { $not: { $lt: 50 } } });
```

**NOTE: It will also return documents which has no key; something greater than or less
than will not do**

Use $in in find

```js
db.users.find({ age: { $in: [53, 100] } });
```

Fetch only the documents if the key exist (NOTE: key with 'null' value, its documents will appear)

```js
db.users.find({ hobbies: { $exists: true } });
```

Fetch the documents which has key by mentioning 'true'

```js
db.users.find({ hobbies: { $exists: false } });
```

Fetch the documents which has no 'hobbies' in the 'users' collection documents by mentioning 'false'

NESTED queries

```js
db.users.find({ "address.city": "New York City" });
```

EXPRESSION - $expr

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

- $rename - The $rename command renames a field in a document.

  ```js
  db.users.updateMany(
    { email: { $exists: true } },
    { $rename: { email: "mail" } }
  );
  ```

  This will rename the 'email' keys to 'mail' in all the document since we mentioned '{email: {$exists:true}}'

- $unset

  ```js
  db.users.updateMany({}, { $unset: { dummy: "" } });
  ```

  This will remove the key 'dummy' from all the documents since we mentioned '{}'.

- $push

  ```js
  db.users.updateOne({ personid: 18 }, { $push: { hobbies: "eating" } });
  ```

  This will add the 'eating' to the array hobbies in the document with the personid 18.

- $pull

  ```js
  db.users.updateOne({ personid: 18 }, { $pull: { hobbies: "eating" } });
  ```

  This will add the 'eating' to the array hobbies in the document with the personid 18.

To replace the complete document

```js
db.users.replaceOne({ firstname: "Susan" }, { firstname: "Demon" });
```

This replaces the whole document who's firstname is 'Susan', with whatever is passed as second argument.

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
