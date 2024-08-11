<?php
include_once ("./pdo.php");

$userData = '';
function validate_input($data)
{
    $data = trim($data);
    $data = htmlspecialchars($data);
    $data = stripslashes($data);
    return $data;

}

if ((isset($_POST["first_name"])) && (isset($_POST["last_name"])) && (isset($_POST["date_of_birth"]))) {
    try {
        $sql = "UPDATE USERS SET first_name = :first_name, last_name= :last_name, date_of_birth = :date_of_birth WHERE user_id = :user_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":first_name" => validate_input($_POST["first_name"]),
                ":last_name" => validate_input($_POST["last_name"]),
                ":date_of_birth" => $_POST["date_of_birth"],
                ":user_id" => $_GET['id']
            )

        );
    } catch (PDOException $e) {
        echo "An error has occurred: " . $e->getMessage() . "";
    }
}
if (isset($_GET['id'])) {
    try {
        $sql = "SELECT * FROM USERS WHERE USER_ID = :user_id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
            array(
                ":user_id" => $_GET["id"]
            )
        );
        // Initialize an empty array to hold the fetched data
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        $userData = $data;

    } catch (PDOException $e) {
        // If there's a PDO exception, respond with the error message
        echo "<script>console.log(" . $e->getMessage() . ")</script>";
        echo json_encode(array("error" => $e->getMessage()));
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/profile.css">
    <script src="main.js" defer></script>
    <title>Profile</title>
</head>

<body>
    <div id="main-nav" class="main-nav"></div>
    <div class="profile">
        <h1>Profile</h1>
        <div class="edit-form-cont">
            <form action="#" class="register-form edit-register-form" id="register-form" method="post" novalidate>
                <div class="register-form-item">
                    <label for="first_name">First Name</label>
                    <div class="register-form-input-cont">
                        <input type="text" class="register-form-item-input" name="first_name" id="first_name"
                            minlength="3" required value=<?= $userData['first_name'] ?> />
                        <span class="error-message" id="first_name_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="last_name">Last Name</label>
                    <div class="register-form-input-cont">
                        <input type="text" class="register-form-item-input" name="last_name" id="last_name"
                            minlength="3" required value=<?= $userData['last_name'] ?> />
                        <span class="error-message" id="last_name_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="date_of_birth">Date of Birth</label>
                    <div class="register-form-input-cont">
                        <input type="date" class="register-form-item-input" name="date_of_birth" id="date_of_birth"
                            required value=<?= $userData['date_of_birth'] ?> /><span class="error-message"
                            id="date_of_birth_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="email">Email</label>
                    <div class="register-form-input-cont">
                        <input type="email" class="register-form-item-input" name="email" id="email" required
                            value=<?= $userData['email'] ?> disabled />
                        <span class="error-message" id="email_error"></span>
                    </div>
                </div>
                <div class="register-form-item">
                    <label for="created_at">Joined At</label>
                    <div class="register-form-input-cont">
                        <input type="email" class="register-form-item-input" id="created_at" name="created_at"
                            value=<?= $userData['created_at'] ?> disabled />
                        <span class="error-message" id="email_error"></span>
                    </div>
                </div>
                <button>Update</button>
            </form>

        </div>


    </div>


</body>

</html>