import DOMPurify from 'dompurify'

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const input = params.get('input');
    const displayArea = document.getElementById('displayArea')
    if (input && displayArea) {
        // Użyj innerHTML tylko dla celów demonstracyjnych. W rzeczywistych aplikacjach należy stosować sanitację!
        displayArea.textContent = input;
    }
};

function displayUserInput(input: string): void {
    const displayArea = document.getElementById('displayArea');
    if (displayArea !== null) {
        // W tym miejscu, dla celów demonstracyjnych używamy innerHTML, pamiętać o sanitacji danych wejściowych w realnych aplikacjach.
        displayArea.innerHTML = DOMPurify.sanitize(input); // To jest podatne na Reflected XSS!
    }
    
}


