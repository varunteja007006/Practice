"use strict";
// Given a string, write a function to count the occurrences of each character in the string.
function charCount(str) {
    var charCountObj = {}; // store char and their count as object {key:value}
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        // iterate through each char in string
        if (charCountObj[char]) {
            // if char already in the object then increment by 1 the value
            charCountObj[char] += 1;
        }
        else {
            // else add the char with value 1.
            charCountObj[char] = 1;
        }
    }
    return charCountObj;
}
var str = "banana";
console.log(charCount(str));
