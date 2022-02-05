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

// .queryselector() is a method available on the Document object
// the queryselector() method selects an element with the specified selector
// the document.queryselector() method returns the first element within the document that matches the specified selector.If no match is found,null is returned
const text = document.querySelector(".message").textContent;
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
console.log(document.querySelector(".guess").value);
