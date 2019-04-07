//current list of animals 
var list = ["dogs","cats","birds","snakes"];
var i = 0;
//creat button for the array list elements
list.forEach(btnCreate);
document.getElementById("sub").addEventListener("click", function(event){
event.preventDefault();
//grab the input value and save it a variable 
var input = document.getElementById("inpt").value;
// adding the element to the array of list 
list.push(input);
//creat a new button 
btnCreate();
})
function btnCreate(){
    // creat a btn and save it to variable 
    var buttons = document.createElement("button");
    // add the button to the div with btns id 
    document.querySelector("#btns").append(buttons);
    buttons.textContent = list[i];
    // add bootstrap class to the buttons
    buttons.classList.add("btn","btn-primary","px-3","m-3");
    //increment counter 
    i++;
    document.getElementById("inpt").value = "";
    }
    //reset the input form 