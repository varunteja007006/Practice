/*
    Print the count of vowels in a string
*/

function vowelsCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(vowelsCount("Hello World"));
