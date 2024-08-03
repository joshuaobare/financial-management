<?php

include_once ("../config/pdo.php");
include_once ("./header.php");

$data = file_get_contents("php://input");
$_POST = json_decode($data, true);

if (isset($_POST["user_id"]) && isset($_POST["goal_name"]) && isset($_POST["description"]) && isset($_POST["target_amount"]) && isset($_POST["due_date"]) && isset($_POST["is_achieved"])) {
    try {
        $sql = "INSERT INTO GOALS (user_id, goal_name, description, target_amount, is_achieved, due_date) VALUES (:user_id, :goal_name, :description, :target_amount, :is_achieved, :due_date)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ':user_id' => $_POST["user_id"],
                ':goal_name' => $_POST["goal_name"],
                ':target_amount' => $_POST["target_amount"],
                ':is_achieved' => $_POST["is_achieved"],
                ':description' => $_POST["description"],
                ':due_date' => $_POST["due_date"]
            )
        );
        // Respond with a success message for the transaction item creation
        $data = array("message" => "Goal created successfully");
        echo json_encode($data);
    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }

}