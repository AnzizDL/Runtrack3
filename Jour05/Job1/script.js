const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ["prenom", "nom", "email", "password", "confirm"].forEach((id) => {
      const span = document.getElementById("err-" + id);
      if (span) span.textContent = "";
    });

    const data = new FormData(registerForm);

    fetch("inscription.php", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Réponse inscription :", response);

        if (response.success) {
          window.location.href = "connexion.php";
          return;
        }

        if (response.errors) {
          if (response.errors.prenom) {
            document.getElementById("err-prenom").textContent =
              response.errors.prenom;
          }
          if (response.errors.nom) {
            document.getElementById("err-nom").textContent =
              response.errors.nom;
          }
          if (response.errors.email) {
            document.getElementById("err-email").textContent =
              response.errors.email;
          }
          if (response.errors.password) {
            document.getElementById("err-password").textContent =
              response.errors.password;
          }
          if (response.errors.confirm) {
            document.getElementById("err-confirm").textContent =
              response.errors.confirm;
          }
        }
      })
      .catch((err) => console.error("Erreur fetch inscription :", err));
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const errSpan = document.getElementById("err-connexion");
    if (errSpan) errSpan.textContent = "";

    const data = new FormData(loginForm);

    fetch("connexion.php", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Réponse connexion :", response);

        if (response.success) {
          window.location.href = "index.php";
          return;
        }

        if (response.errors && response.errors.connexion) {
          errSpan.textContent = response.errors.connexion;
        } else {
          errSpan.textContent = "Erreur de connexion.";
        }
      })
      .catch((err) => console.error("Erreur fetch connexion :", err));
  });
}
