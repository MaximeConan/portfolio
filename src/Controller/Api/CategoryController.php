<?php

namespace App\Controller\Api;

use App\Entity\Category;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    /**
     * @Route("/api/category/{slug}", name="api_category_show", methods={"GET"})
     */
    public function show(Category $category): Response
    {
        return $this->render('api/category/show.html.twig', [
            'category' => $category,
        ]);
    }
}
