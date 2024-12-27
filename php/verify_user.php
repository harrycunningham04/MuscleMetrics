<?php
function base64_url_decode($data) {
    $remainder = strlen($data) % 4;
    if ($remainder) {
        $padlen = 4 - $remainder;
        $data .= str_repeat('=', $padlen);
    }
    return base64_decode(strtr($data, '-_', '+/'));
}

header('Content-Type: application/json'); // Set content type header

if (!isset($_COOKIE['token'])) {
    http_response_code(401);
    echo json_encode(["success" => false, "error" => "User not authenticated"]);
    exit();
}

$jwt = $_COOKIE['token'];
list($header, $payload, $signature) = explode('.', $jwt);

$valid_signature = base64_encode(hash_hmac('sha256', "$header.$payload", 'jwt-secret-key', true));
if ($signature !== str_replace(['+', '/', '='], ['-', '_', ''], $valid_signature)) {
    http_response_code(401);
    echo json_encode(["success" => false, "error" => "Invalid token"]);
    exit();
}

$decoded_payload = json_decode(base64_url_decode($payload), true);

// Check for token expiration
if (isset($decoded_payload['exp']) && $decoded_payload['exp'] < time()) {
    http_response_code(401);
    echo json_encode(["success" => false, "error" => "Token expired"]);
    exit();
}

// Return success and user information
echo json_encode(["success" => true, "user" => $decoded_payload]);
?>
