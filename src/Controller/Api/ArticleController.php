<?php

namespace App\Controller\Api;

use App\Entity\Article;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

     /**
     * @Route("/api/article/{slug}", name="api_article_show", methods={"GET"})
     */
    public function show(Article $article): Response
    {
        return $this->render('api/article/show.html.twig', [
            'article' => $article,
        ]);
    }
}
