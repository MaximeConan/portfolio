<?php

class PortfolioController
{
    public function getPortfolio($parameters)
    {
        $portfolioId = $parameters['id'];
   

        $dbData = new DBData_Portfolio;

        $portfolio = $dbData->getPortfolio($portfolioId);
        dump($portfolioId);
        $this->show(
            'single-portfolio',
            [
                'portfolio' => $portfolio
            ]
        );    

    }
    private function show($viewName, $viewVars = [])
    {
        include __DIR__ . '/../templates/header.php';
        include __DIR__ . '/../templates/' . $viewName . '.php';
        include __DIR__ . '/../templates/footer.php';
    } 
}