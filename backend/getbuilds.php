<?php

include "config.php";

if ($_SERVER['REQUEST_METHOD'] == 'GET' && !isset($_GET['id'])) {

}

if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])) {
    $user_id = $_SESSION['user_id'];

    $sql = "SELECT * FROM build 
            JOIN decks 
            ON decks.build_id = build.build_id
            JOIN combat_pages
            ON combat_pages.page_id = decks.page_id
            JOIN dice
            ON dice.page_id = combat_pages.page_id
            WHERE build.user_id = '$user_id';";

    $results = $conn->query($sql);

    if ($results->num_rows > 0) {
        $builds = array();

        while ($record = $results->fetch_assoc()) {
            $build = array(
                'id' => $record['build_id'],
                'name' => $record['build_name'],
                'rank' => $record['rank'],
                'floor' => $record['floor'],
                'desc' => $record['description'],
                'deck' => array()
            );

            $page = array(
                'id' => $record['page_id'],
                'title' => $record['title'],
                'cost' => $record['cost'],
                'range' => $record['type'],
                'rarity' => $record['rarity'],
                'chapter' => $record['chapter'],
                'effect' => $record['card_effect'],
                'source' => $record['source'],
                'dice' => array()
            );

            $die = array(
                'id' => $record['die_id'],
                'type' => $record['color_type'],
                'damage' => $record['damage_type'],
                'min' => $record['min_value'],
                'max' => $record['max_value'],
                'effect' => $record['die_effect']
            );

            if (count($builds) == 0) {
                array_push($builds, $build);
                array_push($builds[count($builds) - 1]['deck'], $page);
                array_push( $builds [count($builds) - 1]['deck'][count($builds[count($builds) - 1]['deck']) - 1]['dice'], $die);
            } else if ($builds[count($builds) - 1]['id'] == $build['id']) {
                if ($builds[count($builds) - 1]['deck'][count($builds[count($builds) - 1]['deck']) - 1]['id'] == $page['id']) {
                    array_push($builds[count($builds) - 1]['deck'][count($builds[count($builds) - 1]['deck']) - 1]['dice'], $die);
                } else if ($builds[count($builds) - 1]['deck'][count($builds[count($builds) - 1]['deck']) - 1]['id'] != $page['id']) {
                    array_push($builds[count($builds) - 1]['deck'], $page);
                    array_push($builds[count($builds) - 1]['deck'][count($builds[count($builds) - 1]['deck']) - 1]['dice'], $die);
                }
            } else if ($builds[count($builds) - 1]['id'] != $build['id']) {
                array_push($builds, $build);
                array_push($builds[count($builds) - 1]['deck'], $page);
                array_push($builds[count($builds) - 1]['deck'][count($builds[count($builds) - 1]['deck']) - 1]['dice'], $die);
            }
        }

        echo json_encode($builds);
    } else {
        echo "No cards found";
    }
}

?>