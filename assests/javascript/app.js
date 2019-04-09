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
    buttons.classList.add("btn","api","btn-primary","px-3","m-3");
    //increment counter 
    i++;
    document.getElementById("inpt").value = "";
    }
   document.querySelector(".container-fluid").addEventListener("click",function(event){
     //checking if the clicked is the animal button
    if(event.target.tagName =="BUTTON" && !(event.target.textContent==="Submit"))
    {
    var q = event.target.textContent;
    var queryUrl = `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=sDGIvQPjRZcVOq4NnMW7QFAQNZ0ocf08&limit=5"&rating=g`;
    //checking if the window support fetch 
      //perform ajax request 
      fetch(queryUrl,{
        method: "GET"
      })
      .then(function(response){
        return response.json();
      })
      .then(function(response){
        var results = response.data;
        //creating a div element 
        var divRes = document.createElement("div");
        divRes.classList.add("row");
        document.getElementById("container").append(divRes);
        for(let obj of results){
          //save the rate to a variable
          var rate = obj.rating;
          //create a paragraph 
          var para = document.createElement("p");
          //center the text 
          para.classList.add("text-center");
          // providing inner text to the paragraph 
          para.innerText = `Rating:${rate}`;
          //creat a video tag 
          var vide = document.createElement("video");
          //vide.classList.add("thumbnail","img-fluid");
          //provide source for the video 
          vide.setAttribute("src",obj.images.preview_gif.url);
          //appending the paragraph and the video 
          divRes.appendChild(para);
          divRes.appendChild(vide);


        }

      })
    }
    } )