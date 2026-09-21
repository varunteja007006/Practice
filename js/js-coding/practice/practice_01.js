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
  let max = 0;
  let maxChar = null;

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}
js_practice_02;
