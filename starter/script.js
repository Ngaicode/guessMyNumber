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
// the queryselector method returns an element
// .queryselector() is a method available on the Document object
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

// GENERATING THE RANDOM NUMBER
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // usually,in the case where we get input from a user we have to check wether the input value actually exists or not
  //  usually the first scenario is to assume that there is no input from the user then react to that somehow
  //   the code below will only run if there's no input from the user,ie if guess is false
  if (!guess) {
    document.querySelector(".message").textContent = "No number!!!";
  }
  // the second logical steps is to cover all the other different scenarios that might happen
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!!!";
      // with every failed guess we decrease the value of the score by one
      score--;
      // updating the textcontent with the new score value
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game !!!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!!!";
      // with every failed guess we decrease the value of the score by one
      score--;
      // updating the textcontent with the new score value
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game !!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
