"use strict";
function displayUserInput() {
    var userInput = document.getElementById('userInput').value;
    // To jest podatne na atak DOM XSS!
    document.getElementById('displayArea').innerHTML = userInput;
}
