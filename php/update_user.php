<?php
include 'db_connect.php';
header('Content-Type: application/json');

// Decode Base64 URL
function base64_url_decode($data)
{
    $remainder = strlen($data) % 4;
    if ($remainder) {
        $padlen = 4 - $remainder;
        $data .= str_repeat('=', $padlen);
    }
    return base64_decode(strtr($data, '-_', '+/'));
}

// Function to generate a new JWT
function generate_jwt($payload)
{
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($payload)));
    $secret = 'jwt-secret-key';
    $signature = hash_hmac('sha256', "$base64UrlHeader.$base64UrlPayload", $secret, true);
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    return "$base64UrlHeader.$base64UrlPayload.$base64UrlSignature";
}

// Check if token exists
if (!isset($_COOKIE['token'])) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "User not authenticated."]);
    exit();
}

// Decode the JWT
$jwt = $_COOKIE['token'];
list($header, $payload, $signature) = explode('.', $jwt);

$decoded_payload = json_decode(base64_url_decode($payload), true);
if (!$decoded_payload || !isset($decoded_payload['id'])) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Invalid token."]);
    exit();
}

// Extract user ID from token
$user_id = $decoded_payload['id'];

// Get input data
$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data['name'], $data['dob'], $data['height'], $data['weight'], $data['gender'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid input data."]);
    exit();
}

// Validate gender value (optional)
$valid_genders = ["male", "female", "other"];
if (!in_array(strtolower($data['gender']), $valid_genders)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid gender value."]);
    exit();
}


// Prepare update query
$sql = "UPDATE Users SET Name = ?, DOB = ?, Height = ?, Weight = ?, Gender = ? WHERE ID = ?";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database error."]);
    exit();
}

// Bind parameters
$stmt->bind_param(
    "sssiis",
    $data['name'],
    $data['dob'],
    $data['height'],
    $data['weight'],
    $data['gender'],
    $user_id
);

// Execute the query
if ($stmt->execute()) {
    // Update the JWT if needed
    $updated_payload = [
        "id" => $user_id,
        "name" => $data['name'],
        "email" => $data['email'],
        "dob" => $data['dob'],
        "gender" => $data['gender'],
        "height" => $data['height'],
        "weight" => $data['weight']
    ];
    $jwt = generate_jwt($updated_payload);
    setcookie('token', $jwt, time() + 86400, "", "", false, true); // Update token

    echo json_encode(["success" => true, "message" => "User updated successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to update user."]);
}


// Close statement and connection
$stmt->close();
$conn->close();
?>