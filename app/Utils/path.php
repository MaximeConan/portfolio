<?php

function getAbsolutePath($relativePath)
{
    $relativePath = ltrim($relativePath, '/');
    return $_SERVER['BASE_URI'] . '/' . $relativePath;
}
