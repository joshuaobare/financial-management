<?php

$dsn = "mysql:host=localhost;dbname=financial_management";
$user = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "An error has occurred" . $e->getMessage() . "";
}