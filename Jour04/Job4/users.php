<?php
$host = 'localhost';
$dbname = 'utilisateurs';   // le nom de ta base
$user = 'root';             // souvent root en local
$password = '';             // souvent vide en local

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT id, nom, prenom, email FROM utilisateurs";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($users);

} catch (PDOException $e) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'error' => 'Erreur de connexion ou de requête : ' . $e->getMessage()
    ]);
}
