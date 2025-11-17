function jourtravaille(date) {

    let jour = date.getDate();
    let mois = date.getMonth();      // 0 = janvier
    let annee = date.getFullYear();

    // Liste des jours fériés de 2020
    let joursFeries2020 = [
        [0, 1],   // 1 janvier
        [3, 13],  // 13 avril (Pâques)
        [4, 1],   // 1 mai
        [4, 8],   // 8 mai
        [4, 21],  // Ascension
        [5, 1],   // Pentecôte
        [6, 14],  // 14 juillet
        [7, 15],  // Assomption
        [10, 1],  // Toussaint
        [10, 11], // Armistice
        [11, 25]  // Noël
    ];

    // Vérifier si c'est un jour férié
    for (let i = 0; i < joursFeries2020.length; i++) {
        if (joursFeries2020[i][0] === mois && joursFeries2020[i][1] === jour) {
            console.log(`Le ${jour}/${mois+1}/${annee} est un jour férié`);
            return;
        }
    }

    let jourSemaine = date.getDay(); // 0 = dimanche, 6 = samedi

    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour}/${mois+1}/${annee} est un week-end`);
    } else {
        console.log(`Oui, ${jour}/${mois+1}/${annee} est un jour travaillé`);
    }
}

// Exemple d'appel
jourtravaille(new Date("2020-05-01"));
