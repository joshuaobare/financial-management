<?php

include_once ("./pdo.php");
include_once ("./header.php");

if (isset($_GET["goal_id"])) {
    try {
        $sql = "DELETE FROM GOALS WHERE GOAL_ID = :goal_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":goal_id" => $_GET["goal_id"]
            )
        );
        echo json_encode(array("message" => "Goal successfully deleted"));
    } catch (PDOException $e) {
        echo json_encode(array("error" => $e->getMessage()));
    }
}