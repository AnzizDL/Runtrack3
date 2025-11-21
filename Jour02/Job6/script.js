// Détecteur du Code Konami
// Séquence : ↑ ↑ ↓ ↓ ← → ← → B A
// Objectif : quand l'utilisateur saisit la suite complète, on ajoute la classe "konami" au body
// et on change le texte d'un élément #message s'il existe.

// 1. Définition de la séquence attendue (ordre strict des touches)
const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const total = sequence.length; // longueur de la séquence, évite magic number

// 2. Index courant dans la séquence (combien de touches correctes d'affilée)
let position = 0;

// 3. Gestionnaire d'événement clavier global
addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase(); // normalisation pour b/a
  const expected = sequence[position].toLowerCase();

  // 3.a Si la touche est celle attendue
  if (key === expected) {
    position++;

    // 3.b Succès : toute la séquence a été saisie
    if (position === total) {
      document.body.classList.add("konami");
      const messageEl = document.getElementById("message");
      if (messageEl) {
        messageEl.textContent = "Bravo ! Code Konami réussi.";
      }
      position = 0; // reset pour permettre de rejouer
    }
    return; // on sort, pas besoin de traiter la branche 'erreur'
  }

  // 3.c Erreur : mauvaise touche
  // Si l'utilisateur vient de taper la première bonne touche, on redémarre à 1, sinon on remet à 0
  position = key === sequence[0].toLowerCase() ? 1 : 0;
});

// Fin : le script est volontairement simple, aucune dépendance externe.
