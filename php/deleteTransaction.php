<?php

include_once ("../config/pdo.php");
include_once ("./header.php");

if (isset($_GET["transaction_id"])) {
    try {
        $sql = "DELETE FROM BUDGETS WHERE TRANSACTION_ID = :transaction_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":transaction_id" => $_GET["transaction_id"]
            )
        );
        echo json_encode(array("message" => "Transaction item successfully deleted"));
    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }
}