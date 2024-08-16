<?php

$data = json_decode(file_get_contents('php://input'), true);

$userAgent = $_SERVER['HTTP_USER_AGENT'];
$date = gmdate("Y-m-d H:i:s");

if (is_null_or_empty($data['pageName'])  || is_null_or_empty($data['pageSection']) || is_null_or_empty($data['lang']))
    http_response_code(400);

call_db("INSERT INTO Events(PageName, PageSection, Lang, UserAgent, EventDate) VALUES(
    '{$data['pageName']}',
    '{$data['pageSection']}',
    '{$data['lang']}'
    '{$userAgent}'
    '{$date}'
    )");
