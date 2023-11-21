/* 
  Function to trigger an alert
  function alertMe() {
    alert("You clicked me !!!");
  }
  const btn = document.getElementById("sampleClick");
  btn.onclick = () => {
    alert("this is weird!!");
  };
*/

/* FormData API 
const form = document.getElementById("handleForm");
form.onsubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target); // use FormData API and pass the form to it
  data.append("location", "Las Vegas"); // You can also append properties
  console.log(data.get("name"));
  const dataObj = Object.fromEntries(data.entries()); // get the javascript object
  console.log(dataObj);
};
*/

/*
  Infinite scrolling
  let count = 2;

  function loadMoreContent() {
    count += 1;
    const main = document.querySelector("main");
    main.style.minHeight = `${count * 200}vh`;
    console.log("getting data");
  }

  const THRESHOLD = 200;

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;  // get the scrolling position in Y axis
    const totalHeight = document.documentElement.scrollHeight; // the pages total height
    const windowHeight = window.innerHeight; // windows height

    if (totalHeight - (scrollPosition + windowHeight) < THRESHOLD) {
      console.log("Load More...");
      loadMoreContent();
    }
  });
  */
