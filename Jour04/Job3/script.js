const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const typeSelect = document.getElementById("type");
const button = document.getElementById("filter-btn");
const results = document.getElementById("results");

button.addEventListener("click", () => {
    fetch("pokemon.json")
        .then(response => response.json())
        .then(pokemons => {

            const idValue = idInput.value.trim();
            const nameValue = nameInput.value.trim().toLowerCase();
            const typeValue = typeSelect.value;

            const filteredPokemons = pokemons.filter(pokemon => {

                if (idValue !== "" && pokemon.id != idValue) {
                    return false;
                }

                if (nameValue !== "" && !pokemon.name.french.toLowerCase().includes(nameValue)) {
                    return false;
                }

                if (typeValue !== "" && !pokemon.type.includes(typeValue)) {
                    return false;
                }

                return true;
            });

            displayPokemons(filteredPokemons);
        });
});

function displayPokemons(pokemons) {
    results.innerHTML = "";

    if (pokemons.length === 0) {
        results.textContent = "Aucun Pokémon trouvé.";
        return;
    }

    const ul = document.createElement("ul");

    pokemons.forEach(pokemon => {
        const li = document.createElement("li");
        li.textContent = "#" + pokemon.id + " - " + pokemon.name.french + " (" + pokemon.type.join(", ") + ")";
        ul.appendChild(li);
    });

    results.appendChild(ul);
}
