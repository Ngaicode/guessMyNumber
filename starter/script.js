"use strict";

// WHAT IS THE DOM?
// the DOM is an object oriented representation of a web page ,it gives us programatic access to the web page allowing us to change the document structure ,style and content
// as the object orirnted representation of a web page it can be modified with a scripting language such as javascript

// we can select html elements with javascript using their respective class and ID names ,or even the html element tags themselves
// we need to pass a selector as an argument to the queryselector method,this selector is same as the selectors we would use in css
// the selected element has to be a string

// the document.queryselector() method returns the first element within the document that matches the specified selector.If no match is found,null is returned

console.log(document.querySelector(".message").textContent);
