// Validation globale
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const showError = (inputId, message) => {
  const errorDiv = document.getElementById(`error-${inputId}`);
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
  }
};

const clearError = (inputId) => {
  const errorDiv = document.getElementById(`error-${inputId}`);
  if (errorDiv) {
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
  }
};

// Vérifier si l'email existe déjà (AJAX)
const checkEmailExists = async (email) => {
  try {
    const formData = new FormData();
    formData.append("email", email);

    const response = await fetch("check_email.php", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.exists;
  } catch (error) {
    console.error("Erreur vérification email:", error);
    return false;
  }
};

// === INSCRIPTION ===
const validateInscription = async (event) => {
  event.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("password_confirm").value;

  let isValid = true;

  // Validation Prénom
  if (!prenom) {
    showError("prenom", "Prénom requis");
    isValid = false;
  } else {
    clearError("prenom");
  }

  // Validation Nom
  if (!nom) {
    showError("nom", "Nom requis");
    isValid = false;
  } else {
    clearError("nom");
  }

  // Validation Email (format)
  if (!email) {
    showError("email", "Email requis");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("email", "Email invalide");
    isValid = false;
  } else {
    clearError("email");

    // Vérification si email déjà pris (AJAX)
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      showError("email", "Email déjà utilisé");
      isValid = false;
    }
  }

  // Validation Mot de passe
  if (!password) {
    showError("password", "Mot de passe requis");
    isValid = false;
  } else {
    clearError("password");
  }

  // Validation Confirmation
  if (!passwordConfirm) {
    showError("password_confirm", "Confirmation requise");
    isValid = false;
  } else if (password !== passwordConfirm) {
    showError("password_confirm", "Les mots de passe ne correspondent pas");
    isValid = false;
  } else {
    clearError("password_confirm");
  }

  // Si tout est valide, soumettre le formulaire
  if (isValid) {
    document.querySelector("form").submit();
  }
};

// === CONNEXION ===
const validateConnexion = (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let isValid = true;

  // Validation Email
  if (!email) {
    showError("email", "Email requis");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("email", "Email invalide");
    isValid = false;
  } else {
    clearError("email");
  }

  // Validation Mot de passe
  if (!password) {
    showError("password", "Mot de passe requis");
    isValid = false;
  } else {
    clearError("password");
  }

  // Si tout est valide, soumettre le formulaire
  if (isValid) {
    document.querySelector("form").submit();
  }
};
