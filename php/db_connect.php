<?php
$servername = "localhost:3306";
$username = "hc920_skip-app";
$password = "Testing123!";
$dbname = "hc920_testing";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
