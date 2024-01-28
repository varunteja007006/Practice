/*
JSON or JavaScript Object Notation is a format for structuring data.
*/

// JSON.parse() method -> Converts a JSON string to a JavaScript Object.
JSON.parse(localStorage.getItem("user")); // Most commonly used where we get the JSON object stored
// in localStorage and convert it to JS object for further processing.

// JSON.stringify method --> Creates a JSON string from JavaScript Object.
localStorage.setItem("key", JSON.stringify(value)); // when setting a JS object in localStorage we convert
// the object to JSON string.
