function estPremier(n) {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function sommenombrespremiers(a, b) {

    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Exemple
console.log(sommenombrespremiers(5, 7));  // 12
console.log(sommenombrespremiers(6, 7));  // false
