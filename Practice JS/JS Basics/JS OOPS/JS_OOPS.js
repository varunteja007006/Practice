class CD {
    constructor(param1, fn, a, b, fn1) {
      this.name = param1;
      this.a = a;
      this.b = b;
      this.add = fn;
      this.thisAdd = fn1;
    }
    greet() {
      return `hello ${this.name}`;
    }
  }
  
  function sum(a, b) {
    return a + b;
  }
  
  function thisSum() {
    return this.a + this.b;
  }
  const obj = new CD("Mike", sum, 5, 6, thisSum);
  console.log(obj.greet());
  console.log(obj.add(1, 2));
  console.log(obj.thisAdd());