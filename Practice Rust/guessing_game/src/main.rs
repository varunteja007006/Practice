use std::io; // The io library comes from the standard library, known as std. This helps with input
// and output the result

// There are a set of items that are defined in a standard library and rust brings them to the scope 
// of every program. This    set is called as Prelude.

// The ones not available in prelude as to be explicitly called out using 'use'
use rand::Rng;

fn main() {
    println!("Guess the number!");
    let secret_number = rand::thread_rng().gen_range(1..=100);
    
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

    // the above read_line also returns Result (an enumeration having various states called as variants)
    // Two such variants are `Ok` and `Err`
    .expect("Failed to read the line");

    // When printing the value of a variable, the variable name can go inside the curly brackets `{}`.
    println!("You guessed: {guess}");
}

//When printing the value of a variable, the variable name can go inside the curly brackets.
// let x = 5;
// let y = 10;
// println!("x = {x} and y + 2 = {}", y + 2); // x = 5 and y + 2 = 12
