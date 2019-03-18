<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    /**
     * @Route("/api/category", name="api_category")
     */
    public function index()
    {
        return $this->render('api/category/index.html.twig', [
            'controller_name' => 'CategoryController',
        ]);
    }
}
