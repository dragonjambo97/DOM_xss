"use strict";
window.onload = function () {
    var form = document.getElementById('inputForm');
    var displayArea = document.getElementById('displayArea');
    // Obsługa wyświetlania danych z URL.
    var params = new URLSearchParams(window.location.search);
    var inputFromURL = params.get('input');
    if (inputFromURL && displayArea) {
        displayArea.innerHTML = DOMPurify.sanitize(inputFromURL);
    }
    // Dodaje listener do formularza, jeśli formularz istnieje.
    if (form && displayArea) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Zapobiega domyślnej akcji formularza (przekierowanie).
            var userInput = document.getElementById('userInput').value;
            displayArea.innerHTML = DOMPurify.sanitize(userInput);
            // Wyczyść pole po wyświetleniu.
            document.getElementById('userInput').value = '';
        });
    }
};
