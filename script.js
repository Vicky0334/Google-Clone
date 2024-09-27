// Correctly reference the HTML elements by their IDs
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const searchForm = document.getElementById('search-form');

// Search function to perform Google search
const search = () => {
    const searchTrim = searchInput.value.trim();
    if (searchTrim) {
        window.location.href = `https://www.google.com/search?q=${searchTrim}`;
    }
}

// Add event listeners for search button and form submit
searchBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior
    search();
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    search();
});

// GSAP animation for the Google logo
gsap.from("#google-logo span", {
    opacity: 0,
    y: -50,
    stagger: 0.1,
    duration: 1,
    ease: "bounce.out"
});
