<?php

class PostController
{
    public function getPost($parameters) 
    {   
        dump($parameters);
        $postId = $parameters['id'];
        $this->show('single-article');
    }

    private function show($viewName)
    {
        include __DIR__ . '/../templates/header.php';
        include __DIR__ . '/../templates/' . $viewName . '.php';
        include __DIR__ . '/../templates/footer.php';
    } 
}