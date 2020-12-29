var notification = document.getElementById("notifications");
var changeAmount = document.getElementById("amount");
var changeMessage = document.getElementById("h1");
var button = document.getElementById("button");
var modalSwitch = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var message=document.querySelector('.notifications--message');

//dismiss notifications
button.addEventListener("click", hide);
function hide(){
notification.classList.add("hide");
button.classList.add("hide");
changeAmount.innerHTML = "0";
changeMessage.innerHTML= "You have no notifications"
}

//show message box
message.addEventListener("click", modal);
function modal(){
    backdrop.style.display="block";
    modalSwitch.style.display="flex";
}

//hide modal
backdrop.addEventListener("click", close)
function close(){
    modalSwitch.style.display="none";
    backdrop.style.display="none";
}
