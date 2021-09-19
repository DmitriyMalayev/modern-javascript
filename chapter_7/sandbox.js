const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
// const username = document.querySelector('#username');

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents the default action of refreshing the page
  // console.log('form submitted');
  // console.log(username.value) references the attribute (id or name) via dot notation;
  console.log(form.username.value);
});

const username = "dmitriy";
const pattern = /^[a-z]{6,}$/;
let result = pattern.test(username); //return boolean response
console.log(result);
let results = pattern.test();

if (results) {
  console.log("regex test passed");
} else {
  console.log("regex test failed");
}

if (usernamePattern.test(username)) {
  feedback.textContent = "That username is valid";
} else {
  feedback.textContent =
    "This username is invalid, it can only includes letters and be at least 6 characters long.";
}

let pattern_result = username.search(pattern);
//returns an integer with the index position of where the match has been found.
