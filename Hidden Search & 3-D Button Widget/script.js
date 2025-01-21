const searchContainer = document.querySelector('.search-container');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
    const isActive = searchContainer.classList.toggle('active');
    console.log('isActive: ' + isActive);
    if (isActive) {
        searchInput.disabled = false;
        searchInput.focus();
    } else {
        searchInput.disabled = true;
    }
});
