// youtube.com/watch?v=ufBbWIyKY2E&list=WL&index=1

/* 
    Return the max used character in the string
    Examples:
        maxChar("abcccd") = c
        maxChar("apple 2443444444") = 4
*/
function maxChar(params) {
  const charMap = {};
  for (let char of params) {
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }
  //   return charMap; // object of chars (keys) & count(values)
  return Object.entries(charMap); // array of arrays of object key and values
}

console.log(maxChar("abcccd"));
