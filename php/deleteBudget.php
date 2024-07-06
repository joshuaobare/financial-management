<?php

include_once ("../config/pdo.php");
include_once ("./header.php");

if (isset($_GET["budget_id"])) {
    try {
        $sql = "DELETE FROM BUDGETS WHERE BUDGET_ID = :budget_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":budget_id" => $_GET["id"]
            )
        );
        echo json_encode(array("message" => "Budget item successfully deleted"));
    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }
}