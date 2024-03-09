use("accounts");

db.users.find();
// db.users.aggregate([
//   // $match === exactly same as find
//   { $match: { age: { $gt: 40 } } },
//   { $match: { debt: 0 } },
//   { $project: { personID: 1, firstname: 1, lastname: 1, age: 1, debt: 1 } },
//   { $count: "user_count" },
// ]);

db.users.aggregate([
    { $match: { "address.city": "New York City" } },
    { $group: { _id: "$address.city", total: { $sum: 1 } } }
  ]);