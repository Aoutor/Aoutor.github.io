const lineNumbersContainer = document.getElementById('line-numbers');
const numberOfLines = 30;
for (let i = 1; i <= numberOfLines; i++) {
    const lineNumber = document.createElement('p');
    lineNumber.textContent = i;
    lineNumbersContainer.appendChild(lineNumber);
}

const menuItems = document.querySelectorAll('.menu-item');

const contentElement = document.getElementById('content');

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const fileToLoad = item.getAttribute('data-file');
        loadContent(fileToLoad);
    });
});

function loadContent(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
            }
            return response.text();
        })
        .then(data => {
            contentElement.innerHTML = data;
        })
}



