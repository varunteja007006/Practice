/*
    Capitalize the first letter of the words and return the sentence
*/

function capitalize(str) {
  let res = [];
  let tempArr = str.split(" ");
  for (const ele of tempArr) {
    let tempStr = ele.split("");
    tempStr[0] = tempStr[0].toUpperCase();
    res.push(tempStr.join(""));
  }
  return res.join(" ");
}

console.log(capitalize("i am a frontend developer"));
