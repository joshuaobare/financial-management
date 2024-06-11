<?php

$dsn = "mysql:host=localhost;dbname=financial_management";
$user = "root";
$password = "";

try {
    // Initialize a new PDO instance to connect to DB
    $pdo = new PDO($dsn, $user, $password);

    // Add attributes to PDO object for error handling 
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Display error to the user
    echo "An error has occurred" . $e->getMessage() . "";
}