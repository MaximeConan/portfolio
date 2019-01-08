<?php

namespace Portfolio\Models;

class Portfolio
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
}