fn main() {
    println!("Welcome to Control Flow");
    let mut number = 3;
    
    // When condition is true
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    number = 10;

    // When condition is false
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    // Conditions must be boolean

    number = 3;

    if number != 0 {
        println!("number was something other than zero");
    }

    // Multiple conditions with else if
    number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
    println!("Skipped to last after first true condition met.");
    // Rust only executes the block for the first true condition, rest are skipped.


    let condition = true;
    number = if condition { 5 } else { 6 };
    println!("The value of number is: {number}");

    // similarly if you do the below it will throw an error
    // if condition { 5 } else { "six" };
    
    // if block evaluates to an integer, and the expression in the else block evaluates to a string
    // variables must have a single type, and Rust needs to know at compile time what type the 
    // number variable is

}


// CONTROL FLOWS
// if Expressions