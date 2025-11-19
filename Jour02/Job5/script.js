// Quand la page est prête
window.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("footer");
  const scrollValueSpan = document.getElementById("scroll-value");

  // Fonction qui met à jour la couleur du footer
  function updateFooterColor() {
    // Distance scrollée depuis le haut
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Hauteur totale de la page
    const scrollHeight = document.documentElement.scrollHeight;

    // Hauteur visible (fenêtre)
    const windowHeight = window.innerHeight;

    // Hauteur "scrollable" = total - fenêtre
    const scrollable = scrollHeight - windowHeight;

    let pourcentage = 0;

    if (scrollable > 0) {
      pourcentage = (scrollTop / scrollable) * 100;
    }

    // On arrondit pour l'affichage
    const pourcentageArrondi = Math.round(pourcentage);

    // On affiche le pourcentage dans le footer
    scrollValueSpan.textContent = pourcentageArrondi;

    // On fait évoluer la couleur avec HSL (0 = rouge, 120 = vert)
    const hue = Math.round((pourcentage / 100) * 120);
    // On change directement la couleur du footer
    footer.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;
  }

  // On met à jour au chargement
  updateFooterColor();

  // On met à jour à chaque scroll
  window.addEventListener("scroll", updateFooterColor);
  // On peut aussi mettre à jour lors du redimensionnement (facultatif)
  window.addEventListener("resize", updateFooterColor);
});
