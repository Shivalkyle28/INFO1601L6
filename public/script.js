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
