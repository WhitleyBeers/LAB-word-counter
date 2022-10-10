# LAB: Word Counter

In this lab, you will be using your HTML, CSS and some basic JS skills to create and style a word counter.

## Get Started
- Navigate to your `~/workspace/foundations/inclass` directory

```bash
$ git clone {YOUR REPO LINK}
$ cd LAB-word-counter
```

## Setup the Project
- Create a `setup` branch 

```
$ git checkout -b setup
```

- Create the following files:
  - Create an `index.html` file
  - Create a `main.css` file
  - Create a `main.js` file
- Connect the JS file and your CSS file to your HTML
  - If you need help with this, do a google search for how to do it

## Push your work to Github
```
$ git add -A
$ git commit -m "WRITE A DETAILED MESSAGE"
$ git push origin setup
```

- Create a Pull Request (PR) on Github
- Merge the PR into the main branch
- Go back to VS Code and checkout the main branch `git checkout main`
- Pull the updated code: `git pull origin main`

## Get the Code
- Create an `add-code` branch 

```
$ git checkout -b add-code
```

Place the following code in the `index.html` file

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Word Counter</title>
</head>
<body>
  <h1>Word Counter</h1>
  <button id="bg-switch">Dark Mode</button>
  <div id="error" class="error"></div>
  <form>
    <textarea placeholder="Place your words here..."></textarea>
    <button type="submit">Submit</button>
    <button type="reset">Clear</button>
  </form>
  <div id="word-count"></div>

</body>
</html>

```

Place the following code in the `main.js` file

```javascript
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
```

## Connect the files
- Connect the JS file to the HTML file
- Connect the CSS file to the HTML file

## Test the code
- Start your server: run `hs -o` or `http-server -o` to start your server.
- Check your console. The message "Connected!" should be seen.

## Push your work to Github

```
$ git add -A
$ git commit -m "WRITE A DETAILED MESSAGE"
$ git push origin add-code
```

- Create a Pull Request (PR) on Github
- Merge the PR into the main branch
- Go back to VS Code and checkout the main branch `git checkout main`
- Pull the updated code: `git pull origin main`

### Get Organized
- Go to your repo and click on the Issues Tab taking note of the things that need to be completed for the lab
<img width="1277" alt="Screen Shot 2022-03-19 at 1 42 02 AM" src="https://user-images.githubusercontent.com/29741570/159110623-e41804ad-fca5-46cd-a7db-2fa6b2f058cc.png">

## Styling

<img width="1245" alt="Screen Shot 2022-03-18 at 10 47 46 PM" src="https://user-images.githubusercontent.com/29741570/159106701-16d84e20-29ad-46d6-8270-a710f92d9a20.png">
<img width="1244" alt="Screen Shot 2022-03-18 at 10 47 57 PM" src="https://user-images.githubusercontent.com/29741570/159106702-eed51363-25c9-4965-9cd7-6c749c728ffb.png">
<img width="1243" alt="Screen Shot 2022-03-18 at 10 48 26 PM" src="https://user-images.githubusercontent.com/29741570/159106703-5f6b81ab-e10a-490e-be32-c80c65c39171.png">

## Challenge
Add Bootstrap to your HTML elements like buttons and the form.

NOTE: Do not remove the ID attributes from the HTML. When you copy over the Bootstrap component, make sure to add the attribute to it.


