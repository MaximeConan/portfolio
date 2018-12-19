<?php

class PortfolioController
{
    public function getPortfolio($parameters) 
    {   
        dump($parameters);
        $portfolioId = $parameters['id'];
        $this->show('single-portfolio');
    }

    private function show($viewName)
    {
        include __DIR__ . '/../templates/header.php';
        include __DIR__ . '/../templates/' . $viewName . '.php';
        include __DIR__ . '/../templates/footer.php';
    } 
}