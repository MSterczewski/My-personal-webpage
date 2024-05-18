<?php
function is_null_or_empty($str)
{
    return ($str === null || trim($str) === '');
}
