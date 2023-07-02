<?php

include "config.php";

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $sql = "SELECT * FROM combat_pages JOIN dice ON dice.page_id = combat_pages.page_id;";

    $results = $conn->query($sql);

    if ($results->num_rows > 0) {
        $cards = array();

        while ($record = $results->fetch_assoc()) {
            $page = array(
                'id' => $record['page_id'],
                'title' => $record['title'],
                'cost' => $record['cost'],
                'range' => $record['type'],
                'rarity' => $record['rarity'],
                'chapter' => $record['chapter'],
                'effect' => $record['card_effect'],
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

            if (count($cards) == 0) {
                array_push($cards, $page);
                array_push($cards[count($cards) - 1]['dice'], $die);
            } else if ($cards[count($cards) - 1]['id'] == $page['id']) {
                array_push($cards[count($cards) - 1]['dice'], $die);
            } else if ($cards[count($cards) - 1]['id'] != $page['id']) {
                array_push($cards, $page);
                array_push($cards[count($cards) - 1]['dice'], $die);
            }
        }

        echo json_encode($cards);
    } else {
        echo "No cards found";
    }
}

?>