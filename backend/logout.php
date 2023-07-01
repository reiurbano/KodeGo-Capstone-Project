<?php

include "config.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    session_unset();
    session_destroy();

    $response = array(
        'success' => true,
        'message' => "You have logged out."
    );

    echo json_encode($response);
}

?>