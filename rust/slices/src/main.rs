fn main() {
    println!("Welcome to slices!");
    let mut s = String::from("hello world");

    let word = first_word(&s); // word will get the value 5

    s.clear(); // this empties the String, making it equal to ""

    // word still has the value 5 here, but there's no more string that
    // we could meaningfully use the value 5 with. word is now totally invalid!

    // We can use string slices
    let hello = &s[0..5];
    let world = &s[6..11];
    // Rust’s .. range syntax, [starting_index..ending_index]

    // Other slices
    let a = [1, 2, 3, 4, 5];
    let slice = &a[1..3];

    assert_eq!(slice, &[2, 3]);
}

// function first_word without using slices
// fn first_word(s: &String) -> usize {
//     let bytes = s.as_bytes();
//     for (i, &item) in bytes.iter().enumerate() {
//         if item == b' ' {
//             return i;
//         }
//     }
//     s.len()
// }

// fn first_word(s: &String) -> &str { // a better way to write the line is shown below, but Why??
fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }
    &s[..]
}
// fn first_word(s: &str) -> &str takes a &str as input. This is a reference to a string slice.
// It means the function doesn't own the string data itself, but rather borrows a portion of an
// existing string. This &str is typically immutable and fixed-length.

// fn first_word(s: &String) -> &str takes a &String as input. This is a reference to a String object.
// This wont work with string slices whereas string slices works with String Object.

// Slices let you reference a contiguous sequence of elements in a collection rather than the
// whole collection. A slice is a kind of reference, so it does not have ownership.
// This flexibility takes advantage of deref coercions

// ------------------------------------------------------------------------------------------------
// The concepts of ownership, borrowing, and slices ensure memory safety in Rust programs at compile time.
