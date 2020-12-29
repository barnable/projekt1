var button = document.getElementById("button");
var notification = document.getElementById("notifications");
var amount = document.getElementById("amount");
var h1 = document.getElementById("h1");
var message=document.querySelector('.notifications--message');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');

//dismiss notifications
button.addEventListener("click", changeNotification);
function changeNotification(){
notification.classList.add("hide");
button.classList.add("hide");
amount.innerHTML = "0";
h1.innerHTML= "You have no notifications"
}

//show message box
message.addEventListener("click", modal);
function showMessage(){
    backdrop.style.display="block";
    modal.style.display="flex";
}

//hide message
backdrop.addEventListener("click", close)
function closeMessage(){
    modal.style.display="none";
    backdrop.style.display="none";
}
