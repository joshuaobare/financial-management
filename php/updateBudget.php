<?php

include_once ("../config/pdo.php");
include_once ("./header.php");

$data = file_get_contents('php://input');
$_POST = json_decode($data, true);

if (isset($_POST["budget_id"]) && isset($_POST["user_id"]) && isset($_POST["category"]) && isset($_POST["amount"]) && isset($_POST["start_date"]) && isset($_POST["end_date"])) {
    try {
        $sql = "UPDATE BUDGETS SET (amount = :amount,start_date = :start_date, end_date = :end_date) WHERE BUDGET_ID= :budget_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":amount" => $_POST["amount"],
                ":start_date" => $_POST["start_date"],
                ":end_date" => $_POST["end_date"]
            )
        );
        echo json_encode(array("message" => "Budget item updated"));

    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }
}