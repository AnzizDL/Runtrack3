<?php
session_start();

// connexion BDD
$pdo = new PDO("mysql:host=localhost;dbname=utilisateurs;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Si on reçoit un POST, on renvoie du JSON (utilisé par fetch)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ['success' => false, 'errors' => []];

    $nom     = trim($_POST['nom'] ?? '');
    $prenom  = trim($_POST['prenom'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $pass    = $_POST['password'] ?? '';
    $confirm = $_POST['confirm_password'] ?? '';

    // Vérifs de base
    if (strlen($prenom) < 2) {
        $response['errors']['prenom'] = "Prénom trop court";
    }
    if (strlen($nom) < 2) {
        $response['errors']['nom'] = "Nom trop court";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['errors']['email'] = "Email invalide";
    }
    if ($pass === '') {
        $response['errors']['password'] = "Mot de passe obligatoire";
    }
    if ($confirm === '') {
        $response['errors']['confirm'] = "Confirmation obligatoire";
    }
    if ($pass !== '' && $confirm !== '' && $pass !== $confirm) {
        $response['errors']['confirm'] = "Les mots de passe ne correspondent pas";
    }

    // Vérif email unique si pas déjà d’erreurs
    if (empty($response['errors'])) {
        $check = $pdo->prepare("SELECT id FROM utilisateurs WHERE email = ?");
        $check->execute([$email]);
        if ($check->rowCount() > 0) {
            $response['errors']['email'] = "Email déjà utilisé";
        }
    }

    if (empty($response['errors'])) {
        $insert = $pdo->prepare("
            INSERT INTO utilisateurs (nom, prenom, email, password)
            VALUES (?, ?, ?, ?)
        ");
        $insert->execute([$nom, $prenom, $email, $pass]);
        $response['success'] = true;
    }

    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

// Si on est ici → GET classique, on affiche la page HTML
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Death Note – Inscription</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&display=swap" rel="stylesheet">
</head>
<body>

<div class="app-wrapper">
    <div class="card">
        <h1 class="title">Inscription</h1>
        <p class="subtitle">Inscris ton nom dans le registre</p>
        <div class="divider"></div>

        <form id="registerForm">
            <div>
                <label for="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom">
                <span id="err-prenom" class="error-field"></span>
            </div>

            <div>
                <label for="nom">Nom</label>
                <input type="text" id="nom" name="nom">
                <span id="err-nom" class="error-field"></span>
            </div>

            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
                <span id="err-email" class="error-field"></span>
            </div>

            <div>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
                <span id="err-password" class="error-field"></span>
            </div>

            <div>
                <label for="password_confirm">Confirmation</label>
                <input type="password" id="password_confirm" name="confirm_password">
                <span id="err-confirm" class="error-field"></span>
            </div>

            <button type="submit">S'inscrire</button>
        </form>

        <p class="card-footer">
            Tu as déjà écrit ton nom ? <a href="connexion.php" class="link">Connecte-toi</a>
        </p>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
