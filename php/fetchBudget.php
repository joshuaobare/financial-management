<?php

include_once ("../config/pdo.php");
include_once ("./header.php");

// This block fetches all budget items belonging to a user
if (isset($_GET["user_id"])) {
    try {
        $sql = "SELECT * FROM BUDGETS WHERE USER_ID = :user_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":user_id" => $_GET["user_id"]
            )
        );
        $data = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }
        echo json_encode(array("message" => "User's budget fetched", "budgets" => $data));

    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }

}