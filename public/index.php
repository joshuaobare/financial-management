<?php
// public/index.php
error_log("Request URI: " . $_SERVER['REQUEST_URI']);

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/':
        require __DIR__ . '/home.php';
        break;
    case (preg_match('/^\/php\//', $request) ? true : false):
        echo $request;
        $file = __DIR__ . '/..' . $request;
        error_log("Trying to access file: " . $file);
        if (file_exists($file)) {
            require $file;
        } else {
            error_log("File not found: " . $file);
            http_response_code(404);
            echo "PHP file not found";
        }
        break;
    default:
        error_log("404 for request: " . $request);
        http_response_code(404);
        echo $request;
        echo "404 Not Found";
        break;
}