fn main() {
    println!("Welcome to Rust Structs!");
    // Mutable
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
// fn main() {
//     let user1 = User {
//         active: true,
//         username: String::from("someusername123"),
//         email: String::from("someone@example.com"),
//         sign_in_count: 1,
//     };
// }

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
