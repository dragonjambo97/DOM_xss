function displayUserInput(): void {
    const userInput = (document.getElementById('userInput') as HTMLInputElement).value;
    // To jest podatne na atak DOM XSS!
    document.getElementById('displayArea')!.innerHTML = userInput;
}
