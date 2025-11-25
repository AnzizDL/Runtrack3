<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moteur de Recherche Pokémon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🔍 Pokédex</h1>
        
        <form>
            <label>ID :</label>
            <input type="text" id="id" placeholder="Ex: 1, 25, 150...">

            <label>Nom :</label>
            <input type="text" id="name" placeholder="Ex: Pikachu, Charmander...">

            <label>Type :</label>
            <select id="type">
                <option value="">-- Tous les types --</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Grass">Grass</option>
                <option value="Poison">Poison</option>
                <option value="Electric">Electric</option>
                <option value="Flying">Flying</option>
                <option value="Bug">Bug</option>
                <option value="Normal">Normal</option>
                <option value="Ground">Ground</option>
                <option value="Psychic">Psychic</option>
                <option value="Fairy">Fairy</option>
                <option value="Rock">Rock</option>
                <option value="Ice">Ice</option>
                <option value="Fighting">Fighting</option>
                <option value="Ghost">Ghost</option>
                <option value="Steel">Steel</option>
            </select>

            <input type="button" id="filter-btn" value="Filtrer">
        </form>

        <div id="results"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
