const updateButton = document.getElementById("update-button");
const usersBody = document.getElementById("users-body");

updateButton.addEventListener("click", () => {
    fetch("users.php")
        .then(response => response.json())
        .then(users => {
            // Vider le tableau
            usersBody.innerHTML = "";

            // Pour chaque utilisateur, on crée une ligne
            users.forEach(user => {
                const tr = document.createElement("tr");

                const tdId = document.createElement("td");
                tdId.textContent = user.id;

                const tdNom = document.createElement("td");
                tdNom.textContent = user.nom;

                const tdPrenom = document.createElement("td");
                tdPrenom.textContent = user.prenom;

                const tdEmail = document.createElement("td");
                tdEmail.textContent = user.email;

                tr.appendChild(tdId);
                tr.appendChild(tdNom);
                tr.appendChild(tdPrenom);
                tr.appendChild(tdEmail);

                usersBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error("Erreur lors du fetch :", error);
        });
});
