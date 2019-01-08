<?php

namespace Portfolio\Controllers;

class PostController extends CoreController
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
}