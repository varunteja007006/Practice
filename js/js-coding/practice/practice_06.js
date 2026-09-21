/*
    Fizz Buzz problem
    Print numbers from 1 to n but for multiples of 3 print "Fizz" instead of the number. For multiples
    of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".
*/

function fizzBuzz(num) {
  for (let index = 0; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("fizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
}

fizzBuzz(15);
