fn main() {
    println!("Welcome to Rust Data Types");
    let x = 2.0123; // f64
    
    let y: f32 = 3.0123; // f32
    println!("x:{x} y:{y}");

    // OPERATIONS
    // addition
    let sum = 5 + 10;

    // subtraction
    let difference = 95.5 - 4.3;
    
    // multiplication
    let product = 4 * 30;
    
    // division
    let quotient = 56.7 / 32.2;
    let truncated = -5 / 3; // Results in -1
    
    // remainder
    let remainder = 43 % 5;

    // BOOLEAN TYPES
    let t = true;

    let f: bool = false; // with explicit type annotation

    // CHAR TYPES
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';


    // TUPLE TYPES
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    // To get the individual values out of a tuple, we can use pattern matching to destructure a 
    // tuple value
    let (x, y, z) = tup;
    println!("The value of y is: {y}");


    // We can also access a tuple element directly by using a period (.) followed by the index 
    // of the value we want to access. 
    let t: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = t.0;

    let six_point_four = t.1;

    let one = t.2;

    // ARRAY TYPES
    let a = [1, 2, 3, 4, 5];

    // Accessing elements of an array
    let first = a[0]; // it will store value 1
    let second = a[1]; // it will store value 2


    // you can also create an array You write an array’s type using square brackets with the type 
    // of each element, a semicolon, and then the number of elements in the array
    let a: [i32; 5] = [1, 2, 3, 4, 5];

    // You can also initialize an array to contain the same value for each element by specifying 
    // the initial value, followed by a semicolon, and then the length of the array in square brackets
    let a = [3; 5]; // let a = [3, 3, 3, 3, 3]
}


// There are 2 data types subsets: Scalar and Compound

// Scalar types: 4 types
// 1. integers
// 2. floating-point numbers
// 3. booleans
// 4. chars

// INTEGERS TYPES
// signed & unsigned integers
// i8 & u8 [8bit]
// i16 & u16 [16bit]
// i32 & u32 [32bit]
// i64 & u64 [64bit]
// i128 & u128 [128bit]
// isize & usize [arch]

// 1_000 is same as 1000 in rust. _ is used for easier to read purpose.
// By default rust defaults the integer to i32

// check for overflowing problem that can occur when using integers.


// FLOATING-POINT TYPES
// f32 & f64, rust defaults to f64. All floating-point types are signed.
// The f32 type is a single-precision float, and f64 has double precision.

// Numeric Operations
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Remainder
// Integer division truncates toward zero to the nearest integer.


// BOOLEAN TYPES
// In Rust boolean has two values - true & false. Boolean Type in rust is mentioned as bool

// CHAR TYPES
// Note that we specify char literals with single quotes, as opposed to string literals, which use 
// double quotes. Rust’s char type is four bytes in size and represents a Unicode Scalar Value.
// Unicode Scalar Values range from U+0000 to U+D7FF and U+E000 to U+10FFFF.

// COMPOUND TYPES
// Group multiple values into one type. Rust has two primitive compound types: tuples and arrays.

// TUPLE TYPES
// A tuple is a general way of grouping together a number of values with a variety of types into 
// one compound type. 
// Tuples have a fixed length: once declared, they cannot grow or shrink in size.
// Tuple is zero based index.

// The tuple without any values has a special name, unit.
// This value and its corresponding type are both written () and represent an empty value or an 
// empty return type. 

// Expressions implicitly return the unit value if they don’t return any other value.


// ARRAY TYPES
// Every element of an array must have the same type.  Arrays have a fixed length; the length is part  
// of the type. 
// Write the values in an array as a comma-separated list inside square brackets.
// Arrays are useful when you want your data allocated on the stack rather than the heap.
// Ensures you always have a fixed number of elements

// What happens when you access an values at index greater than size of array
// If the index is greater than or equal to the length, Rust will panic. 

// Rust protects you against this kind of error by immediately exiting instead of allowing 
// the memory access and continuing.