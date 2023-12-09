/*
JavaScript Bang

Double negation
Double not
Logical NOT followed by NOT
Bang bang operator (informal)
Type coercion operator (informal)


The double bang operator (!!) is called the logical NOT operator twice. 
In documentation terms, it can be referred to by various names, including:

- Double negation
- Double not
- Logical NOT followed by NOT
- Bang bang operator (informal)
- Type coercion operator (informal)

While the double bang operator is not technically a single operator, it is often used as one 
in practice to achieve the following effects:

- Coercion to boolean: !! converts any value to its boolean equivalent. 
This means that !! will return true for any truthy value (including non-empty strings, numbers 
other than 0, and objects) and false for any falsy value (including undefined, null, empty 
strings, and the number 0).

Negation of a boolean: !! can be used to negate a boolean value. 
For example, !!true will be false, and !!false will be true.

Therefore, the double bang operator is a combination of two operations: type coercion 
and logical negation. It is important to note that the double bang operator is not 
recommended for production code due to its potential for unexpected behavior and lack 
of clarity.
*/

const obj = {
  name: "Bellow",
  age: undefined,
};

console.log(!!obj.name);
console.log(!!obj.age);
