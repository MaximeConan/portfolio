<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ShoppingListController extends AbstractController
{
    /**
     * @Route("/api/shopping/list", name="api_shopping_list")
     */
    public function index()
    {
        return $this->render('api/shopping_list/index.html.twig', [
            'controller_name' => 'ShoppingListController',
        ]);
    }
}
