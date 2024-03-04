// factorial of 5 = 1*2*3*4*5
export const num: number = 5;
if (num < 0) {
  console.log("Not valid number");
} else if (num === 0) {
  console.log("1");
} else {
  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact = fact * index;
  }
  console.log(fact);
}
