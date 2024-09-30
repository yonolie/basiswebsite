// JavaScript Document


// Selecteer de elementen
const hamburgerIcon = document.getElementById('hamburger-icon');
const secondNav = document.querySelector('header nav:nth-of-type(2)');
const crossIcon = secondNav.querySelector('header nav:last-of-type img');

// Begin met de tweede nav verborgen
secondNav.classList.remove('visible'); // Zorg ervoor dat het niet zichtbaar is

// Functie om de tweede nav te tonen of te verbergen
hamburgerIcon.addEventListener('click', function() {
    // Toggle de 'visible' class om de nav te tonen of te verbergen
    secondNav.classList.toggle('visible'); // Voegt de class toe of verwijdert deze
});

// Functie om de tweede nav te verbergen bij het klikken op de kruis-icoon
crossIcon.addEventListener('click', function() {
    secondNav.classList.remove('visible'); // Verberg de tweede nav
});