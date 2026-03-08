// -------- TASK 2 --------
// Alert / Confirm / Prompt

function alertFun(){
  alert("Hello !");
}

function confirmFun(){
  let didConfirm = confirm("Are you sure about that?");

  if(didConfirm){
    alert("You confirmed :)");
  }else{
    alert("You did not confirm :(");
  }
}

function promptFun(){
  let val = prompt("What is your name?");
  alert(`You've entered: ${val}`);
}


// -------- TASK 3 --------
// Browser Object Model

console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);
}

window.onload = function(event){
  console.log("Page has loaded");
};


// -------- TASK 4 --------
// DOM manipulation

const result = document.querySelector('#result');

result.innerHTML = '<h2>My Span</h2>';
result.style.color = 'blue';


// -------- TASK 5 --------
// DOM Event Listeners

function myFun(){
  alert("hello");
}

function myFun2(){
  console.log("myFun2 called");
}

function logEventType(event){
  console.log(event.type);
}

let myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", myFun2);
myBtn.addEventListener("mouseover", logEventType);
myBtn.addEventListener("mouseout", logEventType);


// -------- EXERCISE --------
// Image load event

function loaded(){
  console.log("img loaded");
}

let cageImg = document.querySelector("#cageImg");
cageImg.addEventListener("load", loaded);

// Javascript References Example

let myobj = {
  name: "Bob",
  balance: 10
};

//obj2 and myobj are the same reference
let obj2 = myobj;

obj2.name = "Shelly";

console.log(myobj.name); //Shelly


//create a new object copy using Object.assign
let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = "Smith";

console.log(myobj.name, obj3.name); //Shelly Smith

