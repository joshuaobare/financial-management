<?php
include_once ("../config/pdo.php");
include_once ("./header.php");

$data = file_get_contents('php://input');
$_POST = json_decode($data, true);

function createTransaction($_POST, $pdo)
{
    if (
        isset($_POST['user_id']) &&
        isset($_POST['title']) &&
        isset($_POST['description']) &&
        isset($_POST['start_date']) &&
        isset($_POST['end_date']) &&
        isset($_POST['category']) &&
        isset($_POST['amount'])
    ) {
        try {
            $sql = "INSERT INTO TRANSACTIONS (user_id, title, category, amount,description, start_date, end_date) VALUES (:user_id, :title, :category, :amount,:description, :start_date, :end_date)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute(
                array(
                    ":user_id" => $_POST["user_id"],
                    ":category" => $_POST["category"],
                    ":amount" => $_POST["amount"],
                    ":start_date" => $_POST["start_date"],
                    ":end_date" => $_POST["end_date"],
                    ":title" => $_POST["title"],
                    ":description" => $_POST["description"]
                )
            );
            $data = array("message" => "Budget item created successfully");
            echo json_encode($data);
        } catch (PDOException $e) {
            echo json_encode(array("error" => $e->getMessage()));
        }
    }
}

createTransaction($_POST, $pdo);