<?php

namespace Portfolio\Models;

use Portfolio\Models\CategoryPortfolio;

use Portfolio\Models\SinglePortfolio;

use PDO;

class DBData_Portfolio
{
    private $pdo;

    public function __construct()
    {
        $dsn = 'mysql:host=localhost;dbname=site-personnel;charset=utf8';
        $username = 'root';
        $password = 'Ereul9Aeng';
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
        ];

        $this->pdo = new PDO($dsn, $username, $password, $options);
    }

    public function getCategoriesPortfolioList()
    {
        $categoriesListQuery = '
        SELECT 
            id,
            name
        FROM category_portfolio
        ';

        $categoriesListQueryStatement = $this->pdo->query($categoriesListQuery);
        $categoriesListQueryResults = $categoriesListQueryStatement->fetchAll(PDO::FETCH_ASSOC);

        $categoriesList = []; // Création du tableau

        foreach ($categoriesListQueryResults as $categoryData) {
            $categoriesList[$categoryData['id']] = new CategoryPortfolio($categoryData['name']);
        }

        return $categoriesList; // On retourne le tableau désormais remplit avec le foreach
    }

    public function getPortfolioList()
    {
        $portfolioListQuery = '
        SELECT 
            portfolio.id,
            portfolio.title,
            portfolio.content,
            portfolio.publish_date AS publishDate,
            portfolio.image,
            portfolio.category_filter AS categoryFilter,
            category_portfolio.name AS categoryPortfolioName
        FROM portfolio
        JOIN category_portfolio ON category_portfolio.id = portfolio.category_id;
        ';

        $portfolioListDetailsQueryStatement = $this->pdo->query($portfolioListQuery);

        $portfolioListDetailsQueryStatement->setFetchMode(
            PDO::FETCH_CLASS,
            'Portfolio\Models\SinglePortfolio'
        );
    
        $portfolioList = $portfolioListDetailsQueryStatement->fetchAll();
    
        return $portfolioList;
    }

    public function getPortfolio($portfolioId)
    {
    $portfolioQuery = '
        SELECT 
            `portfolio`.`id`,
            `portfolio`.`title`,
            `portfolio`.`content`,
            `portfolio`.`publish_date` AS publishDate,
            `portfolio`.`image`,
            `portfolio`.`category_filter` AS categoryFilter,
            `category_portfolio`.`name` AS categoryPortfolioName
        FROM `portfolio`
        JOIN `category_portfolio` ON `category_portfolio`.`id` = `portfolio`.`category_id`
        WHERE `portfolio`.`id` = ' . $portfolioId
    ;

    $portfolioDetailsQueryStatement = $this->pdo->query($portfolioQuery);

    $portfolioDetailsQueryStatement->setFetchMode(
        PDO::FETCH_CLASS,
        'Portfolio\Models\SinglePortfolio'
    );

    $portfolio = $portfolioDetailsQueryStatement->fetch();

    return $portfolio;
    }

}
