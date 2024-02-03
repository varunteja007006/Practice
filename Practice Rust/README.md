# Rust
### Intro



### My Fisrst Program
```rs
# main.rs
fn main(){
    println!("Hello world");
}
```
Here `!` after println means it is a macro not a function. 

### Cargo Tool
As the project grows we should be able to compile and share the executable. Hence we will have to check
the cargo tool.

Cargo is Rust’s build system and package manager. Most Rustaceans use this tool to manage their Rust 
projects because Cargo handles a lot of tasks for you, such as building your code, downloading the 
libraries your code depends on, and building those libraries. (We call the libraries that your code 
needs dependencies.)


### 
```rs
cargo new hello_cargo
```

The project contains one file `Cargo.toml` and one directory, in the directory there is a `main.rs` file.

###

__.toml - Tom’s Obvious, Minimal Language__


###
Build the project using bellow command 
```rs
cargo build
```

### 
Build the project and also run the executable using the below command
```rs
cargo run
```

### 
Check if the project compiles but does not produce executable
```rs
cargo check
``` 

###
Building for the release
```rs
cargo build --release
```

### Community crates (dependency libs)
check crates.io ---> https://crates.io/