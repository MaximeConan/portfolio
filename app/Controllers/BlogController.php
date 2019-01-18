<?php

namespace Portfolio\Controllers;

use Portfolio\Controllers\CoreController;

use Portfolio\Utils\Database;

use Portfolio\Models\BlogModel;


class BlogController extends CoreController
{
    public function getPost($parameters)
    {
        $postId = $parameters['id'];

        $dbData = new BlogModel;

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