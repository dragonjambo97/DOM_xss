window.onload = function() {
    const form = document.getElementById('inputForm') as HTMLFormElement;
    const displayArea = document.getElementById('displayArea');   
    // Obsługa wyświetlania danych z URL.
    const params = new URLSearchParams(window.location.search);
    const inputFromURL = params.get('input');
    if (inputFromURL && displayArea) {       
         displayArea.innerHTML = DOMPurify.sanitize(inputFromURL);        
    }
    // Dodaje listener do formularza, jeśli formularz istnieje.
    if (form && displayArea) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Zapobiega domyślnej akcji formularza (przekierowanie).

            const userInput = (document.getElementById('userInput') as HTMLInputElement).value;            
             displayArea.innerHTML = DOMPurify.sanitize(userInput);            

            // Wyczyść pole po wyświetleniu.
            (document.getElementById('userInput') as HTMLInputElement).value = '';
        });
    }
};
