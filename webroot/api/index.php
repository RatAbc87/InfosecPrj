<?php

//Get the query
$q = $_REQUEST["q"];

//Perform search if we have a query value
if ($q !== "") {
    $xml = file_get_contents("https://restcountries.eu/rest/v2/name/{$q}");

    if (!$xml) {
        $results = "An error occurred";
    } else {
        $results = $xml;
    }
}

echo $results;

// JSON encode and echo search results
//header('Content-Type: application/json');
//echo json_encode(['data' => ['Your data']]);
?> 
