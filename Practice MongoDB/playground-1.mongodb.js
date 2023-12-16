// Select the database to use.
use("accounts");

// Select the collection to use and query.
db.getCollection("users").find({ personid: 1 }); // this queries document who's personid is 1
