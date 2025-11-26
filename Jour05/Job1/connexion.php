<?php
session_start();

$host = 'localhost';
$dbname = 'utilisateurs';
$user = 'root';
$password = '';

$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ?");
    $stmt->execute([$email]);
    $userData = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($userData && password_verify($pass, $userData['password'])) {
        $_SESSION['user'] = [
            'id' => $userData['id'],
            'prenom' => $userData['prenom']
        ];
        header("Location: index.php");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Connexion</h1>

        <form method="POST" onsubmit="validateConnexion(event)">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
            <div id="error-email" class="error-message"></div>

            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password">
            <div id="error-password" class="error-message"></div>

            <button type="submit">Se connecter</button>
        </form>
    </div>

    <script src="validation.js"></script>
</body>
</html>
