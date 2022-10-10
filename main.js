console.log("Connected!")
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the value you entered in your console
  console.log(value);

  if (value) {
    // COMPLETE THE LOGIC 
    wordCount.innerHTML = `Word Count: 0`; 
  } else {
    // if the value is empty, set the error message value to "Please input text"
    error.innerHTML = ""; // UPDATE THIS
  }
}
