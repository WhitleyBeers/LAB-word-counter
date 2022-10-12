console.log("Connected!")
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the value you entered in your console
  console.log(value);

  if (value) {
    // COMPLETE THE LOGIC 
    let arr = value.split(" "); //this turns the value into an array (arr) and takes out spaces (" ")
      console.log(arr);  //just a test to make sure the array is correct
    let count = arr.filter(word => word !== '').length; //creates a new variable (count) that filters the words in arr to make sure they are indeed words, and counts the length of arr once filtered
    wordCount.innerHTML = `Word Count: ${count}`; 
  } else {
    // if the value is empty, set the error message value to "Please input text"
    error.innerHTML = "Please input text."; // UPDATE THIS
  }
}

// OPTIONAL CHALLENGE
const toggleMode = (btnText) => {
  // complete the function
}

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
