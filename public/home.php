<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <link rel="stylesheet" href="../styles/main.css" />
    <link rel="stylesheet" href="../styles/home.css" />
    <link rel="stylesheet" href="../styles/navbar.css" /> 
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
              <span class="material-symbols-outlined home-icon">
                check_circle
              </span>
              <span>Goal</span>
            </div>
            <div class="home-nav-item" id="investments-btn">
              <span class="material-symbols-outlined home-icon">
                currency_bitcoin
              </span>
              <span>Investments</span>
            </div>
            <div class="home-nav-item" id="transactions-btn">
              <span class="material-symbols-outlined home-icon">
                payments
              </span>
              <span>Transactions</span>
            </div>
            <div class="home-nav-item" id="spending-btn">
              <span class="material-symbols-outlined home-icon">
                shopping_cart
              </span>
              <span>Spending</span>
            </div>
          </div>
        </nav>
        <div id="container"></div>
      </main>
    </div>
  </body>
</html>
