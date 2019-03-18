<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;

class UserController extends AbstractController
{
    /**
    * @Route("/user", name="user")
    */
    public function fav(UserRepository $repo)
    {
        $user = $repo->find(1);
        $favoris = $user->getFavoris();

        $Userfavoris = [''];

        foreach($favoris as $favori) {
        $Userfavoris = $favori ;
        }

        header('Access-Control-Allow-Origin: *');

        return $this->json($Userfavoris);
    }
}