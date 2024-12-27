<?php
setcookie('token', '', time() - 3600, "", "", false, true);
echo json_encode(["success" => true, "message" => "User logged out"]);
?>
