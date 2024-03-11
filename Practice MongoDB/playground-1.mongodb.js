// Select the database to use.
use("accounts");

// Select the collection to use and query.
db.getCollection("users").find({ personID: 1 }); // this queries document who's personID is 1

// similarly you can also write it like this
db.users.find({ personID: 1 }); // this queries document who's personID is 1


db.users.find({})