fn main() {
    println!("Welcome to Rust References & Borrowing!");

    let s1 = String::from("Hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
    // we pass &s1 into calculate_length and, in its definition, we take &String rather than String

    // These ampersands represent references, and they allow you to refer to some value without
    // taking ownership of it
    //

    // ----------------------------------------------------------------
    // what happens if we try to modify something we’re borrowing?
    let s = String::from("hello");
    // change(&s); // this will throw an error

    let mut s2 = String::from("Hey"); // this s2 is mutable
    mutable_change(&mut s2); // we pass mutable reference

    // --------------------- No More than one Mutable reference ------------------------
    // Mutable references have one big restriction: if you have a mutable reference to a value,
    // you can have no other references to that value. This code that attempts to create two mutable
    // references to s will fail:
    let mut s3 = String::from("Hey"); // this s2 is mutable
    let r1 = &mut s3;
    let r2 = &mut s3;

    println!("{} {}", r1, r2);
    // This error says that this code is invalid because we cannot borrow s as mutable more than once
    // at a time. The first mutable borrow is in r1 and must last until it’s used in the println!,
    // but between the creation of that mutable reference and its usage, we tried to create another
    // mutable reference in r2 that borrows the same data as r1
    // Rust can prevent data races at compile time. A data race is similar to a race condition and happens when these three behaviors occur:
    // * Two or more pointers access the same data at the same time.
    // * At least one of the pointers is being used to write to the data.
    // * There’s no mechanism being used to synchronize access to the data.

    // ------------------- Combining mutable and immutable references -------------------
    let mut s4 = String::from("hello");
    let r1 = &s4; // no problem
    let r2 = &s4; // no problem
    let r3 = &mut s4; // BIG PROBLEM

    println!("{}, {}, and {}", r1, r2, r3);
    // Above code throws error because the r1, r2 don't expect the r3 to change the
    // reference at any time it wants to.

    // ----------------------- Scope plays the role --------------------------
    let mut s5 = String::from("hello");

    let r1 = &s5; // no problem
    let r2 = &s5; // no problem
    println!("{} and {}", r1, r2);
    // variables r1 and r2 will not be used after this point

    let r3 = &mut s5; // no problem
    println!("{}", r3);

    // This code is valid since the r1, r2 are out of scope after being used in println & r3 is created after that

    // ----------------------- Dangling References --------------------------
    let reference_to_nothing = dangle(); // this throws an error
    let reference_to_something = no_dangle(); // this throws an error
}

fn calculate_length(s: &String) -> usize {
    // s is a reference to a String
    s.len()
}
// Here, s goes out of scope. But because it does not have ownership of what
// it refers to, it is not dropped.

// Opposite of referencing is dereferencing, referencing is done with `&` and dereferencing is done
// with `*`

fn change(some_string: &String) {
    // some_string.push_str(", world"); //  Had to comment because Rust is not compiling the code
}
// Just as variables are immutable by default, so are references.
// We’re not allowed to modify something we have a reference to.

fn mutable_change(some_string: &mut String) {
    // we take the mutable reference
    some_string.push_str(", mom"); // we mutate the reference
}

// Dangling References
// Dangling pointer --> a pointer that references a location in memory that may have been given to
// someone else—by freeing some memory while preserving a pointer to that memory

// In Rust if you have a reference to some data, the compiler will ensure that the data will not go out of
// scope before the reference to the data does.

fn dangle() -> &String {
    // dangle returns a reference to a String
    let s = String::from("hello"); // s is a new String
    &s // we return a reference to the String, s
} // Here, s goes out of scope, and is dropped. Its memory goes away.
// Danger!
// In brief --> Inside dangle s is created and it is returned as reference. But s will go out of scope
// after that. This is not good since we just returned a reference of it. Rust won’t let us do this

fn no_dangle() -> String {
    let s = String::from("hello");
    s
} // This works because ownership is moved out, and nothing is deallocated.

// Conclusion:
// * At any given time, you can have either one mutable reference or any number of immutable references.
// * References must always be valid.
