use("accounts");

db.users.find();
// db.users.aggregate([
//   // $match === exactly same as find
//   { $match: { age: { $gt: 40 } } },
//   { $match: { debt: 0 } },
//   { $project: { personID: 1, firstname: 1, lastname: 1, age: 1, debt: 1 } },
//   { $count: "user_count" },
// ]);

// db.users.aggregate([
//     { $match: { "address.city": "New York City" } },
//     { $group: { _id: "$address.city", total: { $sum: 1 } } }
//   ]);

// db.users.aggregate([
//   { $match: { alive: true } },
//   { $group: { _id: "$address.city", total: { $sum: 1 } } },
//   { $sort: { total: -1 } },
// ]);

// db.users.aggregate([
//   {
//     $unwind: {
//       path: "$hobbies",
//     },
//   },
//   { $group: { _id: "$_id", numberOfHobbies: { $sum: 1 } } },
//   { $group: { _id: null, totalHobbies: { $sum: "$numberOfHobbies" } } },
// ]);

// db.users.aggregate([
//   {
//     $addFields: {
//       numberOfHobbies: { $size: { $ifNull: ["$hobbies", []] } },
//     },
//   },
//   {
//     $group: {
//       _id: null,
//       totalHobbies: { $sum: "$numberOfHobbies" },
//     },
//   },
// ]);

db.users.aggregate([
  {
    $match: {
      hobbies: "photography",
    },
  },
  {
    $count: "CountOfHobbiesAsPhotography",
  },
]);
