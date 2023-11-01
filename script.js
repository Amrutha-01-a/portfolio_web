// Get the button element by its ID
const darkModeButton = document.getElementById('dark-mode-toggle');

// Get the body element
const body = document.body;

// Check if the user has a preference for dark mode in local storage
const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
}

// Toggle dark mode when the button is clicked
darkModeButton.addEventListener('click', () => {
    isDarkMode ? disableDarkMode() : enableDarkMode();
});

// Set the initial mode based on user's preference
if (isDarkMode) {
    enableDarkMode();
}
