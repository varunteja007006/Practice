/*
    Check if two strings are anagrams of each other.

    An anagram is a word, phrase, or name formed by rearranging the letters of another, 
    such as spar, formed from rasp.
*/

const formatString = (str) => {
  return str.toLowerCase().replace(/[\W]/g, "");
};

function isAnagram(str1, str2) {
  let formattedStr1 = formatString(str1);
  let formattedStr2 = formatString(str2);
  return (
    formattedStr1.split("").sort().join("") ===
    formattedStr2.split("").sort().join("")
  );
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("listen~2", "silent2~"));
