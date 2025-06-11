/*2.6. Mode sombre 
• À activer via un bouton switch 
• Changement : 
xo fond sombre 
xo texte clair 
?o boutons adaptés 
o champs de formulaire avec bordures claires */

/*3.2. Carrousel 
• Défilement automatique toutes les 4 secondes 
• Navigation manuelle avec boutons prev et next 
• Chaque élément est une div.carousel-item 
• Gérer l’état active pour afficher l’élément courant */

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkmode-toggle");
const body = document.body;
const aLinks = document.querySelectorAll("a"); 

// Check localStorage for saved mode preference
if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add("dark-mode");
    body.style.backgroundColor = "black";
    body.style.color = "white";
    localStorage.setItem("darkMode", "enabled");
    // Loop through each <a> element and change color
    aLinks.forEach(link => {
        link.style.color = "yellow";
    });
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
    body.style.backgroundColor = "white";
    body.style.color = "black";
    localStorage.setItem("darkMode", "disabled");
    // Loop through each <a> element and change color
    aLinks.forEach(link => {
        link.style.color = "blue";
    });
}



/* Carousel Code */

const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('#carouselBack');
const nextBtn = document.querySelector('#carouselForward');
let currentIndex = 1;

// Function to show the active item
function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

// Prev button functionality
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

// Automatic scrolling every 4 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}, 4000);
