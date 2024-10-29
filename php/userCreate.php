<?php
include_once("../config/pdo.php");
include_once("./header.php");

function validate_input($data)
{
    $data = trim($data);
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    return $data;


}

function validate_password($password)
{
    $errors = [];

    // Check minimum length (at least 12 characters)
    if (strlen($password) < 12) {
        $errors[] = "Password must be at least 12 characters long";
    }

    // Check for uppercase letters
    if (!preg_match('/[A-Z]/', $password)) {
        $errors[] = "Password must contain at least one uppercase letter";
    }

    // Check for lowercase letters
    if (!preg_match('/[a-z]/', $password)) {
        $errors[] = "Password must contain at least one lowercase letter";
    }

    // Check for numbers
    if (!preg_match('/[0-9]/', $password)) {
        $errors[] = "Password must contain at least one number";
    }

    // Check for special characters
    if (!preg_match('/[!@#$%^&*(),.?":{}|<>]/', $password)) {
        $errors[] = "Password must contain at least one special character";
    }

    return [
        'valid' => empty($errors),
        'errors' => $errors
    ];
}

// Read the raw POST data from the request body
$data = file_get_contents('php://input');

// Decode the JSON data and assign it to the $_POST superglobal
$_POST = json_decode($data, true);

if ((isset($_POST["first_name"])) && (isset($_POST["last_name"])) && (isset($_POST["date_of_birth"])) && (isset($_POST["email"])) && (isset($_POST["password"]))) {

    // Validate password before proceeding
    $password_validation = validate_password($_POST["password"]);

    if (!$password_validation['valid']) {
        header('Content-Type: application/json');
        echo json_encode([
            'status' => 'error',
            'message' => 'Password validation failed',
            'errors' => $password_validation['errors']
        ]);
        exit;
    }


    try {
        $sql = "INSERT INTO USERS (first_name, last_name, date_of_birth, email, password) VALUES ( :first_name, :last_name, :date_of_birth, :email, :password)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":first_name" => validate_input($_POST["first_name"]),
                ":last_name" => validate_input($_POST["last_name"]),
                ":email" => validate_input($_POST["email"]),
                ":password" => password_hash($_POST["password"], PASSWORD_DEFAULT),
                ":date_of_birth" => $_POST["date_of_birth"]
            )
        );
        header('Content-Type: application/json');
        echo json_encode([
            'status' => 'success',
            'message' => 'User registered successfully'
        ]);
    } catch (PDOException $e) {
        header('Content-Type: application/json');
        echo json_encode([
            'status' => 'error',
            'message' => 'Database error: ' . $e->getMessage()
        ]);
    }
}
?>