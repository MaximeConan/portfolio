<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class RecipeController extends AbstractController
{
    /**
     * @Route("/api/recipe", name="api_recipe")
     */
    public function index()
    {
        return $this->render('api/recipe/index.html.twig', [
            'controller_name' => 'RecipeController',
        ]);
    }
}
