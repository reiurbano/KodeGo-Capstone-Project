<?php

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_SESSION['user_id'];
    $build_id = $_GET['id'];

    $sql = "SELECT * FROM build WHERE user_id = '$user_id' AND build_id = '$build_id';";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $sql = "DELETE FROM build WHERE build_id = '$build_id';";

        if ($conn->query($sql)) {
            $response = array(
                'success' => true,
                'message' => 'Build Deleted'
            );
        }
    } else {
        $response = array(
            'success' => false,
            'message' => $build_id
        );
    }
    echo json_encode($response);
} else {
    echo 'Invalid Request';
}

?>