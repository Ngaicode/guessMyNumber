"use strict";

// the DOM and its corresponding methods and properties are part of web APIs  that most web browsers implement and we can access with our javascript code ; not javascript syntax itself.It is just that these web APIs were written in Javascript

// WHAT IS THE DOM?

// ---MAJOR---
// the DOM is an object oriented representation of a web page ,it gives us programatic access to the web page allowing us to change the document structure ,style and content
// as the object oriented representation of a web page it can be modified with a scripting language such as javascript
// the dom allows us to use javascript to access HTML elements and styles in order to manipulate them
// the DOM acts as an access point to the web page that allows us to change text,HTML attributes,and CSS styles all from our javascript
// simply put ,we can say that the DOM acts as a connection point between HTML documents and javascript code

// side notes
// the DOM is a tree-like structure in which each HTML element is one object

// we can select html elements with javascript using their respective class and ID names ,or even the html element tags themselves
// we need to pass a selector as an argument to the queryselector method,this selector is same as the selectors we would use in css
// the selected element has to be a string
// the queryselector method returns the first element that matches  the specified selector
// .queryselector() is a METHOD available on the DOCUMENT OBJECT
// the queryselector() method selects an element with the specified selector
// the document.queryselector() method returns the first element within the document that matches the specified selector.If no match is found,null is returned
/*const text = document.querySelector(".message").textContent;
console.log(text);

// ---selecting and manipulating more elements---

// changing the textContent
document.querySelector(".message").textContent = "correct number";

console.log(document.querySelector(".message").textContent);

// when selecting elements we do so using their respective css selector names as strings
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 17;

// the .value property gets us the value of a HTML element
// we can also use the .value property to set the value
document.querySelector(".guess").value = 21;
console.log(document.querySelector(".guess").value);*/

// HANDLING EVENTS
// in order to listen for events ,we first need to select the element where the event should happen
// addEventListener() method is a special function that accepts two arguments,the FIRST argument should be the TYPE of EVENT to listen for;the second bit is an EVENT HANDLER which is a function expression that contains the code to be executed whenever a certain event occurs
// event handler funcrion will be called by te javascript engine as soon as the event happens

// GLOBAL  SCOPE
// these are the state variables of our application
// GENERATING THE RANDOM NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// the score is always 20 when the game starts
let score = 20;
// the highscore starts at zero,it will later be updated by the event handler
let highScore = 0;
// function that prints a string  that it receives as the argument on to the DOM
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// -----FUNCTIONS----
// functions create their own scopes and once the function get's called it creates its own execution context in the call stack
// var is function scoped

// -----blocks-----
// blocks create their own scopes but don't create execution contexts ,only function callss and the global scope get execution context
// let and const are block scoped
// variables declared by var will be acccessible outside the code block

// in order to listen for events ,we first need to select the element where the event should happen
// addEventListener() method is a special function that accepts two arguments,the FIRST argument should be the TYPE of EVENT to listen for;the second bit is an EVENT HANDLER which is a function expression that contains the code  logic to be executed whenever a certain event occurs
// event handler functions will be called by the javascript engine as soon as the event happens

// EVENT LISTENERS AND EVENT HANDLERS
// calling the addEventListener() function/method
// you call this method/function on the element that you want to 'listen' for an event
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // usually,in the case where we get input from a user we have to check wether the input value actually exists or not
  //  usually the first scenario is to assume that there is no input from the user then react to that somehow
  //   the code below will only run if there's no input from the user,ie if guess is false
  // if the input guess exists ,therfore it's true ,the code block below wont run since !true is false
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!!!";
    displayMessage("No number!!!");
  }

  // the second logical steps is to cover all the other different scenarios that might happen

  // when the guessed number is strictly equal to the secretNumber
  // WHEN PLAYER WINS
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct number";
    displayMessage("Correct number!!!");
    // displays the secret number on the screen
    document.querySelector(".number").textContent = secretNumber;

    // STYLE MANIPULATION
    // when we need to access the style poperties of an element ; we do so in the following steps
    // 1.First we select the element that we want to manipulate
    // 2.we use the .style property  using dot natation on the element that has been selected
    // 3.then (using also the dot notation) we select the name of the property that we want to manipulate
    // 4.finally we pass in the value of the css style property that we want to manipulate.THE VALUE WE PASS IN MUST ALWAYS BE A STRING
    // setting the body's  background colour to green when the player wins the game
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // setting the highscore
    if (score > highScore) {
      // dynamically changing the value of the highscore only if the current score is greater than the current highscore
      highScore = score;
      // displays the highscore
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too high!!!" : "Too low !!!";
      // a ternary operator that chooses the string to be displayed
      displayMessage(guess > secretNumber ? "Too high!!!" : "Too low !!!");

      // with every failed guess we decrease the value of the score by one
      score--;
      // updating the textcontent with the new score value
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "you lost the game !!!";
      displayMessage("you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  // WHEN THE GUESS IS TOO HIGH
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too high!!!";
  //     // with every failed guess we decrease the value of the score by one
  //     score--;
  //     // updating the textcontent with the new score value
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "you lost the game !!!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   // WHEN THE GUESS IS TOO LOW
  // } else if (guess < secretNumber) {
  // if (score > 1) {
  //   document.querySelector(".message").textContent = "Too low!!!";
  //   // with every failed guess we decrease the value of the score by one
  //   score--;
  //   // updating the textcontent with the new score value
  //   document.querySelector(".score").textContent = score;
  // } else {
  //   document.querySelector(".message").textContent = "you lost the game !!!";
  //   document.querySelector(".score").textContent = 0;
  // }
});

// event listener for the again! button
// this is the logic that we want to implement when the player clicks the again button
// 1.The first thing we do is to select the element that we want to listen for an event,then we add an addEventListener() method/function to it
// the logic that we want to implement should go into the function body of the event handler function expression
document.querySelector(".again").addEventListener("click", function () {
  // we select a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // set the score back to 20
  score = 20;
  // hide the secret number
  document.querySelector(".number").textContent = "?";
  // display the new current score as back to 20 when the game restarts
  document.querySelector(".score").textContent = score;
  // document.querySelector(".message").textContent = "Start guessing ...";
  displayMessage("Start guessing ...");
  // set the input value back to an empty string
  document.querySelector(".guess").value = "";
  // change the  body's background colour back to black
  document.querySelector("body").style.backgroundColor = "#222";
  // minimizing the width of this particular element
  document.querySelector(".number").style.width = "15rem";
});



console.log("meow")
