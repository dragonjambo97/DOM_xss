"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dompurify_1 = __importDefault(require("dompurify"));
window.onload = function () {
    var params = new URLSearchParams(window.location.search);
    var input = params.get('input');
    var displayArea = document.getElementById('displayArea');
    if (input && displayArea) {
        // Użyj innerHTML tylko dla celów demonstracyjnych. W rzeczywistych aplikacjach należy stosować sanitację!
        displayArea.textContent = input;
    }
};
function displayUserInput(input) {
    var displayArea = document.getElementById('displayArea');
    if (displayArea !== null) {
        // W tym miejscu, dla celów demonstracyjnych używamy innerHTML, pamiętać o sanitacji danych wejściowych w realnych aplikacjach.
        displayArea.innerHTML = dompurify_1.default.sanitize(input); // To jest podatne na Reflected XSS!
    }
}
