<?php
$host = 'localhost';
$dbname = 'utilisateurs';
$user = 'root';
$password = '';

$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $prenom = trim($_POST['prenom']);
    $nom = trim($_POST['nom']);
    $email = trim($_POST['email']);
    $pass = $_POST['password'];

    $hashed = password_hash($pass, PASSWORD_DEFAULT);
    $insert = $pdo->prepare("INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (?, ?, ?, ?)");
    $insert->execute([$nom, $prenom, $email, $hashed]);
    
    header("Location: connexion.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Inscription</h1>

        <form method="POST" onsubmit="validateInscription(event)">
            <label for="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom">
            <div id="error-prenom" class="error-message"></div>

            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom">
            <div id="error-nom" class="error-message"></div>

            <label for="email">Email</label>
            <input type="email" id="email" name="email">
            <div id="error-email" class="error-message"></div>

            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password">
            <div id="error-password" class="error-message"></div>

            <label for="password_confirm">Confirmation</label>
            <input type="password" id="password_confirm" name="password_confirm">
            <div id="error-password_confirm" class="error-message"></div>

            <button type="submit">S'inscrire</button>
        </form>
    </div>

    <script src="validation.js"></script>
</body>
</html>
