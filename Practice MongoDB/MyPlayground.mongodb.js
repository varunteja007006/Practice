use("accounts");
db.users.aggregate([
  { $match: { "address.city": "New York City" } }, // stage 1 , Matching the address, city to 'New York City' with $match
  { $group: { _id: "$address.city", total: { $sum: 1 } } }, // stage 2, Group them to output as needed
]);
