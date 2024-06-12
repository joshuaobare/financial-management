<?php
include_once ("../config/pdo.php");

if ((isset($_POST["first_name"])) && (isset($_POST["last_name"])) && (isset($_POST["date_of_birth"])) && (isset($_POST["email"])) && (isset($_POST["password"]))) {

        try {
                $sql = "INSERT INTO USERS (first_name, last_name, date_of_birth, email, password) VALUES ( :first_name, :last_name, :date_of_birth, :email, :password)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute(
                        array(
                                ":first_name" => $_POST["first_name"],
                                ":last_name" => $_POST["last_name"],
                                ":email" => $_POST["email"],
                                ":password" => password_hash($_POST["password"], PASSWORD_DEFAULT),
                                ":date_of_birth" => $_POST["date_of_birth"]
                        )
                );
        } catch (PDOException $e) {
                echo "An error has occurred: " . $e->getMessage() . "";
        }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../styles/main.css">
        <link rel="stylesheet" href="../styles/register.css">
        <title>Register</title>
</head>

<body>
        <main class="register-main">
                <form action="#" class="register-form" method="post">
                        <div class="register-form-item"><label for="first_name">First Name</label><input type="text"
                                        class="register-form-item-input" name="first_name" id="first_name"></div>
                        <div class="register-form-item"><label for="last_name">Last Name</label><input type="text"
                                        class="register-form-item-input" name="last_name" id="last_name"></div>
                        <div class="register-form-item"><label for="date_of_birth">Date of Birth</label><input
                                        type="date" class="register-form-item-input" name="date_of_birth"
                                        id="date_of_birth"></div>
                        <div class="register-form-item"><label for="email">Email</label><input type="email"
                                        class="register-form-item-input" name="email" id="email">
                        </div>
                        <div class="register-form-item"><label for="password">Password</label><input type="password"
                                        class="register-form-item-input" name="password" id="password"></div>
                        <div class="register-form-item"><label for="confirm_password">Confirm Password</label><input
                                        type="password" class="register-form-item-input" name="confirm_password"
                                        id="confirm_password"></div>
                        <button>Submit</button>
                </form>
        </main>

</body>

</html>