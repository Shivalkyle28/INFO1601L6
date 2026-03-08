//get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);

//get window metadata using window
console.log(window.location.href);     //get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

//function to redirect to another page
function redirect(url){
  window.location.assign(url); //redirects the page
}

//run code after page loads
window.onload = function(event){
   console.log("Page has loaded");
   //other javascript can go here
}

//example variables to show window behavior
var bob = 'bob';
const sally = 'sally';

console.log(window.bob === bob);     //true
console.log(window.sally === sally); //false

//variable conflict example
var document = 'hello this is my variable';

console.log(document); //still prints DOM document
console.log(window.document === document); //true because declaration ignored

//Task 4 - DOM manipulation

const result = document.querySelector('#result');

console.log(result); //shows the span element in console

result.innerHTML = '<h2>My Span</h2>';

result.style.color = 'blue';
