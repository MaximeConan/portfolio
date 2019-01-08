<?php

namespace Portfolio\Controllers;

class CoreController
{
    /**
     * @var AltoRouter
     */
    private $router;

    /**
     * @param AltoRouter $router
     */
    public function __construct(\Altorouter $router)
    {
        $this->router = $router;
    }

    /**
     * @param string $viewName Le nom de la vue
     * @param array $viewVars La liste des données à envoyer à la vue
     * 
     * @return void
     */
    protected function show($viewName, $viewVars = [])
    {
        $router = $this->router;

        include __DIR__ . '/../Templates/header.tpl.php';
        include __DIR__ . '/../Views/' . $viewName . '.view.php';
        include __DIR__ . '/../Templates/footer.tpl.php';
    }
}