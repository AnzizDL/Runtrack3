<?php
header('Content-Type: application/json');

$host = 'localhost';
$dbname = 'utilisateurs';
$user = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    
    if (isset($_POST['email'])) {
        $email = trim($_POST['email']);
        
        $check = $pdo->prepare("SELECT id FROM utilisateurs WHERE email = ?");
        $check->execute([$email]);
        
        echo json_encode(['exists' => $check->rowCount() > 0]);
    } else {
        echo json_encode(['exists' => false]);
    }
} catch (Exception $e) {
    echo json_encode(['exists' => false, 'error' => $e->getMessage()]);
}
