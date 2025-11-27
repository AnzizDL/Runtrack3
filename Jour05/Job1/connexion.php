<?php
session_start();

// connexion BDD
$pdo = new PDO("mysql:host=localhost;dbname=utilisateurs;charset=utf8", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Si POST → réponse JSON pour fetch
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ['success' => false, 'errors' => []];

    $email = trim($_POST['email'] ?? '');
    $pass  = $_POST['password'] ?? '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['errors']['connexion'] = "Email invalide";
    } elseif ($pass === '') {
        $response['errors']['connexion'] = "Mot de passe obligatoire";
    } else {
        $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) {
            $response['errors']['connexion'] = "Email introuvable";
        } elseif ($pass !== $user['password']) {
            $response['errors']['connexion'] = "Mot de passe incorrect";
        } else {
            $_SESSION['user'] = [
                'id'     => $user['id'],
                'prenom' => $user['prenom'],
                'email'  => $user['email']
            ];
            $response['success'] = true;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

// Si GET → on affiche le formulaire
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Death Note – Connexion</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&display=swap" rel="stylesheet">
</head>
<body>

<div class="app-wrapper">
    <div class="card">
        <h1 class="title">Connexion</h1>
        <p class="subtitle">Relis le nom inscrit dans le carnet</p>
        <div class="divider"></div>

        <form id="loginForm">
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
            </div>

            <div>
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password">
            </div>

            <button type="submit">Se connecter</button>
            <span id="err-connexion" class="error-field"></span>
        </form>

        <p class="card-footer">
            Aucun nom inscrit ? <a href="inscription.php" class="link">Crée un compte</a>
        </p>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
