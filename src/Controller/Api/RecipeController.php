<?php

namespace App\Controller\Api;

use App\Repository\RecipeRepository;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;


class RecipeController extends AbstractController
{
    /**
    * @Route("/recipe", name="recipe")
    */
    public function index(RecipeRepository $repo)
    {
        $recipes = $repo->findAll();

        header('Access-Control-Allow-Origin: *');

        return $this->json($recipes, 200, [], [
        'groups' => ['recipes'],
        ]);
    }
}
