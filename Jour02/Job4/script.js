// On récupère le textarea
let textarea = document.getElementById("keylogger");

// On écoute toutes les touches du clavier
document.addEventListener("keydown", function(event) {

    let lettre = event.key.toLowerCase(); // On prend la touche en minuscule

    // Est-ce que c'est une lettre entre a et z ?
    if(lettre >= "a" && lettre <= "z") {

        // Si le textarea est sélectionné (focus)
        if(document.activeElement === textarea) {
            textarea.value += lettre + lettre; // on ajoute 2 fois
        }
        else {
            textarea.value += lettre; // sinon une seule fois
        }
    }
});
