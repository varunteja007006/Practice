fn main() {
    println!("Welcome to Ownership in Rust");
}
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