// Controleer of de elementen op de pagina aanwezig zijn om conflicten te voorkomen

// Functie 1: Hamburger-menu-functionaliteit (eerste HTML-pagina)
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger');
    const secondNav = document.querySelector('header nav:nth-of-type(2)');
    const crossIcon = document.querySelector('.close-icon');

    if (hamburgerIcon && secondNav && crossIcon) {
        // Zorg ervoor dat de tweede nav eerst verborgen is
        secondNav.classList.remove('visible');

        // Toon tweede nav bij klikken op hamburger
        hamburgerIcon.addEventListener('click', function () {
            secondNav.classList.add('visible');
        });

        // Verberg tweede nav bij klikken op de kruis-icoon
        crossIcon.addEventListener('click', function () {
            secondNav.classList.remove('visible');
        });
    }
});

// Functie 2: Toggle Light/Dark Mode (eerste HTML-pagina)
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-mode-btn');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
        });
    }
});

// Functie 3: Video Play/Pause (eerste HTML-pagina)
document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.querySelector('video');

    if (videoElement) {
        // Start met de video gepauzeerd
        videoElement.pause();

        videoElement.addEventListener('click', function () {
            if (videoElement.paused) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        });
    }
});

// Functie 4: Vergroting bij klik op afbeelding (eerste HTML-pagina)
document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.cirkel');
    
    if (image) {
        image.addEventListener('click', function () {
            image.classList.toggle('enlarged');
        });
    }
});

// Functie 5: Toggle tussen afbeeldingen (tweede HTML-pagina)
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.switch input');
    const img1 = document.querySelector('.imageOne');
    const img2 = document.querySelector('.imageTwo');
    const img3 = document.querySelector('.imageThree');

    if (toggleSwitch && img1 && img2 && img3) {
        // Verberg standaard de tweede afbeelding
        img2.style.display = 'none';

        // Toggle de zichtbaarheid van de afbeeldingen bij klikken op de switch
        toggleSwitch.addEventListener('change', function () {
            if (toggleSwitch.checked) {
                // Verberg img1 en laat img3 naar rechts schuiven
                img1.classList.add('hide');
                img3.classList.add('slide-out');
                
                // Toon img2
                img2.style.display = 'block';
            } else {
                // Toon img1, verwijder de slide-out van img3, en laat img3 terugkomen vanaf rechts
                img1.classList.remove('hide');
                img3.classList.remove('slide-out');
                img3.classList.add('slide-in');
                
                // Verberg img2
                img2.style.display = 'none';

                // Reset de animatie voor img3 na de overgang
                setTimeout(() => {
                    img3.classList.remove('slide-in');
                }, 500); // Tijd komt overeen met de CSS-overgang
            }
        });
    }
});
