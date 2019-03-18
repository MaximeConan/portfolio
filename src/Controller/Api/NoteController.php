<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class NoteController extends AbstractController
{
    /**
     * @Route("/api/note", name="api_note")
     */
    public function index()
    {
        return $this->render('api/note/index.html.twig', [
            'controller_name' => 'NoteController',
        ]);
    }
}
