function tri(numbers, order) {

    // Si l'ordre est "asc" -> tri du plus petit au plus grand
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b; // si a < b -> a avant b
        });
    }

    // Si l'ordre est "desc" -> tri du plus grand au plus petit
    else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a; // si b < a -> b avant a
        });
    }

    // Si le paramètre order est incorrect
    else {
        console.log("Ordre invalide, utilisez 'asc' ou 'desc'");
        return false;
    }

    return numbers;
}


// 🔍 Test
console.log(tri([5, 2, 9, 1], "asc"));   // -> [1, 2, 5, 9]
console.log(tri([5, 2, 9, 1], "desc"));  // -> [9, 5, 2, 1]
