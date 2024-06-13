<?php
include_once ("../config/pdo.php");

$successful_login = false;
$login_message = "";
function validate_input($data){
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
        ":email" =>  validate_input($_POST['email'])
    ));
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if($user && password_verify($_POST["password"], $user["password"])) {
      $login_message = "Welcome ".$user['first_name']. " ".$user['last_name'];
      $successful_login = true;

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
    <link rel="stylesheet" href="../styles/main.css" />
    <link rel="stylesheet" href="../styles/login.css" />
    <title>Login</title>
  </head>
  <body>
    <main class="login-main">
      <form action="#" class="login-form" method="post" novalidate>
        <div class="login-form-item">
          <label for="email">Email</label>
          <div class="login-form-input-cont">
            <input
              type="email"
              class="login-form-item-input"
              name="email"
              id="email"
              required
            />
            <span class="error-message" id="email_error"></span>
          </div>
        </div>
        <div class="login-form-item">
          <label for="password">Password</label>
          <div class="login-form-input-cont">
            <input
              type="password"
              class="login-form-item-input"
              name="password"
              id="password"
              minlength="3"
              required
            />
            <span class="error-message" id="password_error"></span>
          </div>
        </div>
        <div class=<?= $successful_login ? "login-success" : "login-error" ?>><?= $login_message ?></div>
        <button>Login</button>
      </form>
    </main>
  </body>
</html>
