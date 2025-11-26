<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Accueil</h1>

        <?php if (isset($_SESSION['user'])): ?>
            <p>Bonjour <?= htmlspecialchars($_SESSION['user']['prenom']) ?></p>
            <a href="logout.php" class="btn">Se déconnecter</a>
        <?php else: ?>
            <a href="inscription.php" class="btn">Inscription</a>
            <a href="connexion.php" class="btn">Connexion</a>
        <?php endif; ?>
    </div>
</body>
</html>
