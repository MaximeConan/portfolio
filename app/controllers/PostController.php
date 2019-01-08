<?php

class PostController
{
    public function getPost($parameters)
    {
        $postId = $parameters['id'];

        $dbData = new DBData_Blog;

        $post = $dbData->getPost($postId);
        dump($postId);
        $this->show(
            'single-article',
            [
                'post' => $post
            ]
        );

    }
    private function show($viewName, $viewVars = [])
    {
        include __DIR__ . '/../templates/header.php';
        include __DIR__ . '/../templates/' . $viewName . '.php';
        include __DIR__ . '/../templates/footer.php';
    } 
}