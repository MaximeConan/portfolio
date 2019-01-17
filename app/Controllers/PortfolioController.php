<?php

namespace Portfolio\Controllers;

use Portfolio\Controllers\CoreController;

use Portfolio\Models\DBData_Portfolio;

class PortfolioController extends CoreController
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
}