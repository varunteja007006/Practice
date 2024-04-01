// 7. Error handling - Use try & catch block for the error handling

const API_URL = "https://api.github.com/users/varunteja007006/fake"; // This is a wrong URL

async function getDataFetch() {
  try {
    /*
     * fetch returns promise that resolves to a response object, the response object does not
     * directly contain the JSON response body.It is HTTP response representation.Use.json() method
     * which also is a promise that resolves to extract JSON body text.
     */
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("Inside getDataFetch: \n", data); // github user data
    return data;
  } catch (error) {
    console.log(error); // promise failed gives out an error
  }
}

const dataGit = getDataFetch();
dataGit.then((res) => console.log("Outside getDataFetch: \n", res));
