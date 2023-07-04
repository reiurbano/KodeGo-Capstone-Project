<?php

include "config.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $user = $_SESSION['user_id'];
    $name = $data['name'];
    $rank = $data['rank'];
    $floor = $data['floor'];
    $desc = $data['desc'];

    $sql = "INSERT INTO build (user_id, build_name, rank, floor, description) 
            VALUES ('$user', '$name', '$rank', '$floor', '$desc');";

    if ($conn->query($sql)) {
        $response = array(
            'success' => true,
            'message' => 'Build Created Successfully'
        );
    } else {
        $response = array(
            'success' => false,
            'message' => 'Build Could Not Be Created.'
        );
    }
    echo json_encode($response);
} else {
    echo "Invalid Request";
}

?>