document.addEventListener('DOMContentLoaded', () => {
    // --- MENU MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// --- GESTION DES MODALES ---

// Fonction pour ouvrir une modale spécifique
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    // Empêcher le scroll du body quand la modale est ouverte
    document.body.style.overflow = "hidden";
}

// Fonction pour fermer une modale spécifique
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // Réactiver le scroll
    document.body.style.overflow = "auto";
}

// Fermer la modale si on clique en dehors du contenu (sur le fond noir)
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}