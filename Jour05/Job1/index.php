<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Death Note – Accueil</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&display=swap" rel="stylesheet">
</head>
<body>

<div class="app-wrapper">
    <div class="card">
        <h1 class="title">Death Note</h1>
        <p class="subtitle">Gestion des utilisateurs</p>
        <div class="divider"></div>

        <?php if (isset($_SESSION['user'])): ?>
            <p class="welcome">
                Bienvenue, <span><?= htmlspecialchars($_SESSION['user']['prenom']) ?></span>.
            </p>
            <div class="link-list">
                <a href="logout.php" class="link">Se déconnecter</a>
            </div>
        <?php else: ?>
            <p class="message">Choisis ton destin :</p>
            <div class="link-list">
                <a href="inscription.php" class="link">Inscription</a>
                <a href="connexion.php" class="link">Connexion</a>
            </div>
        <?php endif; ?>

        <p class="card-footer">"Les noms inscrits ici ne disparaissent jamais vraiment…"</p>
    </div>
</div>

</body>
</html>
