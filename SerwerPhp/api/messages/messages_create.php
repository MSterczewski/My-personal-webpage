<?php

$data = json_decode(file_get_contents('php://input'), true);

if (is_null_or_empty($data['title'])  || is_null_or_empty($data['email']) || is_null_or_empty($data['body']))
    http_response_code(400);

call_db("INSERT INTO Messages(Title, Email, Body) VALUES(
    '{$data['title']}',
    '{$data['email']}',
    '{$data['body']}'
    )");
