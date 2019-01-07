<?php

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

    public function getPortfolioList($portfolioId)
    {
        $portfolioListQuery = '
        SELECT 
            portfolio.id,
            portfolio.title,
            portfolio.content,
            portfolio.publish_date AS publishDate,
            portfolio.image,
            portfolio.category_filter,
            category_portfolio.name AS categoryPortfolioName
        FROM portfolio
        JOIN category_portfolio ON category_portfolio.id = portfolio.category_id;
        WHERE `product`.`id` = ' . $portfolioId
        ;

        $portfolioListQueryStatement = $this->pdo->query($portfolioListQuery);
        $portfolioListQueryResults = $portfolioListQueryStatement->fetchAll(PDO::FETCH_ASSOC);
    
        $portfolioList = [];
    
        foreach ($portfolioListQueryResults as $portfolioData) {
            $portfolioList[$portfolioData['id']] = new Portfolio(
                $portfolioData['id'],
                $portfolioData['title'],
                $portfolioData['content'],
                $portfolioData['publishDate'],
                $portfolioData['categoryPortfolioName'],
                $portfolioData['category_filter'],
                $portfolioData['image']
            );
        }  

        return $portfolioList;
    }

    public function getPortfolio()
    {
    $portfolioQuery = '
        SELECT 
            portfolio.id,
            portfolio.title,
            portfolio.content,
            portfolio.publish_date AS publishDate,
            portfolio.image,
            portfolio.category_filter,
            category_portfolio.name AS categoryPortfolioName
        FROM portfolio
        JOIN category_portfolio ON category_portfolio.id = portfolio.category_id;
    ';

    $portfolioLQueryStatement = $this->pdo->query($portfolioQuery);
    // Pas de fetchAll car on ne veut afficher qu'un seul résultat (un projet sur la page)
    $portfolioData = $portfolioLQueryStatement->fetch(PDO::FETCH_ASSOC);

    $portfolio = new portfolio (
        $portfolioData['id'],
        $portfolioData['title'],
        $portfolioData['content'],
        $portfolioData['publishDate'],
        $portfolioData['categoryPortfolioName'],
        $portfolioData['category_filter'],
        $portfolioData['image']
    );

    return $portfolio; // On retourne le tableau désormais remplit avec le foreach
    }

}
