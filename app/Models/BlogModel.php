<?php

namespace Portfolio\Models;

use Portfolio\Utils\Database;

use Portfolio\Models\CategoryBlog;

use PDO;

class BlogModel
{
    private $id;
    private $title;
    private $resume;
    private $content;
    private $categoryBlogName;
    private $publishDate;


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
     * Get the value of resume
     */ 
    public function getResume()
    {
        return $this->resume;
    }

    /**
     * Set the value of resume
     *
     * @return  self
     */ 
    public function setResume($resume)
    {
        $this->resume = $resume;

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
     * Get the value of categoryBlogName
     */ 
    public function getCategoryBlogName()
    {
        return $this->categoryBlogName;
    }

    /**
     * Set the value of categoryBlogName
     *
     * @return  self
     */ 
    public function setCategoryBlogName($categoryBlogName)
    {
        $this->categoryBlogName = $categoryBlogName;

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
     * @return self
     */ 
    public function setPublishDate($publishDate)
    {
        $this->publishDate = $publishDate;

        return $this;
    }

    public function getCategoriesBlogList()
    {
        $categoriesBlogListQuery = '
        SELECT 
            id,
            name
        FROM category_blog
        ';

        $databaseHandler = Database::getInstance()->getDatabaseHandler();
        $categoriesBlogListQueryStatement = $databaseHandler->query($categoriesBlogListQuery);

        $categoriesBlogListQueryResults = $categoriesBlogListQueryStatement->fetchAll(PDO::FETCH_ASSOC);

        $categoriesBlogList = []; // Création du tableau

        foreach ($categoriesBlogListQueryResults as $categoryBlogData) {
            $categoriesBlogList[$categoryBlogData['id']] = new CategoryBlog($categoryBlogData['name']);
        }

        return $categoriesBlogList; // On retourne le tableau désormais remplit avec le foreach
    }

    public function getPostsList()
    {
        $postListQuery = '
        SELECT 
            post.id,
            post.title,
            post.resume,
            post.content,
            post.publish_date AS publishDate,
            category_blog.name AS categoryBlogName
        FROM post
        JOIN category_blog ON category_blog.id = post.category_id;
        ';

        $databaseHandler = Database::getInstance()->getDatabaseHandler();
        $postListDetailsQueryStatement = $databaseHandler->query($postListQuery);

        $postListDetailsQueryStatement->setFetchMode(
            PDO::FETCH_CLASS,
            'Portfolio\Models\BlogModel'
        );
    
        $postList = $postListDetailsQueryStatement->fetchAll();
    
        return $postList;
    }

    public function getPost($postId)
    {
        $postQuery = '
        SELECT 
            post.id,
            post.title,
            post.resume,
            post.content,
            post.publish_date AS publishDate,
            category_blog.name AS categoryBlogName
        FROM post
        JOIN category_blog ON category_blog.id = post.category_id
        WHERE post.id = ' . $postId
        ;
        
        $databaseHandler = Database::getInstance()->getDatabaseHandler();
        $postDetailsQueryStatement = $databaseHandler->query($postQuery);

        $postDetailsQueryStatement->setFetchMode(
            PDO::FETCH_CLASS,
            'Portfolio\Models\BlogModel'
        );

        $post = $postDetailsQueryStatement->fetch();

        return $post;
    }
}