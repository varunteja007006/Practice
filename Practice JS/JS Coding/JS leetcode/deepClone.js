const makeClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const makeClone2 = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(makeClone2);
  }

  const newObj = {};
  for (const key in obj) {
    newObj[key] = makeClone2(obj[key]);
  }
  return newObj;
};

const y = { a: 1, b: { c: 2 } };
const z = makeClone2(y);

y.a = 100;

console.log("y: ", y); // y:  { a: 100, b: { c: 2 } }
console.log("z: ", z); // z:  { a: 1, b: { c: 2 } }
