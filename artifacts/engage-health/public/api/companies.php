<?php
header('Content-Type: application/json');

$apiKey = '%%COMPANIES_HOUSE_KEY%%';

if (empty($_GET['q'])) {
    echo json_encode(['items' => []]);
    exit;
}

$query = urlencode($_GET['q']);
$url = "https://api.company-information.service.gov.uk/search/companies?q={$query}";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Basic ' . base64_encode($apiKey . ':')
]);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(['error' => curl_error($ch)]);
} else {
    http_response_code($httpcode);
    echo $response;
}

curl_close($ch);
