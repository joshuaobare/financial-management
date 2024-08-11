<?php
session_start();
session_destroy();
echo json_encode(array("message" => "Successfully logged out"));
header('location:login.php');