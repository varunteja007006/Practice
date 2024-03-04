// Given a string, write a function to count the occurrences of each character in the string.

function charCount(str: string) {
  let charCountObj: { [key: string]: number } = {}; // store char and their count as object {key:value}
  for (let char of str) {
    // iterate through each char in string
    if (charCountObj[char]) {
      // if char already in the object then increment by 1 the value
      charCountObj[char] += 1;
    } else {
      // else add the char with value 1.
      charCountObj[char] = 1;
    }
  }
  return charCountObj;
}

let str = "banana";
console.log(charCount(str));
