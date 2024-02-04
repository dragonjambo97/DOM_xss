"use strict";
// import DOMPurify from 'dompurify';
window.onload = function () {
    var form = document.getElementById('inputForm');
    var displayArea = document.getElementById('displayArea');
    // Obsługa wyświetlania danych z URL.
    var params = new URLSearchParams(window.location.search);
    var inputFromURL = params.get('input');
    console.log("Input from URL:", inputFromURL); // Debugowanie: sprawdź wartość z URL.
    if (inputFromURL && displayArea) {
        displayArea.innerHTML = DOMPurify.sanitize(inputFromURL);
    }
    // Dodajemy listener do formularza, jeśli formularz istnieje.
    if (form && displayArea) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Zapobiega domyślnej akcji formularza (przekierowanie).
            var userInput = document.getElementById('userInput').value;
            //console.log("User input from form:", userInput); // Debugowanie: sprawdź wartość wprowadzoną przez użytkownika.
            displayArea.innerHTML = DOMPurify.sanitize(userInput);
            // Wyczyść pole po wyświetleniu.
            document.getElementById('userInput').value = '';
        });
    }
};
