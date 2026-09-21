fn main() {
    println!("Welcome to Rust Functions");

    another_function(5);
        
    let y = {
        let x = 3;
        x + 1
    };
    // Note that the x + 1 line doesn’t have a semicolon at the end, which is unlike 
    // most of the lines you’ve seen so far. Expressions do not include ending semicolons.
    // If you add a semicolon to the end of an expression, you turn it into a statement,
    // and it will then not return a value.
    println!("The value of y is: {y}");

    // let z = {
    //     let x = 5;
    //     x + 1; // this does not return value and z has nothing to bind. Hence it will throw error.
    // };
    // println!("The value of z is: {z}");

    let z = plus_one(25);

    println!("The value of z is: {z}");
}

// Rust code uses snake case as the conventional style for function and variable names in which all 
// letters are lowercase and underscores separate words.

fn another_function(x: i32) { // you must declare the type of each parameter
    println!("Another function.");
    println!("Value of x: {x}");
}

// Functions can return values to the code that calls them.
// Note that the function’s return type is specified too, as -> i32

fn five() -> i32 {
    5
}

fn plus_one(x: i32) -> i32 {
    x + 1
}



// statement vs expression
// statement does not return a value, but expression does.
// let x = (let y = 4) here let y = 4 is a statement since it does not return anything & x 
// is not bind to anything. This will throw an error.

// let x = 4 + 1  is a expression because the x is returned with a value 5