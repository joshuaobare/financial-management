<?php
session_start();
include_once("../config/pdo.php");

try {
    $log_sql = "INSERT INTO LOGS (user_id, event) VALUES (:user_id, :event)";
    $log_stmt = $pdo->prepare($log_sql);
    $log_stmt->execute([
        ":user_id" => null,
        ":event" => "User logged out:" . $_SESSION['user_id'],
    ]);
} catch (PDOException $e) {
    // Log any database errors
    //error_log("Error logging user logout: " . $e->getMessage());
    echo "An error has occurred: " . $e->getMessage() . "";
}

session_destroy();

echo json_encode(array("message" => "Successfully logged out"));
header('location:login.php');