
//open message box
button=document.getElementById("button");
button.addEventListener("click", hide);
function hide(){
var notification = document.getElementById("notifications");
var changeAmount = document.getElementById("amount");
var changeMessage = document.getElementById("h1");
var button = document.getElementById("button");
notification.classList.add("hide");
button.classList.add("hide");
changeAmount.innerHTML = "0";
changeMessage.innerHTML= "You have no notifications"
}

message=document.querySelector('.notifications--message');
message.addEventListener("click", modal);
function modal(){
    var backdrop = document.querySelector('.backdrop');
    var modal = document.querySelector('.modal');
    backdrop.style.display="block";
    modal.style.display="flex";
}


//close modal

var modalHide = document.querySelector('.modal');
var backdropHide = document.querySelector('.backdrop');
backdropHide.addEventListener("click", close)

function close(){
    var modal = document.querySelector('.modal');
    var backdrop = document.querySelector('.backdrop');
    modal.style.display="none";
    backdrop.style.display="none";
}
