fn main() {
    println!("Hello, world!");
    let x = 2.0123; // f64
    
    let y: f32 = 3.0123; // f32
    println!("x:{x} y:{y}")
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

