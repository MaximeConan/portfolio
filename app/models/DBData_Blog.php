<?php

class DBData_Blog
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

    public function getCategoriesBlogList()
    {
        $categoriesBlogListQuery = '
        SELECT 
            id,
            name
        FROM category_blog
        ';

        $categoriesBlogListQueryStatement = $this->pdo->query($categoriesBlogListQuery);
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

        $postListDetailsQueryStatement = $this->pdo->query($postListQuery);

        $postListDetailsQueryStatement->setFetchMode(
            PDO::FETCH_CLASS,
            'Post'
        );
    
        $postList = $postListDetailsQueryStatement->fetchAll();
    
        return $postList;
    }

    public function getPost()
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
    JOIN category_blog ON category_blog.id = post.category_id;
    WHERE post.id = 1;
    ';

    $postDetailsQueryStatement = $this->pdo->query($postQuery);

    $postDetailsQueryStatement->setFetchMode(
        PDO::FETCH_CLASS,
        'Post'
    );

    $post = $postDetailsQueryStatement->fetch();

    return $post;
    }
}
