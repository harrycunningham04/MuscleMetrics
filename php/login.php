<?php
include 'db_connect.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(["success" => false, "message" => "Invalid input data."]);
    exit;
}

$email = $data['email'];
$password = $data['password'];

$sql = "SELECT * FROM Users WHERE Email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['Password'])) {
        $payload = [
            "id" => $user['ID'],
            "name" => $user['Name'],
            "email" => $user['Email'],
            "dob" => $user['DOB'],
            "height" => $user['Height'],
            "weight" => $user['Weight'],
            "gender" => $user['Gender'],
        ];
        $jwt = generate_jwt($payload);
        setcookie('token', $jwt, time() + 86400, "", "", false, true); // 1 day expiry, HttpOnly
        echo json_encode(["success" => true, "message" => "Login successful."]);
    } else {
        echo json_encode(["success" => false, "message" => "Password incorrect."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "No email found."]);
}

$stmt->close();
$conn->close();

function generate_jwt($payload) {
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($payload)));
    $secret = 'jwt-secret-key';
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
    return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
}
?>
