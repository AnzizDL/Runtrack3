<?php
// Paramètres de connexion (à adapter si besoin)
$host = 'localhost';
$dbname = 'utilisateurs';      // le nom de ta base
$user = 'root';
$password = '';                // souvent vide en local

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer tous les utilisateurs
    $sql = "SELECT id, nom, prenom, email FROM utilisateurs";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Indiquer qu'on renvoie du JSON
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($users);

} catch (PDOException $e) {
    // En cas d'erreur, renvoyer un JSON d'erreur
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'error' => 'Erreur de connexion ou de requête : ' . $e->getMessage()
    ]);
}
