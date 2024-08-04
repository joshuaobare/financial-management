<?php
include_once ("../config/pdo.php");

$userData = '';

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
        echo json_encode($data);
        $userData = $data;

    } catch (PDOException $e) {
        // If there's a PDO exception, respond with the error message
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
    <h1>Profile</h1>
    <div class="profile-item">
        <div>Full Name</div>
        <div>
            <?= $userData['first_name'] . " " . $userData['last_name'] ?>
        </div>
    </div>
    <div class="profile-item">
        <div>Email</div>
        <div>
            <?= $userData['email'] ?>
        </div>
    </div>
    <div class="profile-item">
        <div>Date of birth</div>
        <div>
            <?= $userData['date_of_birth'] ?>
        </div>
    </div>
    <div class="profile-item">
        <div>Joined At</div>
        <div>
            <?= $userData['created_at'] ?>
        </div>
    </div>
    <?php if ($userData['is_admin']): ?>
    <div class="profile-item">
        <button>Create Admin</button>
    </div>
    <?php endif; ?>
    <div class="profile-item">

    </div>


</body>

</html>