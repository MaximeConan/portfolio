<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{
    /**
     * @Route("/api/article", name="api_article")
     */
    public function index()
    {
        return $this->render('api/article/index.html.twig', [
            'controller_name' => 'ArticleController',
        ]);
    }
}
