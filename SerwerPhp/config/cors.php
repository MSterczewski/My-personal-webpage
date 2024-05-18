<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];
if ($http_origin == "http://localhost:3000" || $http_origin == "https://msterczewski.pl/") {
    header("Access-Control-Allow-Origin: $http_origin");
}
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
