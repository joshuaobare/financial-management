<?php
// Include the database connection configuration , header file and createTransaction function
include_once ("../config/pdo.php");
include_once ("./header.php");
include_once ("./createTransaction.php");

// Read the raw POST data from the request body
$data = file_get_contents('php://input');

// Decode the JSON data and assign it to the $_POST superglobal
$_POST = json_decode($data, true);


// Check if all required POST variables are set
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
        // Respond with a success message for the transaction item creation
        $data = array("message" => "Transaction item created successfully");
        echo json_encode($data);
    } catch (PDOException $e) {
        // If there's a PDO exception, respond with the error message
        echo json_encode(array("error" => $e->getMessage()));
    }
}
