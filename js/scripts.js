
const lineNumbersContainer = document.getElementById('line-numbers');
const numberOfLines = 30;
for (let i = 1; i <= numberOfLines; i++) {
    const lineNumber = document.createElement('p');
    lineNumber.textContent = i;
    lineNumbersContainer.appendChild(lineNumber);
}