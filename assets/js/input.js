const inputButton = document.querySelector('#input-button');
const searchInput = document.querySelector('#search');

inputButton.addEventListener('click', () => {
    if(getComputedStyle(searchInput).display === 'none') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});