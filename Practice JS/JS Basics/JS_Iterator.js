/*
    JavaScript Iterator

    Javascript Iterator is an object or pattern that allows us to traverse over a list 
    or collection. Iterators define the sequences and implement the iterator protocol 
    that returns an object by using a next() method that contains the value and is done. 
    The value contains the next value of the iterator sequence and the done is the boolean 
    value true or false if the last value of the sequence has been consumed then it’s true 
    else false

    We can check if any entity is by default iterable or not We can check its prototype 
    and can see if it is having a method Symbol(Symbol.iterator) or not.

    In Array.prototype you will find Symbol(Symbol.iterator): ƒ values() method. 
    The array is by default iterable. Also, String, Map & Set are built-in iterables 
    because their prototype objects all have a Symbol.iterator() method.
*/
const array = ["a", "b", "c"];

const it = array[Symbol.iterator]();

// and on this iterator method we have ‘next’ method

console.log(JSON.stringify(it.next()));
//{ value: "a", done: false }

console.log(JSON.stringify(it.next()));
//{ value: "b", done: false }

console.log(JSON.stringify(it.next()));
//{ value: "c", done: false }

console.log(JSON.stringify(it.next()));
/* Actual it.next() will be { value: undefined, 
	done: true } but here you will get 
	{done: true} output because of JSON.stringify 
	as it omits undefined values*/

// Create own iterable object

let iterable = {
  i: 0, // property
  [Symbol.iterator]() {
    // method
    let that = this;
    return {
      next() {
        if (that.i < 5) {
          return { value: that.i++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (let value of iterable) {
  console.log(value);
}
