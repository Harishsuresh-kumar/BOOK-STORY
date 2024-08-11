//selecting + button ,overlay,pop_box
var btn= document.querySelector(".btn");
var over_lay = document.querySelector(".overlay");
var popbox = document.querySelector(".pop-box");

btn.addEventListener("click", function (){
    over_lay.style.display = "block";
    popbox.style.display = "block";
});

//if we click cancel it will refersh to stop thes we using prevent default()
//selecting these in event function

// TO STOP REFERSH IN OVERLAY,POPBOX

var cancel=document.getElementById("can_cel")
 cancel.addEventListener("click",function(event){
    event.preventDefault()
    over_lay.style.display="none"
    popbox.style.display="none"
 })
 
 // taking input value in add book
 //select title,author,decription-input
 var bktitle=document.getElementById("title-input")
 var author=document.getElementById("author-input")
 var desc=document.getElementById("desc-input")
 // we have to create a add book page 
 //selecting container,addbook
 var container_create=document.querySelector(".container")
 var addbook=document.getElementById("add_book")
 //
 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var create_div=document.createElement("div")
    create_div.setAttribute("class","containerbox")
    create_div.innerHTML= `<h2>${bktitle.value}</h2>
                           <h5>${author.value}</h5>
                           <p>${desc.value}</p>
                           <button onclick="delbook(event)">Delete</button>`
    container_create.append(create_div)
    over_lay.style.display="none"
    popbox.style.display="none"
 })
 //we using parent element bcoz we have to delete above the button
 function delbook(event){
    event.target.parentElement.remove()
 }