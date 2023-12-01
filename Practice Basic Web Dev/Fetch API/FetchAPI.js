/*
FETCH API

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the 
protocol, such as requests and responses. It also provides a global fetch() method that provides
an easy, logical way to fetch resources asynchronously across the network.
*/

// simple fetch api
async function logMovies() {
  const response = await fetch("http://example.com/movies.json");
  const movies = await response.json();
  console.log(movies);
}

/*
Here we are fetching a JSON file across the network, parsing it, and printing the data
to the console. The simplest use of fetch() takes one argument — the path to the resource you 
want to fetch — and does not directly return the JSON response body but instead returns a
promise that resolves with a Response object.

The Response object, in turn, does not directly contain the actual JSON response body 
but is instead a representation of the entire HTTP response. So, to extract the JSON 
body content from the Response object, we use the json() method, which returns a second
promise that resolves with the result of parsing the response body text as JSON.
*/

// simple fetch api POST method

async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };
postJSON(data);

// uploading a file

async function upload(formData) {
  try {
    const response = await fetch("https://example.com/profile/avatar", {
      method: "PUT",
      body: formData,
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

upload(formData);

// uploading multiple files
/*
    Files can be uploaded using an HTML <input type="file" multiple /> input element, 
    FormData() and fetch().
*/
async function uploadMultiple(formData) {
  try {
    const response = await fetch("https://example.com/posts", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const photos = document.querySelector('input[type="file"][multiple]');
const formData1 = new FormData();

formData1.append("title", "My Vegas Vacation");

for (const [i, photo] of Array.from(photos.files).entries()) {
  formData1.append(`photos_${i}`, photo);
}

uploadMultiple(formData1);
