"use strict";

window.onload = init;

function init() {

    let greetUserBtn = document.getElementById("greetUserBtn");
    greetUserBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() { 

    let nameField = document.getElementById("nameField");
    let username = nameField.value;
    let messageDiv = document.getElementById("messageDiv");
    messageDiv.innerHTML = `Hello ${username}!`;
}