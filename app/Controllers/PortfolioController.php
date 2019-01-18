<?php

namespace Portfolio\Controllers;

use Portfolio\Controllers\CoreController;

use Portfolio\Utils\Database;

use Portfolio\Models\PortfolioModel;

class PortfolioController extends CoreController
{
    public function getPortfolio($parameters)
    {
        $portfolioId = $parameters['id'];
   

        $dbData = new PortfolioModel;

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