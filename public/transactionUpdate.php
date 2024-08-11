<?php

include_once ("./pdo.php");
include_once ("./header.php");

$data = file_get_contents('php://input');
$_POST = json_decode($data, true);

if (isset($_POST["transaction_id"]) && isset($_POST["user_id"]) && isset($_POST["category"]) && isset($_POST["amount"]) && isset($_POST["start_date"]) && isset($_POST["end_date"]) && isset($_POST["title"]) && isset($_POST["description"])) {
    try {
        $sql = "UPDATE TRANSACTIONS SET user_id= :user_id, amount = :amount,start_date = :start_date, end_date = :end_date, description = :description, title = :title, category=:category WHERE transaction_id= :transaction_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":transaction_id" => $_POST["transaction_id"],
                ":user_id" => $_POST["user_id"],
                ":amount" => $_POST["amount"],
                ":start_date" => $_POST["start_date"],
                ":end_date" => $_POST["end_date"],
                ":description" => $_POST["description"],
                ":category" => $_POST["category"],
                ":title" => $_POST["title"]
            )
        );
        echo json_encode(array("message" => "Transaction item updated"));

    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }
}