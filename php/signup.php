<?php
require_once 'cors.php';
require_once 'db_connect.php';

header('Content-Type: application/json');

// Validate input data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid input data."]);
    exit;
}

$name = $data['name'] ?? null;
$email = $data['email'] ?? null;
$dob = $data['dob'] ?? null;
$gender = $data['gender'] ?? null;
$height = $data['height'] ?? null;
$weight = $data['weight'] ?? null;
$password = isset($data['password']) ? password_hash($data['password'], PASSWORD_BCRYPT) : null;

if (!$name || !$email || !$dob || !$gender || !$height || !$weight || !$password) {
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit;
}

$sql = "INSERT INTO Users (Name, Email, DOB, Height, Weight, Gender, Password) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Prepare failed: " . $conn->error]);
    exit;
}

$stmt->bind_param("sssssss", $name, $email, $dob, $height, $weight, $gender, $password);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "User registered successfully."]);
} else {
    if ($conn->errno === 1062) {
        echo json_encode(["success" => false, "message" => "Email already exists."]);
    } else {
        echo json_encode(["success" => false, "message" => "Database error: " . $conn->error]);
    }
}

$stmt->close();
$conn->close();
?>