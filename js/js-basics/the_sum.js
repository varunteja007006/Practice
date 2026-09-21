function sum1(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum1(a + b);
  };
}

console.log(sum1(1)(2)(3)(4)()); // Output: 10
