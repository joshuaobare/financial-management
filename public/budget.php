<?php
include_once ("../config/pdo.php");

$data = file_get_contents('php://input');
$_POST = json_decode($data, true);

if (isset($_POST["user_id"]) && isset($_POST["category"]) && isset($_POST["amount"]) && isset($_POST["start_date"]) && isset($_POST["end_date"])) {
    try {
        $sql = "INSERT INTO BUDGETS (user_id, category, amount,start_date, end_date) VALUES (:user_id, :category, :amount, :start_date, :end_date)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":user_id" => $_POST["user_id"],
                ":category" => $_POST["category"],
                ":amount" => $_POST["amount"],
                ":start_date" => $_POST["start_date"],
                ":end_date" => $_POST["end_date"]
            )
        );
        $data = array("message" => "Budget item created successfully");
        echo json_encode($data);
    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }
}

