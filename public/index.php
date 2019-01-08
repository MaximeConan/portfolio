<?php

require __DIR__ . '/../vendor/autoload.php';

$application = Portfolio\Application::getInstance();
$application->run();

dump(getAbsolutePath());