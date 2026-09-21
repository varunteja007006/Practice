fn main() {
    println!("Welcome to Ownership in Rust");
    // --------------- Example 1 -----------------------
    let s = String::from("hello"); // s comes into scope
    takes_ownership(s); // s's value moves into the function...
    // ... and so is no longer valid here

    let x = 5; // x comes into scope
    makes_copy(x); // x would move into the function,
    // but i32 is Copy, so it's okay to still
    // use x afterward

    // --------------- Example 2 -----------------------
    let s1 = gives_ownership(); // gives_ownership moves its return
    // value into s1
    let s2 = String::from("hello"); // s2 comes into scope
    let s3 = takes_and_gives_back(s2); // s2 is moved into
    // takes_and_gives_back, which also
    // moves its return value into s3
    //

    // --------------- Example 2 -----------------------
    // Rust does let us return multiple values using a tuple
    let s4 = String::from("hello");
    let (s5, len) = calculate_length(s4);
    println!("The length of '{}' is {}.", s5, len);
}
// Here, x goes out of scope, then s. But because s's value was moved, nothing
// special happens.

// Here, s3 goes out of scope and is dropped. s2 was moved, so nothing
// happens. s1 goes out of scope and is dropped.

fn takes_ownership(some_string: String) {
    // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing
// memory is freed.

fn makes_copy(some_integer: i32) {
    // some_integer comes into scope
    println!("{}", some_integer);
} // Here, some_integer goes out of scope. Nothing special happens.

fn gives_ownership() -> String {
    // gives_ownership will move its
    // return value into the function that calls it
    let some_string = String::from("yours"); // some_string comes into scope
    some_string // some_string is returned and
    // moves out to the calling
    // function
}

// This function takes a String and returns one
fn takes_and_gives_back(a_string: String) -> String {
    // a_string comes into scope
    a_string // a_string is returned and moves out to the calling function
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() returns the length of a String

    (s, length)
}

// ---------------------------------------------------------------------------------------

// RUST Ownership concept

// It enables Rust to make memory safety guarantees without needing a garbage collector.
// Some features to be covered:
// 1. borrowing
// 2. slices

// Rust's approach to Memory: memory is managed through a system of ownership with a set of
// rules that the compiler checks.f any of the rules are violated, the program won’t compile.

// STACK vs HEAP
// Stack & Heap are parts of memory available at runtime but structured differently.
// Stack works as last in first out. All data stored in stack must have fixed size.
// Data with an unknown size at compile time or a size that might change must be stored on the heap instead.

// The heap is less organized: when you put data on the heap, you request a certain amount of space.
// The memory allocator finds an empty spot in the heap that is big enough, marks it as being in use,
// and returns a pointer, which is the address of that location. This process is called allocating on
// the heap and is sometimes abbreviated as just allocating (pushing values onto the stack is not
// considered allocating). Because the pointer to the heap is a known, fixed size, you can store the
// pointer on the stack, but when you want the actual data, you must follow the pointer.

// Pushing to the stack is faster than allocating on the heap because the allocator never has
// to search for a place to store new data; that location is always at the top of the stack.

// Accessing data in the heap is slower than accessing data on the stack because you have to
// follow a pointer to get there.

// RUST OWNERSHIP RULES
// * Each value in rust has a owner.
// * There can be only 1 owner at a time.
// * When an owner goes out of scope, the value is dropped.

// Memory and Allocation
// Shallow copying in rust is referred to as Move.
// let x = String::from("Hello")
// let y = x // y makes a shallow copy of x. Now both x and y point to Hello pointing to same mem pointer.

// As per Rust if variable goes out of scope it will free the memory. So in the above x,y case if
// either of the variable goes out of scope then it will cause error since they both point  to the same
// memory. Freeing memory twice will lead to corruption.

// In the case of RUST only x will be freed. y will be the owner.

// RUST never makes deep copies.

// If deep copy needs to be made then we can use common method clone()
// let s1 = String::from("hello");
// let s2 = s1.clone();
// println!("s1 = {}, s2 = {}", s1, s2);

// Stack-Only Data: Copy
// let x = 5;
// let y = x;
// println!("x = {}, y = {}", x, y);
// In the above example x is still valid, because unlike string, integers have a known size at compile
// time & stored on stack. Hence it can be easily copied.

// Therefore
// The ownership of a variable follows the same pattern every time: assigning a value to
// another variable moves it. When a variable that includes data on the heap goes out of scope,
// the value will be cleaned up by drop unless ownership of the data has been moved to another variable.
