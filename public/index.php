<?php

// Front controller

// Inclusion de nos dépendances provenant de composer
include __DIR__ . '/../vendor/autoload.php';

include __DIR__ . '/../app/helper/path.php';
include __DIR__ . '/../app/controllers/MainController.php';
include __DIR__ . '/../app/controllers/ErrorController.php';
include __DIR__ . '/../app/controllers/PostController.php';
include __DIR__ . '/../app/controllers/PortfolioController.php';

include __DIR__ . '/../app/models/Category_Blog.php';
include __DIR__ . '/../app/models/Category_Portfolio.php';
include __DIR__ . '/../app/models/DBData_Blog.php';
include __DIR__ . '/../app/models/DBData_Portfolio.php';
include __DIR__ . '/../app/models/Single_Blog.php';
include __DIR__ . '/../app/models/Single_Portfolio.php';

$router = new AltoRouter();

// On a fait en sorte d'automtiser grâce au htaccess la génération de $_SERVER['BASE_URI']. On appelle la méthode SetBasePath pour éviter de répéter dans toutes nos routes le chemin complet de l'URL (S05/E03/s05-e03-oshop-MaximeConan/public)
$router->setBasePath($_SERVER['BASE_URI']);

// On utilise la méthode map() du AltoRouter qui nous permet d'ajouter de nouvelles routes
// La méthode a 3 paramètres obligatoires : la méthode HTTP, la route, la target, le name
$router->map('GET', '/', 'MainController::home', 'home');
$router->map('GET', '/parcours', 'MainController::parcours', 'parcours');
$router->map('GET', '/portfolio', 'MainController::portfolio', 'portfolio');
$router->map('GET', '/blog', 'MainController::blog', 'blog');
$router->map('GET', '/contact', 'MainController::contact', 'contact');
$router->map('GET', '/article/[i:id]', 'PostController::getPost', 'get_post');
$router->map('GET', '/projet/[i:id]', 'PortfolioController::getPortfolio', 'get_portfolio');

// La méthode match() analyse chaque route afin de retourner la route correspondante à notre requête HTTP
$match = $router->match();

// Si le $match retourne false, on affiche la views 404
if ($match === false) {
    $controllerName = 'ErrorController';
    $methodName = 'page404';
} else {
    // Construction d'un array avec la target du $router
    $dispatcherInformations = explode('::', $match['target']);
    
    // On récupère les données de l'array qu'on vient de générer via explode
    $controllerName = $dispatcherInformations[0];
    $methodName = $dispatcherInformations[1];
}


// On instancie notre classe AltoRouter à partir de la variable $controllerName car elle contient le nom de la classe existante
$controller = new $controllerName();

// Chargement de la méthode de notre contrôleur afin d'afficher notre views correspondante
$controller->$methodName($match['params']);