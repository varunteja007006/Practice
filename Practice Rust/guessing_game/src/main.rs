use std::io; // The io library comes from the standard library, known as std. This helps with input
// and output the result

// There are a set of items that are defined in a standard library and rust brings them to the scope 
// of every program. This    set is called as Prelude.

// The ones not available in prelude as to be explicitly called out using 'use'

fn main() {
    println!("Guess the number!");
    println!("Plz input your guess!");

    let mut guess = String::new(); // we use let in Rust to create a variable. By default they are 
    // immutable.

    // To make a variable mutable we use 'mut'
    // let apples = 5; // immutable
    // let mut bananas = 5; // mutable

    // The :: syntax in the ::new line indicates that new is an associated function of the String type. 
    // An associated function is a function that’s implemented on a type,


    io::stdin() // can also be written as follows std::io::stdin
    .read_line(&mut guess) // read_line takes the variable as argument to store whatever the user 
    // inputs/types.

    // & indicates that this argument is a reference, references are also immutable by default.
    // Hence we need to mention mut to make it mutable

    // the above read_line also returns Result (enumeration)
    .expect("Failed to read the line")

    println!("You guessed: {guess}")
}
