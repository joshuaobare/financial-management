<?php

include_once ("../config/pdo.php");
include_once ("./header.php");

$data = file_get_contents('php://input');
$_POST = json_decode($data, true);

if (isset($_POST["goal_id"]) && isset($_POST["user_id"]) && isset($_POST["goal_name"]) && isset($_POST["target_amount"]) && isset($_POST["due_date"]) && isset($_POST["is_achieved"]) && isset($_POST["current_amount"]) && isset($_POST["description"])) {
    try {
        $sql = "UPDATE GOALS SET user_id= :user_id, goal_name = :goal_name, target_amount = :target_amount, due_date = :due_date, description = :description, is_achieved = :is_achieved, current_amount=:current_amount WHERE goal_id= :goal_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":goal_id" => $_POST["goal_id"],
                ':user_id' => $_POST["user_id"],
                ':goal_name' => $_POST["goal_name"],
                ':target_amount' => $_POST["target_amount"],
                ':is_achieved' => $_POST["is_achieved"],
                ':description' => $_POST["description"],
                ':due_date' => $_POST["due_date"],
                ':current_amount' => $_POST["current_amount"],
            )
        );
        echo json_encode(array("message" => "Goal successfully updated"));

    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }
}