<?php

require __DIR__ . '/../vendor/autoload.php';

require __DIR__ . '/../app/Utils/path.php';

$application = Portfolio\Application::getInstance();
$application->run();