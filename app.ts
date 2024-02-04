// import DOMPurify from 'dompurify';

window.onload = function() {
    const form = document.getElementById('inputForm') as HTMLFormElement;
    const displayArea = document.getElementById('displayArea');
    
    // Obsługa wyświetlania danych z URL.
    const params = new URLSearchParams(window.location.search);
    const inputFromURL = params.get('input');

    console.log("Input from URL:", inputFromURL); // Debugowanie: sprawdź wartość z URL.

    if (inputFromURL && displayArea) {
        
         displayArea.innerHTML = DOMPurify.sanitize(inputFromURL);
        
    }

    // Dodajemy listener do formularza, jeśli formularz istnieje.
    if (form && displayArea) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Zapobiega domyślnej akcji formularza (przekierowanie).

            const userInput = (document.getElementById('userInput') as HTMLInputElement).value;
            //console.log("User input from form:", userInput); // Debugowanie: sprawdź wartość wprowadzoną przez użytkownika.
            
             displayArea.innerHTML = DOMPurify.sanitize(userInput);            

            // Wyczyść pole po wyświetleniu.
            (document.getElementById('userInput') as HTMLInputElement).value = '';
        });
    }
};
