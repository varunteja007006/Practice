// Take input from the user
const matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const word = "abc";
const result = searchWord(matrix, word);
console.log(result);

// Search the word in the matrix
function searchWord(matrix, word) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === word[0]) {
        if (search(matrix, word, i, j, 0)) {
          return true;
        }
      }
    }
  }
  return false;
}

// Search the word in the matrix
function search(matrix, word, i, j, index) {
  if (index === word.length) {
    return true;
  }
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[i].length ||
    matrix[i][j] !== word[index]
  ) {
    return false;
  }
  matrix[i][j] = "#";
  if (
    search(matrix, word, i - 1, j, index + 1) ||
    search(matrix, word, i + 1, j, index + 1) ||
    search(matrix, word, i, j - 1, index + 1) ||
    search(matrix, word, i, j + 1, index + 1)
  ) {
    return true;
  }
  matrix[i][j] = word[index];
  return false;
}
