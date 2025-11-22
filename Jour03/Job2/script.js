// On attend que toute la page soit chargée
$(document).ready(function () {
  // Stocke la première image cliquée
  let first = null;
  // Compteur de clics
  let clickCount = 0;

  // ===============================
  // 1. BOUTON "MÉLANGER"
  // ===============================
  $("#shuffle").click(function () {
    // On récupère toutes les images dans un tableau JS
    let images = $("#game img").toArray();

    // On mélange le tableau aléatoirement
    images.sort(() => Math.random() - 0.5);

    // On vide la div puis on remet les images mélangées
    $("#game").empty().append(images);

    // On efface le message résultat et on reset le compteur
    $("#result").text("");
    clickCount = 0;
  });

  // ===============================
  // 2. CLIC SUR UNE IMAGE
  // ===============================
  $("#game").on("click", "img", function () {
    // Si aucune image n'est encore sélectionnée
    if (!first) {
      first = this; // on mémorise la première
      return;
    }

    // ÉCHANGE DES IMAGES (swap src + data-order)
    let tempSrc = $(first).attr("src");
    let tempOrder = $(first).data("order");

    $(first).attr("src", $(this).attr("src"));
    $(first).data("order", $(this).data("order"));

    $(this).attr("src", tempSrc);
    $(this).data("order", tempOrder);

    // Incrémenter le compteur de clics
    clickCount++;

    // Si 6 clics atteints, remettre automatiquement dans l'ordre
    if (clickCount === 6) {
      setTimeout(function () {
        resetOrder();
      }, 300);
    }

    // Après l'échange, on vérifie si c'est gagné
    checkWin();

    // On réinitialise la sélection
    first = null;
  });

  // ===============================
  // 3. VÉRIFICATION DE L'ORDRE
  // ===============================
  function checkWin() {
    let win = true;

    // On parcourt toutes les images
    $("#game img").each(function (index) {
      // On extrait le numéro du fichier (arc1.png → 1, arc2.png → 2, etc.)
      const src = $(this).attr("src");
      const imageNumber = parseInt(src.match(/arc(\d+)\.png$/)[1]);

      // L'image doit être à la position correspondante (arc1 → position 0, arc2 → position 1, etc.)
      if (imageNumber !== index + 1) {
        win = false;
      }

      console.log(
        `Position ${index}: attendu arc${
          index + 1
        }.png, trouvé arc${imageNumber}.png`
      );
    });

    // Si tout est dans le bon ordre
    if (win) {
      $("#result").css("color", "green").text("Vous avez gagné");
    } else {
      $("#result").text("");
    }
  }

  // ===============================
  // 4. REMISE EN ORDRE AUTOMATIQUE
  // ===============================
  function resetOrder() {
    // Récupérer toutes les images et les trier par leur numéro
    let images = $("#game img").toArray();
    images.sort(function (a, b) {
      const numA = parseInt(
        $(a)
          .attr("src")
          .match(/arc(\d+)\.png$/)[1]
      );
      const numB = parseInt(
        $(b)
          .attr("src")
          .match(/arc(\d+)\.png$/)[1]
      );
      return numA - numB;
    });

    // Vider et remettre dans l'ordre
    $("#game").empty().append(images);

    // Réinitialiser le compteur
    clickCount = 0;

    // Vérifier la victoire
    checkWin();
  }

 
  const konami = [
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

  let konamiBuffer = [];

  // Écoute globale des touches clavier
  $(document).on("keydown", function (e) {
    konamiBuffer.push(e.key);

    // Ne garder que les dernières touches utiles
    if (konamiBuffer.length > konami.length) konamiBuffer.shift();

    // Comparer les séquences
    if (konamiBuffer.join(",") === konami.join(",")) {
      // Remettre dans l'ordre et afficher la victoire
      resetOrder();
      $("#result").css("color", "green").text("Vous avez gagné (Konami)");
      konamiBuffer = [];
    }
  });
});
