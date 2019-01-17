<?php

namespace Portfolio\Controllers;

use Portfolio\Controllers\CoreController;

use Portfolio\Models\DBData_Blog;

class BlogController extends CoreController
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