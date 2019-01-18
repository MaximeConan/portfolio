<?php

namespace Portfolio\Models;

use Portfolio\Utils\Database;

use Portfolio\Models\CategoryPortfolio;

use PDO;

class PortfolioModel
{
    private $id;
    private $title;
    private $content;
    private $categoryPortfolioName;
    private $publishDate;
    private $categoryFilter;
    private $image;

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of title
     */ 
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set the value of title
     *
     * @return  self
     */ 
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of content
     */ 
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set the value of content
     *
     * @return  self
     */ 
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get the value of categoryPortfolioName
     */ 
    public function getCategoryPortfolioName()
    {
        return $this->categoryPortfolioName;
    }

    /**
     * Set the value of categoryPortfolioName
     *
     * @return  self
     */ 
    public function setCategoryPortfolioName($categoryPortfolioName)
    {
        $this->categoryPortfolioName = $categoryPortfolioName;

        return $this;
    }

    /**
     * Get the value of publishDate
     */ 
    public function getPublishDate()
    {
        return $this->publishDate;
    }

    /**
     * Set the value of publishDate
     *
     * @return  self
     */ 
    public function setPublishDate($publishDate)
    {
        $this->publishDate = $publishDate;

        return $this;
    }

    /**
     * Get the value of categoryFilter
     */ 
    public function getCategoryFilter()
    {
        return $this->categoryFilter;
    }

    /**
     * Set the value of categoryFilter
     *
     * @return  self
     */ 
    public function setCategoryFilter($categoryFilter)
    {
        $this->categoryFilter = $categoryFilter;

        return $this;
    }

    /**
     * Get the value of image
     */ 
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set the value of image
     *
     * @return  self
     */ 
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    public function getCategoriesPortfolioList()
    {
        $categoriesListQuery = '
        SELECT 
            id,
            name
        FROM category_portfolio
        ';
        $databaseHandler = Database::getInstance()->getDatabaseHandler();
        $categoriesListQueryStatement = $databaseHandler->query($categoriesListQuery);

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

        $databaseHandler = Database::getInstance()->getDatabaseHandler();
        $portfolioListDetailsQueryStatement = $databaseHandler->query($portfolioListQuery);

        $portfolioListDetailsQueryStatement->setFetchMode(
            PDO::FETCH_CLASS,
            'Portfolio\Models\PortfolioModel'
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

        $databaseHandler = Database::getInstance()->getDatabaseHandler();
        $portfolioDetailsQueryStatement = $databaseHandler->query($portfolioQuery);

        $portfolioDetailsQueryStatement->setFetchMode(
            PDO::FETCH_CLASS,
            'Portfolio\Models\PortfolioModel'
        );

        $portfolio = $portfolioDetailsQueryStatement->fetch();

        return $portfolio;
    }
}