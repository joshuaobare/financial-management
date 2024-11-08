<?php
session_start();
include_once "../php/header.php";
include_once("../config/pdo.php");
$nonce = base64_encode(random_bytes(16));
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
} else {
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
    <script src="./main.js" defer></script>
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
                        <span class="home-nav-item-title">Home</span>
                    </div>
                    <div class="home-nav-item" id="budget-btn">
                        <span class="material-symbols-outlined home-icon">
                            request_quote
                        </span>
                        <span class="home-nav-item-title">Budget</span>
                    </div>
                    <div class="home-nav-item" id="transaction-btn">
                        <span class="material-symbols-outlined home-icon">
                            shopping_cart
                        </span>
                        <span class="home-nav-item-title">Transactions</span>
                    </div>
                    <div class="home-nav-item" id="goals-btn">
                        <span class="material-symbols-outlined home-icon"> target </span>
                        <span class="home-nav-item-title">Goals</span>
                    </div>
                    <div class="home-nav-item" id="investments-btn">
                        <span class="material-symbols-outlined home-icon">
                            currency_bitcoin
                        </span>
                        <span class="home-nav-item-title">Investments</span>
                    </div>
                    <div class="home-nav-item" id="insights-btn">
                        <span class="material-symbols-outlined home-icon">
                            monitoring
                        </span>
                        <span class="home-nav-item-title">Insights</span>
                    </div>
                    <div class="home-nav-item" id="faq-btn">
                        <span class="material-symbols-outlined home-icon"> help </span>
                        <span class="home-nav-item-title">FAQs</span>
                    </div>
                </div>
            </nav>
            <div id="container" class="home-container"></div>
            <dialog id="budget-dialog" class="dialog budget-dialog">
                <div class="budget-dialog-cont">
                    <div class="budget-dialog-header dialog-header">
                        <button class="budget-dialog-close dialog-close" id="budget-dialog-close">
                            <span class="material-symbols-outlined">
                                close
                            </span>
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
            <dialog id="edit-budget-dialog" class="dialog edit-budget-dialog">
                <div class="budget-dialog-cont">
                    <div class="budget-dialog-header dialog-header">
                        <button class="budget-dialog-close dialog-close" id="edit-budget-dialog-close">
                            <span class="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <div class="budget-dialog-body">
                        <form action="" method="post" class="budget-form" id="edit-budget-form">
                            <div class="budget-form-item">
                                <label for="edit-budget-form-category-select">Category</label>
                                <select name="category" id="edit-budget-form-category-select"
                                    class="budget-form-item-input">
                                    <option value="Income">Income</option>
                                    <option value="Bills">Bills</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Savings">Savings</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="budget-form-item">
                                <label for="edit-budget-form-title">Title</label>
                                <input type="text" class="budget-form-item-input" id="edit-budget-form-title"
                                    name="title" />
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
                            <input type="hidden" id="edit-budget-form-budget-id">
                            <button class="budget-form-submit-btn" id="edit-budget-form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="transaction-dialog" class="dialog transaction-dialog">
                <div class="transaction-dialog-cont">
                    <div class="transaction-dialog-header dialog-header">
                        <button class="transaction-dialog-close dialog-close" id="transaction-dialog-close">
                            <span class="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <div class="transaction-dialog-body">
                        <form action="" method="post" class="transaction-form" id="transaction-form">
                            <div class="transaction-form-item">
                                <label for="transaction-form-category-select">Category</label>
                                <select name="category" id="transaction-form-category-select"
                                    class="transaction-form-item-input">
                                    <option value="Income">Income</option>
                                    <option value="Bills">Bills</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Savings">Savings</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="transaction-form-item">
                                <label for="transaction-form-title">Title</label>
                                <input type="text" class="transaction-form-item-input" id="transaction-form-title"
                                    name="title" />
                            </div>
                            <div class="transaction-form-item">
                                <label for="transaction-form-description">Description</label>
                                <textarea name="" id="transaction-form-description" name="description"
                                    class="transaction-form-item-input"></textarea>
                            </div>
                            <div class="transaction-form-item">
                                <label for="transaction-form-amount">Amount</label>
                                <input type="number" id="transaction-form-amount" class="transaction-form-item-input" />
                            </div>
                            <button class="transaction-form-submit-btn" id="transaction-form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="edit-transaction-dialog" class="dialog edit-transaction-dialog">
                <div class="transaction-dialog-cont">
                    <div class="transaction-dialog-header dialog-header">
                        <button class="transaction-dialog-close dialog-close" id="edit-transaction-dialog-close">
                            <span class="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                    <div class="transaction-dialog-body">
                        <form action="" method="post" class="transaction-form" id="edit-transaction-form">
                            <div class="transaction-form-item">
                                <label for="edit-transaction-form-category-select">Category</label>
                                <select name="category" id="edit-transaction-form-category-select"
                                    class="transaction-form-item-input">
                                    <option value="Income">Income</option>
                                    <option value="Bills">Bills</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Savings">Savings</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="transaction-form-item">
                                <label for="edit-transaction-form-title">Title</label>
                                <input type="text" class="transaction-form-item-input" id="edit-transaction-form-title"
                                    name="title" />
                            </div>
                            <div class="transaction-form-item">
                                <label for="edit-transaction-form-description">Description</label>
                                <textarea name="" id="edit-transaction-form-description" name="description"
                                    class="transaction-form-item-input"></textarea>
                            </div>
                            <div class="transaction-form-item">
                                <label for="edit-transaction-form-amount">Amount</label>
                                <input type="number" id="edit-transaction-form-amount" min="0"
                                    class="transaction-form-item-input" />
                            </div>
                            <div class="transaction-form-item">
                                <label for="transaction-increment-input">Adjust Amount</label>
                                <div class="transaction-increment-input" id="transaction-increment-input">
                                    <div class="transaction-decrement-btn" id="transaction-decrement-btn">-</div>
                                    <input type="number" class="transaction-increment-value"
                                        id="transaction-increment-value" value="1" min="1">
                                    <div class="transaction-increment-btn" id="transaction-increment-btn">+</div>
                                </div>
                            </div>
                            <div class="transaction-form-item">
                                <label for="edit-transaction-form-start-date">Start Date</label>
                                <input type="date" id="edit-transaction-form-start-date"
                                    class="transaction-form-item-input" />
                            </div>
                            <div class="transaction-form-item">
                                <label for="edit-transaction-form-end-date">End Date</label>
                                <input type="date" id="edit-transaction-form-end-date"
                                    class="transaction-form-item-input" />
                            </div>
                            <input type="hidden" id="edit-transaction-form-transaction-id">
                            <button class="transaction-form-submit-btn"
                                id="edit-transaction-form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id="goal-dialog" class="dialog goal-dialog">
                <div class="goal-dialog-header dialog-header">
                    <button class="goal-dialog-close dialog-close" id="goal-dialog-close">
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>
                <form action="" id="goal-form" class="goal-form" method="post">
                    <div class="goal-form-item">
                        <label for="goal-form-goal-name">Goal Name</label>
                        <input type="text" class="goal-form-item-input" id="goal-form-goal-name">
                    </div>
                    <div class="goal-form-item">
                        <label for="goal-form-target-amount">Target Amount</label>
                        <input type="text" class="goal-form-item-input" id="goal-form-target-amount">
                    </div>
                    <div class="goal-form-item">
                        <label for="">Description</label>
                        <textarea class="goal-form-item-input" id="goal-form-description"></textarea>
                    </div>
                    <div class="goal-form-item">
                        <label for="goal-form-due-date">Due date</label>
                        <input type="date" class="goal-form-item-input" id="goal-form-due-date">
                    </div>
                    <button>Submit</button>
                </form>
            </dialog>
            <dialog id="edit-goal-dialog" class="dialog edit-goal-dialog">
                <div class="goal-dialog-header dialog-header">
                    <button class="goal-dialog-close dialog-close" id="edit-goal-dialog-close">
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>
                <form action="" id="edit-goal-form" class="goal-form" method="post">
                    <div class="goal-form-item">
                        <label for="edit-goal-form-goal-name">Goal Name</label>
                        <input type="text" class="goal-form-item-input" id="edit-goal-form-goal-name">
                    </div>
                    <div class="goal-form-item">
                        <label for="edit-goal-form-target-amount">Target Amount</label>
                        <input type="number" class="goal-form-item-input" id="edit-goal-form-target-amount">
                    </div>
                    <div class="goal-form-item">
                        <label for="edit-goal-form-target-amount">Current Amount</label>
                        <input type="number" class="goal-form-item-input" id="edit-goal-form-current-amount">
                    </div>
                    <div class="goal-form-item">
                        <label for="edit-goal-form-description">Description</label>
                        <textarea class="goal-form-item-input" id="edit-goal-form-description"></textarea>
                    </div>
                    <div class="goal-form-item">
                        <label for="goal-form-due-date">Due date</label>
                        <input type="date" class="goal-form-item-input" id="edit-goal-form-due-date">
                    </div>
                    <input type="hidden" name="goal_id" id="edit-goal-form-goal-id">
                    <input type="hidden" name="created_at" id="edit-goal-form-created-at">
                    <button>Submit</button>
                </form>
            </dialog>
        </main>
    </div>
</body>

</html>