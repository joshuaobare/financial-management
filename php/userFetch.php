<?php

// Include the database connection configuration , header file
include_once ("../config/pdo.php");
include_once ("./header.php");

// This block fetches all budget items belonging to a user
if (isset($_GET["user_id"])) {
    try {
        $sql = "SELECT * FROM USERS WHERE USER_ID = :user_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":user_id" => $_GET["user_id"]
            )
        );
        // Initialize an empty array to hold the fetched data
        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        // Respond with a JSON-encoded message and the fetched budget data
        echo json_encode(array("message" => "User fetched", "user" => $data));

    } catch (PDOException $e) {
        // If there's a PDO exception, respond with the error message
        echo json_encode(array("error" => $e->getMessage()));
    }

}