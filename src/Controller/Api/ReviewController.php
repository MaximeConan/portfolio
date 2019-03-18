<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ReviewController extends AbstractController
{
    /**
     * @Route("/api/review", name="api_review")
     */
    public function index()
    {
        return $this->render('api/review/index.html.twig', [
            'controller_name' => 'ReviewController',
        ]);
    }
}
