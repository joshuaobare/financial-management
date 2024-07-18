<?php
include_once ("../config/pdo.php");

session_start();
if (isset($_SESSION['user_id'])) {
  echo "<script type='text/javascript'> localStorage.setItem('user_id'," . $_SESSION['user_id'] . ") </script>";
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/home.css" />
  <link rel="stylesheet" href="../styles/navbar.css" />
  <link rel="stylesheet" href="../styles/calendar.css" />
  <link rel="stylesheet" href="../styles/budget.css" />
  <script src="../dist/src/index.js" type="module" defer></script>
  <title>Home</title>
</head>

<body>
  <div class="home">
    <nav id="main-nav" class="main-nav"></nav>
    <main class="home-main">
      <nav class="home-nav">
        <div class="home-nav-items-cont">
          <div class="home-nav-item" id="home-btn">
            <span class="material-symbols-outlined home-icon"> home </span>
            <span>Home</span>
          </div>
          <div class="home-nav-item" id="budget-btn">
            <span class="material-symbols-outlined home-icon">
              request_quote
            </span>
            <span>Budget</span>
          </div>
          <div class="home-nav-item" id="goals-btn">
            <span class="material-symbols-outlined home-icon"> target </span>
            <span>Goals</span>
          </div>
          <div class="home-nav-item" id="investments-btn">
            <span class="material-symbols-outlined home-icon">
              currency_bitcoin
            </span>
            <span>Investments</span>
          </div>
          <div class="home-nav-item" id="spending-btn">
            <span class="material-symbols-outlined home-icon">
              shopping_cart
            </span>
            <span>Spending</span>
          </div>
          <div class="home-nav-item" id="spending-btn">
            <span class="material-symbols-outlined home-icon">
              monitoring
            </span>
            <span>Insights</span>
          </div>
          <div class="home-nav-item" id="spending-btn">
            <span class="material-symbols-outlined home-icon"> help </span>
            <span>FAQs</span>
          </div>
        </div>
      </nav>
      <div id="container" class="home-container"></div>
      <dialog id="budget-dialog">
        <div class="budget-dialog-cont">
          <div class="budget-dialog=header">
            <button class="budget-dialog-close" id="budget-dialog-close">
              X
            </button>
          </div>
          <div class="budget-dialog-body">
            <form action="" class="budget-form" id="budget-form">
              <div class="budget-form-item">
                <label for="budget-form-category-select">Category</label>
                <select name="category" id="budget-form-category-select" class="budget-form-item-input">
                  <option value="Income">Income</option>
                  <option value="Bills">Bills</option>
                  <option value="Personal">Personal</option>
                  <option value="Savings">Savings</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="budget-form-item">
                <label for="budget-form-title">Title</label>
                <input type="text" class="budget-form-item-input" id="budget-form-title" name="title" />
              </div>
              <div class="budget-form-item">
                <label for="budget-form-description">Description</label>
                <textarea name="" id="budget-form-description" name="description"
                  class="budget-form-item-input"></textarea>
              </div>
              <div class="budget-form-item">
                <label for="budget-form-amount">Amount</label>
                <input type="number" id="budget-form-amount" class="budget-form-item-input" />
              </div>
              <button class="budget-form-submit-btn" id="budget-form-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="edit-budget-dialog">
        <div class="budget-dialog-cont">
          <div class="budget-dialog=header">
            <button class="budget-dialog-close" id="budget-dialog-close">
              X
            </button>
          </div>
          <div class="budget-dialog-body">
            <form action="" class="budget-form" id="edit-budget-form">
              <div class="budget-form-item">
                <label for="edit-budget-form-category-select">Category</label>
                <select name="category" id="edit-budget-form-category-select" class="budget-form-item-input">
                  <option value="Income">Income</option>
                  <option value="Bills">Bills</option>
                  <option value="Personal">Personal</option>
                  <option value="Savings">Savings</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="budget-form-item">
                <label for="edit-budget-form-title">Title</label>
                <input type="text" class="budget-form-item-input" id="edit-budget-form-title" name="title" />
              </div>
              <div class="budget-form-item">
                <label for="edit-budget-form-description">Description</label>
                <textarea name="" id="edit-budget-form-description" name="description"
                  class="budget-form-item-input"></textarea>
              </div>
              <div class="budget-form-item">
                <label for="edit-budget-form-amount">Amount</label>
                <input type="number" id="edit-budget-form-amount" class="budget-form-item-input" />
              </div>
              <div class="budget-form-item">
                <label for="edit-budget-form-start-date">Start Date</label>
                <input type="date" id="edit-budget-form-start-date" class="budget-form-item-input" />
              </div>
              <div class="budget-form-item">
                <label for="edit-budget-form-end-date">End Date</label>
                <input type="date" id="edit-budget-form-end-date" class="budget-form-item-input" />
              </div>
              <button class="budget-form-submit-btn" id="edit-budget-form-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  </div>
</body>

</html>