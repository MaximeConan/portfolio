<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PlanningController extends AbstractController
{
    /**
     * @Route("/api/planning", name="api_planning")
     */
    public function index()
    {
        return $this->render('api/planning/index.html.twig', [
            'controller_name' => 'PlanningController',
        ]);
    }
}
