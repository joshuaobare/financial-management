<?php
include_once ("../config/pdo.php");

function validate_input($data)
{
    $data = trim($data);
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    return $data;

}

if ((isset($_POST["first_name"])) && (isset($_POST["last_name"])) && (isset($_POST["date_of_birth"])) && (isset($_POST["email"])) && (isset($_POST["password"]))) {
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
    } catch (PDOException $e) {
        echo "An error has occurred: " . $e->getMessage() . "";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./main.js" defer></script>
    <title>Register</title>
</head>

<body>
    <div class="register">
        <nav id="main-nav" class="main-nav"></nav>
        <main class="register-main">
            <img src="./assets/wblogo.png" alt="" class="register-logo">
            <h1>Registration</h1>
            <form action="#" class="register-form" id="register-form" method="post" novalidate>
                <div class="register-form-item">
                    <label for="first_name">First Name</label>
                    <div class="register-form-input-cont">
                        <input type="text" class="register-form-item-input" name="first_name" id="first_name"
                            minlength="3" required />
                        <span class="error-message" id="first_name_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="last_name">Last Name</label>
                    <div class="register-form-input-cont">
                        <input type="text" class="register-form-item-input" name="last_name" id="last_name"
                            minlength="3" required />
                        <span class="error-message" id="last_name_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="date_of_birth">Date of Birth</label>
                    <div class="register-form-input-cont">
                        <input type="date" class="register-form-item-input" name="date_of_birth" id="date_of_birth"
                            required /><span class="error-message" id="date_of_birth_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="email">Email</label>
                    <div class="register-form-input-cont">
                        <input type="email" class="register-form-item-input" name="email" id="email" required />
                        <span class="error-message" id="email_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="password">Password</label>
                    <div class="register-form-input-cont">
                        <input type="password" class="register-form-item-input" name="password" id="password"
                            minlength="3" required />
                        <span class="error-message" id="password_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="confirm_password">Confirm Password</label>
                    <div class="register-form-input-cont">
                        <input type="password" class="register-form-item-input" name="confirm_password"
                            id="confirm_password" minlength="3" required />
                        <span class="error-message" id="confirm_password_error"></span>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </main>
    </div>

</body>

</html>