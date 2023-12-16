# Install Mongodb

### Lingo

Let us first understand the MongoDB language.

- document - It means same as record in MySQL
- collections - It means same as table in MySQL

### Documentation

https://www.mongodb.com/docs/manual/installation/

# Run Mongodb (Linux Terminal)

To start the mongodb:

```sh
sudo systemctl start mongod
```

To check if mongodb started / status:

```sh
sudo systemctl status mongod
```

Stop mongodb:

```sh
sudo systemctl stop mongod
```

Restart mongodb:

```sh
sudo systemctl restart mongod
```

# MongoDB Shell

You can run the MongoDB shell in the linux terminal after starting the MongoD service as shown the
above section `Run MongoDB (Linux Terminal)`.

### Documentation

https://www.mongodb.com/docs/mongodb-shell/run-commands/

To refer more methods

https://www.mongodb.com/docs/manual/reference/method/

Start the mongodb shell:

```sh
mongosh
```

Help in mongodb shell:

```sh
help
```

Clear the mongodb shell:

```sh
cls
```

Terminate the running command or query:

> ctrl+c

### Simple Queries

Current Database - To print current database type the following command

```sh
db
```

Show all databases

```sh
show dbs
```

Use or switch to a different database

```sh
use accounts
```

This creates a database named accounts or switches to existing database.

Create new db & collection ( Insert a document into collection to create collection )

```sh
use accounts
```

```js
db.employees.insertOne({ name: "John" });
```

Show all collections

```sh
show collections
```

Rename the collection

```js
db.employees.renameCollection("users");
```

Delete a document from collection who's name is `Tommy`

```js
db.users.remove({ name: "Tommy" });
```

Drop the collection

```js
db.collection.drop();
```

Drop the database

```js
db.dropDatabase();
```

Lets set up the database once again since we dropped it in the before section.about-image

```sh
use accounts
```

Now proceed with following `insertOne` or `insertMany` operation to create a collection as well a document
in the collection.

# MongoDB VSCode Extension

You can also use your VSCode extension to learn MongoDB.

After starting the MongoDB shell using `mongosh`

You can find a url `Connection to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1` or something similar. Keep a copy of that string

![mongodb_shell_url.png](https://github.com/varunteja007006/Practice/blob/main/Practice%20MongoDB/assets/mongodb_shell_url.png?raw=true)

### More Concepts in MongoDB

**Cursor**

When the db. collection. find () function is used to search for documents in the collection, the result returns a pointer to the collection of documents returned which is called a cursor. By default, the cursor will be iterated automatically when the result of the query is returned

src: https://docs.mongodb.com/manual/reference/method/js-cursor/

## Sample Data

    NOTE: Just type insert.users.insertMany() in the terminal, now paste the below data and then close it with ).

```js
[
  {
    personid: 1,
    firstname: "Peter",
    lastname: "Parker",
    dob: new Date("1998-06-05"),
    age: 25,
    debt: 5000,
    balance: 10000,
    email: "dummy@mail.com",
    phone: 5555555555,
    address: {
      street: "123 main street",
      city: "LA",
      pincode: "46732",
    },
    hobbies: ["spider-manning", "photography", "spending time with MJ"],
    alive: true,
  },
  {
    personid: 2,
    firstname: "Bruce",
    lastname: "Wayne",
    dob: new Date("1983-02-19"),
    age: 40,
    debt: 100000,
    balance: 100000000,
    email: "brucewayne@wayneenterprises.com",
    phone: 1234567890,
    address: {
      street: "1007 Mountain Drive",
      city: "Gotham City",
      pincode: "45678",
    },
    hobbies: ["being Batman", "philanthropy", "collecting cars"],
    alive: true,
  },
  {
    personid: 3,
    firstname: "Clark",
    lastname: "Kent",
    dob: new Date("1988-07-18"),
    age: 35,
    debt: 0,
    balance: 10000000000,
    email: "clarkkent@dailyplanet.com",
    phone: 9876543210,
    address: {
      street: "3400 North Clark Street",
      city: "Metropolis",
      pincode: "12345",
    },
    hobbies: [
      "being Superman",
      "reporting for the Daily Planet",
      "saving the world",
    ],
    alive: true,
  },
  {
    personid: 4,
    firstname: "Diana",
    lastname: "Prince",
    dob: new Date("4000-01-01"),
    age: 5000,
    debt: 0,
    balance: 1000000000000,
    email: "wonderwoman@themyscira.com",
    phone: 5555555555,
    address: {
      street: "Themyscira Island",
      city: "Themyscira",
      pincode: "12345",
    },
    hobbies: [
      "being Wonder Woman",
      "fighting crime",
      "protecting the innocent",
    ],
    alive: true,
  },
  {
    personid: 5,
    firstname: "Steve",
    lastname: "Rogers",
    dob: new Date("1922-07-04"),
    age: 100,
    debt: 0,
    balance: 10000000000000,
    email: "captainamerica@avengershq.com",
    phone: 9876543210,
    address: {
      street: "135 West 50th Street",
      city: "New York City",
      pincode: "10020",
    },
    hobbies: [
      "being Captain America",
      "leading the Avengers",
      "protecting the United States",
    ],
    alive: true,
  },

  {
    personid: 6,
    firstname: "Tony",
    lastname: "Stark",
    dob: new Date("1978-05-29"),
    age: 45,
    debt: 100000000,
    balance: 100000000000,
    email: "ironman@starkindustries.com",
    phone: 5555555555,
    address: {
      street: "125 West 72nd Street",
      city: "New York City",
      pincode: "10023",
    },
    hobbies: [
      "being Iron Man",
      "building gadgets and armor",
      "running Stark Industries",
    ],
    alive: true,
  },
  {
    personid: 7,
    firstname: "Natasha",
    lastname: "Romanoff",
    dob: new Date("1988-01-25"),
    age: 35,
    debt: 0,
    balance: 100000000,
    email: "blackwidow@avengershq.com",
    phone: 9876543210,
    address: {
      street: "135 West 50th Street",
      city: "New York City",
      pincode: "10020",
    },
    hobbies: [
      "being Black Widow",
      "spying, fighting, and assassinating bad guys",
    ],
    alive: true,
  },
  {
    personid: 8,
    firstname: "Clint",
    lastname: "Barton",
    dob: new Date("1983-01-07"),
    age: 40,
    debt: 0,
    balance: 100000000,
    email: "hawkeye@avengershq.com",
    phone: 5555555555,
    address: {
      street: "135 West 50th Street",
      city: "New York City",
      pincode: "10020",
    },
    hobbies: ["being Hawkeye", "being a dad, and shooting arrows"],
    alive: true,
  },
  {
    personid: 9,
    firstname: "Wanda",
    lastname: "Maximoff",
    dob: new Date("1993-02-16"),
    age: 30,
    debt: 0,
    balance: 100000000,
    email: "scarletwitch@avengershq.com",
    phone: 9876543210,
    address: {
      street: "135 West 50th Street",
      city: "New York City",
      pincode: "10020",
    },
    hobbies: [
      "being the Scarlet Witch",
      "using her powers to protect the people she loves",
    ],
    alive: true,
  },
  {
    personid: 10,
    firstname: "Vision",
    lastname: "Synthezoid",
    dob: new Date("2020-08-07"),
    age: 3,
    debt: 0,
    balance: 100000000,
    email: "vision@avengershq.com",
    phone: 5555555555,
    address: {
      street: "135 West 50th Street",
      city: "New York City",
      pincode: "10020",
    },
    hobbies: ["being the Vision", "using his powers to help people"],
    alive: true,
  },

  {
    personid: 11,
    firstname: "John",
    lastname: "Doe",
    dob: new Date("1998-03-12"),
    age: 25,
    debt: 10000,
    balance: 10000,
    email: "johndoe@gmail.com",
    phone: 9876543210,
    address: {
      street: "123 Main Street",
      city: "Anytown",
      pincode: "12345",
    },
    hobbies: ["reading", "writing", "coding"],
    alive: true,
  },
  {
    personid: 12,
    firstname: "Jane",
    lastname: "Smith",
    dob: new Date("1978-05-08"),
    age: 45,
    debt: 0,
    balance: 1000000,
    email: "janesmith@yahoo.com",
    phone: 5555555555,
    address: {
      street: "456 Elm Street",
      city: "Everytown",
      pincode: "56789",
    },
    hobbies: ["sports", "travel", "photography"],
    alive: true,
  },
  {
    personid: 13,
    firstname: "Mary",
    lastname: "Jones",
    dob: new Date("1993-01-25"),
    age: 30,
    debt: 0,
    balance: 500000,
    email: "maryjones@hotmail.com",
    phone: 9876543210,
    address: {
      street: "789 Oak Street",
      city: "Sometown",
      pincode: "90123",
    },
    hobbies: ["cooking", "gardening", "hiking"],
    alive: true,
  },
  {
    personid: 14,
    firstname: "David",
    lastname: "Williams",
    dob: new Date("1963-07-14"),
    age: 58,
    debt: 0,
    balance: 2000000,
    email: "davidwilliams@aol.com",
    phone: 1234567890,
    address: {
      street: "1011 Pine Street",
      city: "Nowheresville",
      pincode: "00000",
    },
    hobbies: ["music", "art", "movies"],
    alive: true,
  },
  {
    personid: 15,
    firstname: "Susan",
    lastname: "Miller",
    dob: new Date("1968-09-22"),
    age: 53,
    debt: 0,
    balance: 1000000,
    email: "susanmiller@comcast.net",
    phone: 5555555555,
    address: {
      street: "1112 Maple Street",
      city: "Anywhere",
      pincode: "12345",
    },
    hobbies: ["volunteering", "reading", "spending time with family"],
    alive: true,
  },
  {
    personid: 21,
    firstname: "Harry",
    lastname: "Bhai",
    dob: new Date("1995-05-20"),
    age: 29,
    debt: 34000,
    balance: 33000,
    email: "hbrry@test.com",
    phone: 747474747747,
    address: {
      street: "344 street subway",
      city: "Heidi",
      pincode: "35353",
    },
    alive: true,
  },
];
```
