// Petite fonction pour déterminer si une année est bissextile
// Règles : divisible par 4 sauf si divisible par 100, sauf si divisible par 400
function bisextile(annee) {
	// convertir en nombre (tolère une chaîne numérique)
	const y = Number(annee);
	if (!Number.isFinite(y) || !Number.isInteger(y)) {
		// comportement : si l'entrée n'est pas un entier valide, retourner false
		return false;
	}
	return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

// Exemples d'utilisation
console.log("Hello Javascript");
console.log("2000 ->", bisextile(2000)); // true
console.log("1900 ->", bisextile(1900)); // false
console.log("2024 ->", bisextile(2024)); // true
console.log("2023 ->", bisextile(2023)); // false

// Export simple pour tests ou usage côté module (si utilisé dans un environnement module)
if (typeof module !== 'undefined' && module.exports) {
	module.exports.bisextile = bisextile;
}