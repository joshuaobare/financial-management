<?php

include_once("../config/pdo.php");
include_once("./header.php");

$data = file_get_contents("php://input");
$_POST = json_decode($data, true);

if (isset($_POST["user_id"]) && isset($_POST["goal_name"]) && isset($_POST["target_amount"]) && isset($_POST["current_amount"]) && isset($_POST["due_date"]) && isset($_POST["start_date"]) && isset($_POST["end_date"])) {
    try {
        $sql = "INSERT INTO GOALS (user_id, goal_name, target_amount, current_amount, due_date, created_at) VALUES (:user_id, :goal_name, :target_amount";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(

            )
            );
    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }

}