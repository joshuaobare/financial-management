<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/main.css" />
    <link rel="stylesheet" href="../styles/login.css" />
    <title>Login</title>
</head>
<body>
    <main class="login-main">
        <form action="" class="login-form">
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
        <div class="login-error error-message"></div>
        <button>Login</button>
        </form>
    </main>
</body>
</html>