fn main() {
    println!("Welcome to Rust variables");
    
    // let x = 5; // This is the reason for error x is immutable
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
    // error message regarding an immutability error

    // how are constants declared in rust - constants are always immutable and we cannot use mut.

    const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;

    // Concept of shadowing
    // First variable is shadowed by the second, which means that the second variable is what 
    // the compiler will see when you use the name of the variable.
    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}"); // outputs 14
    }

    println!("The value of x is: {x}"); // outputs 7


    // Difference between mut and shadowing
    // The other difference between mut and shadowing is that because we’re effectively creating 
    // a new variable when we use the let keyword again, we can change the type of the value but 
    // reuse the same name. For example, say our program asks a user to show how many spaces they 
    // want between some text by inputting space characters, and then we want to store that input 
    // as a number:
    let spaces = "   ";
    let spaces = spaces.len();
    println!("Whats in the spaces variable: {spaces}");
    // the above code works

    // the below code creates compile time error - mismatched types.
    let mut spaces_another = "   ";
    spaces_another = spaces_another.len();

}