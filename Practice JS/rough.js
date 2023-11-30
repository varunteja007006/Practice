/*
  Example of Armstrong 153 , no of digits is 3, therefore sum of 1^3 + 5^3 + 3^3 should be equal to
  153
*/
var number = "153"; //input as string
var numberOfDigits = number.length;
var sum = 0;
// create a temporary variable
var temp = parseInt(number);
while (temp > 0) {
  var remainder = temp % 10;
  sum += Math.pow(remainder, numberOfDigits);
  // removing last digit from the number
  temp = parseInt((temp / 10).toString()); // convert float into integer
}
if (sum.toString() == number) {
  console.log("".concat(number, " is an Armstrong number"));
} else {
  console.log("".concat(number, " is not an Armstrong number."));
}
