<?php

include "config.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $user_id = $_SESSION['user_id'];

    // $build_id = $data['build_id'];
    $page_id_1 = $data['page_id_1'];
    $page_id_2 = $data['page_id_2'];
    $page_id_3 = $data['page_id_3'];
    $page_id_4 = $data['page_id_4'];
    $page_id_5 = $data['page_id_5'];
    $page_id_6 = $data['page_id_6'];
    $page_id_7 = $data['page_id_7'];
    $page_id_8 = $data['page_id_8'];
    $page_id_9 = $data['page_id_9'];

    $sql = "SELECT * FROM build WHERE user_id='$user_id' ORDER BY user_id DESC LIMIT 1;";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $build = $result->fetch_assoc();
        $build_id = $build['build_id'];

        $sql = "INSERT INTO decks (page_id, build_id) VALUES ('$page_id_1', '$build_id');
                INSERT INTO decks (page_id, build_id) VALUES ('$page_id_2', '$build_id');
                INSERT INTO decks (page_id, build_id) VALUES ('$page_id_3', '$build_id');
                INSERT INTO decks (page_id, build_id) VALUES ('$page_id_4', '$build_id');
                INSERT INTO decks (page_id, build_id) VALUES ('$page_id_5', '$build_id');
                INSERT INTO decks (page_id, build_id) VALUES ('$page_id_6', '$build_id');
                INSERT INTO decks (page_id, build_id) VALUES ('$page_id_7', '$build_id');
                INSERT INTO decks (page_id, build_id) VALUES ('$page_id_8', '$build_id');
                INSERT INTO decks (page_id, build_id) VALUES ('$page_id_9', '$build_id');
                ";

        if ($conn->multi_query($sql)) {
            $response = array(
                'success' => true,
                'message' => 'Decks Created Successfully'
            );
        } else {
            $response = array(
                'success' => false,
                'message' => 'Decks Could Not Be Created.'
            );
        }
    }
    echo json_encode($response);
} else {
    echo "Invalid Request";
}

?>