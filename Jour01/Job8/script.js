// Fonction qui vérifie si un nombre est premier
function estPremier(n) {

    // Un nombre premier est obligatoirement supérieur à 1
    if (n <= 1) {
        return false;
    }

    // On teste tous les nombres entre 2 et n-1
    // Si n est divisible par l’un d’eux → ce n'est PAS premier
    for (let i = 2; i < n; i++) {

        // Si le reste de la division est 0 → divisible → pas premier
        if (n % i === 0) {
            return false;
        }
    }

    // Si on n'a trouvé aucun diviseur → c'est premier
    return true;
}



// Fonction qui retourne la somme si les deux nombres sont premiers
function sommenombrespremiers(a, b) {

    // Vérifie si a est premier ET b est premier
    if (estPremier(a) && estPremier(b)) {

        // Si oui → retourne leur somme
        return a + b;

    } else {

        // Sinon → retourne false
        return false;
    }
}



// Quelques exemples pour tester
console.log(sommenombrespremiers(5, 7));  // → 12 (car 5 et 7 sont premiers)
console.log(sommenombrespremiers(6, 7));  // → false (6 n'est pas premier)
console.log(sommenombrespremiers(11, 13)); // → 24
console.log(sommenombrespremiers(1, 3));  // → false (1 n'est pas premier)
