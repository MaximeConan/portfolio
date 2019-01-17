<?php

namespace Portfolio;

use AltoRouter;

class Application
{
    /**
     * @var Application
     */
    private static $instance;

    /**
     * @var AltoRouter
     */
    private $router;

    /**
     * @var boolean
     */
    private $hasRun = false;

    /**
     * @return Application
     */
    public static function getInstance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new Application;
        }

        return self::$instance;
    }

    private function __construct()
    {
        $this->router = new AltoRouter;
        $this->router->setBasePath($_SERVER['BASE_URI']);
        
        // Déclarer les routes
        $this->mapRoutes();
    }

    /**
     * @return void
     */
    private function mapRoutes()
    {
        $this->router->map('GET', '/', 'Portfolio\Controllers\MainController#home', 'home');
        $this->router->map('GET', '/parcours', 'Portfolio\Controllers\MainController#parcours', 'parcours');
        $this->router->map('GET', '/portfolio', 'Portfolio\Controllers\MainController#portfolio', 'portfolio');
        $this->router->map('GET', '/blog', 'Portfolio\Controllers\MainController#blog', 'blog');
        $this->router->map('GET', '/contact', 'Portfolio\Controllers\MainController#contact', 'contact');
        $this->router->map('GET', '/article/[i:id]', 'Portfolio\Controllers\BlogController#getPost', 'get_post');
        $this->router->map('GET', '/projet/[i:id]', 'Portfolio\Controllers\PortfolioController#getPortfolio', 'get_portfolio');
    }

    public function run()
    {
        // Dispatcher vers le bon contrôleur / méthode
        if (!$this->hasRun) {
            $this->dispatch();

            $this->hasRun = true;
        }
    }

    private function dispatch()
    {
        $match = $this->router->match();

        if ($match === false) {
            $controllerName = 'Portfolio\Controllers\ErrorController';
            $methodName = 'page404';

            $urlParameters = [];
        } else {
            // http://php.net/list
            list($controllerName, $methodName) = explode('#', $match['target']);

            $urlParameters = $match['params'];
        }

        $controller = new $controllerName($this->router);

        $controller->$methodName($match['params']);

        // http://php.net/call_user_func_array
        // http://php.net/manual/fr/language.types.callable.php
        // call_user_func_array(
        //     [$controller, $methodName],
        //     $urlParameters
        // );
    }
}
