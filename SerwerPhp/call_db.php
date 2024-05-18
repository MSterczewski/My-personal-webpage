<?php
function call_db($query)
{
    $servername = "dummy";
    $username = "dummy";
    $password = "dummy";
    $database = "dummy";
    $port = "3380";

    // Create connection

    $conn = new mysqli($servername, $username, $password, $database, $port);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $conn->query($query);
}
