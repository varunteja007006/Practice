const word = "code";
const m = 4;
const n = 4;

const matrix = [
  ["a", "c", "o", "y"],
  ["b", "f", "$", "l"],
  ["i", "k", "e", "m"],
  ["w", "x", "g", "e"],
];

function findTheWord(matrix, word) {
  const myarr = [];
  for (const letter of word) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (letter === matrix[i][j] || matrix[i][j] === "$") {
          myarr.push(`${matrix[i][j]}_${i}_${j}`);
        }
      }
    }
  }
  const res = [];
  for (let index = 0; index < myarr.length - 1; index++) {
    const element = myarr[index].split("_");
    const nextElement = myarr[index + 1].split("_");
    if (element[0] !== nextElement[0]) {
      if (element[1] === nextElement[1] || element[2] === nextElement[2]) {
        res.push(`${element[0]} -> ${nextElement[0]}`);
      }
    }
  }
  return {
    found: res.length > 0 && res.length === word.length - 1,
    res,
    myarr,
  };
}

const { found, res, myarr } = findTheWord(matrix, word);
console.log(myarr);
if (found) {
  console.log("Word found!");
} else {
  console.log("Word not found.");
}
