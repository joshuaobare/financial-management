<?php

// Include the database connection configuration , header file
include_once ("./pdo.php");
include_once ("./header.php");

// This block fetches all goals belonging to a user
if (isset($_GET["user_id"])) {
    try {
        $sql = "SELECT * FROM GOALS WHERE USER_ID = :user_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":user_id" => $_GET["user_id"]
            )
        );
        // Initialize an empty array to hold the fetched data
        $data = array();

        // Fetch each row from the result set and add it to the $data array
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }
        // Respond with a JSON-encoded message and the fetched budget data
        echo json_encode(array("message" => "User's goals fetched", "goals" => $data));

    } catch (PDOException $e) {
        // If there's a PDO exception, respond with the error message
        echo json_encode(array("error" => $e->getMessage()));
    }

}