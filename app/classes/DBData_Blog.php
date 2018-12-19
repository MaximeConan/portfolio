<?php

class DBData_Blog
{
    private $pdo;

    public function __construct()
    {
        $dsn = 'mysql:host=localhost;dbname=site-personnel;charset=utf8';
        $username = 'root';
        $password = '';
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
        $postsListQuery = '
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

        $postsListQueryStatement = $this->pdo->query($postsListQuery);
        $postsListQueryResults = $postsListQueryStatement->fetchAll(PDO::FETCH_ASSOC);
    
        $postsList = [];
    
        foreach ($postsListQueryResults as $postData) {
            $postList[$postData['id']] = new Post(
                $postData['id'],
                $postData['title'],
                $postData['resume'],
                $postData['content'],
                $postData['publishDate'],
                $postData['categoryBlogName']
            );
        }  

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

    $postQueryStatement = $this->pdo->query($postQuery);
    // Pas de fetchAll car on ne veut afficher qu'un seul résultat (un article sur la page)
    $postData = $postQueryStatement->fetch(PDO::FETCH_ASSOC);

    $post = new Post (
        $postData['id'],
        $postData['title'],
        $postData['resume'],
        $postData['content'],
        $postData['publishDate'],
        $postData['categoryBlogName']
    );

    return $post; // On retourne le tableau désormais remplit avec le foreach
    }
}
