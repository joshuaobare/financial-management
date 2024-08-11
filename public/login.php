<?php
session_start();
include_once ("./pdo.php");

if (isset($_SESSION['user_id'])) {
  header("Location: home.php");
  echo "<script type='text/javascript'> localStorage.setItem('user_id'," . $_SESSION['user_id'] . ") </script>";
}

$successful_login = false;
$login_message = "";
function validate_input($data)
{
  $data = trim($data);
  $data = htmlspecialchars($data);
  $data = stripslashes($data);
  return $data;

}

if (isset($_POST['password']) && isset($_POST['email'])) {
  try {
    $sql = "SELECT * FROM USERS WHERE EMAIL = :email";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(
      array(
        ":email" => validate_input($_POST['email'])
      )
    );
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($_POST["password"], $user["password"])) {
      $login_message = "Welcome " . $user['first_name'] . " " . $user['last_name'];
      $successful_login = true;
      $user_id = $user["user_id"];
      $_SESSION["user_id"] = $user_id;
      header("Location: ./home.php");

    } else {
      $login_message = "Invalid credentials. Please try again";
    }
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
    <title>Login</title>
</head>

<body>
    <div class="login">
        <nav id="main-nav" class="main-nav"></nav>
        <main class="login-main">
            <img src="./assets/wblogo.png" alt="" class="login-logo">
            <h1>Login</h1>
            <form action="#" class="login-form" method="post" id="login-form" novalidate>
                <div class="login-form-item">
                    <label for="email">Email</label>
                    <div class="login-form-input-cont">
                        <input type="email" class="login-form-item-input" name="email" id="email" required />
                        <span class="error-message" id="email_error"></span>
                    </div>
                </div>
                <div class="login-form-item">
                    <label for="password">Password</label>
                    <div class="login-form-input-cont">
                        <input type="password" class="login-form-item-input" name="password" id="password" minlength="3"
                            required />
                        <span class="error-message" id="password_error"></span>
                    </div>
                </div>
                <button>Login</button>
                <div class=<?= $successful_login ? "login-success" : "login-error" ?>><?= $login_message ?></div>
            </form>
        </main>
    </div>
</body>

</html>