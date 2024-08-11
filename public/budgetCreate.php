<?php
// Include the database connection configuration , header file and createTransaction function
include_once ("./pdo.php");
include_once ("./header.php");

// Read the raw POST data from the request body
$data = file_get_contents('php://input');

// Decode the JSON data and assign it to the $_POST superglobal
$_POST = json_decode($data, true);

// Check if all required POST variables are set
if (isset($_POST["user_id"]) && isset($_POST["title"]) && isset($_POST["category"]) && isset($_POST["amount"]) && isset($_POST["description"]) && isset($_POST["start_date"]) && isset($_POST["end_date"])) {
    try {
        // SQL query to insert a new budget item into the BUDGETS table
        $sql = "INSERT INTO BUDGETS (user_id, title, category, amount, description, start_date, end_date) VALUES (:user_id, :title, :category, :amount, :description, :start_date, :end_date)";

        // Prepare the SQL statement
        $stmt = $pdo->prepare($sql);

        // Execute the statement with the POST data
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
        // Respond with a success message for the transaction item creation
        $data = array("message" => "Budget item created successfully");
        echo json_encode($data);

    } catch (PDOException $e) {
        // If there's a PDO exception, respond with the error message
        echo json_encode(array("error" => $e->getMessage()));
    }
}