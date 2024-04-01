// Practical example for async & await

const API_URL = "https://api.github.com/users/varunteja007006";

async function getDataFetch() {
  /*
   * fetch returns promise that resolves to a response object, the response object does not directly
   * contain the JSON response body.It is HTTP response representation. Therefore Use '.json()'
   * method which also is a promise that resolves to extract JSON body text.
   */
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
}
getDataFetch();
