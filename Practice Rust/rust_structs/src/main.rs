fn main() {
    println!("Welcome to Rust Structs!");
    // Mutable structs
    let mut user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };

    user1.email = String::from("anotheremail@example.com");
}

// A struct, or structure, is a custom data type that lets you package together and
// name multiple related values that make up a meaningful group. If you’re familiar with an
// object-oriented language, a struct is like an object’s data attributes.

// Struct Code below:
// struct User {
// active: boolean,
// username: string,
// email: string,
// sign_in_count: u64,
//}

// In other words, the struct definition is like a general template for the type, and instances
// fill in that template with particular data to create values of the type.
fn main() {
    let user1 = User {
        active: true,
        username: String::from("someusername123"),
        email: String::from("someone@example.com"),
        sign_in_count: 1,
    };
}

// This below function creates an instance of User
fn build_user(email: String, username: String) -> User {
    User {
        active: true,
        username: username,
        email: email,
        sign_in_count: 1,
    }
}
// The above code can also be written as below
fn build_user(email: String, username: String) -> User {
    User {
        active: true,
        username,
        email,
        sign_in_count: 1,
    }
}
// *===============================================================================================

// Creating another instance from other instances with Struct update syntax
fn main() {
    // assuming you have already created user1 ...
    let user2 = User {
        active: user1.active,
        username: user1.username,
        email: String::from("another@example.com"),
        sign_in_count: user1.sign_in_count,
    };
}
// less code
fn main() {
    let user2 = User {
        email: String::from("another@example.com"),
        ..user1
    };
}
// user2 that has a different value for email but has the same values for the username, active,
// and sign_in_count fields from user1. The ..user1 must come last to specify that any remaining
// fields should get their values from the corresponding fields in user1, but we can choose to
// specify values for as many fields as we want in any order, regardless of the order of the
// fields in the struct’s definition.

// *===============================================================================================

// Using Tuple Structs Without Named Fields to Create Different Types
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
// Note that the black and origin values are different types because they’re instances of different
// tuple structs. Each struct you define is its own type, even though the fields within the struct
// might have the same types. For example, a function that takes a parameter of type Color cannot
// take a Point as an argument, even though both types are made up of three i32 values.
// Otherwise, tuple struct instances are similar to tuples
