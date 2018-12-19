<?php

// FrontController = notre fichier index.php

include __DIR__ . '/controllers/MainController.php';
include __DIR__ . '/controllers/ErrorController.php';



if(isset($_GET ['_url'])) {
    $currentUrl = $_GET['_url'];
} else {
    $currentUrl = '/';
}

// Dispatcher = nom de l'étape ci-dessous

if ($currentUrl === '/') {
    $controller = new MainController();
    $controller->home();
} else if ($currentUrl === '/parcours') {
    $controller = new MainController();
    $controller->parcours();
} else if ($currentUrl === '/portfolio') {
    $controller = new MainController();
    $controller->portfolio();
} else if ($currentUrl === '/blog') {
    $controller = new MainController();
    $controller->blog();
}else if ($currentUrl === '/contact') {
    $controller = new MainController();
    $controller->contact();
} else {
    $controller = new ErrorController();
    $controller->page404();
}