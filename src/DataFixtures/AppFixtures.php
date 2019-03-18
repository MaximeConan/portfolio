<?php

namespace App\DataFixtures;

use DateTime;
use Faker\Factory;
use App\Entity\Role;
use App\Entity\User;
use App\Entity\Recipe;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\Type;
use App\Entity\Etape;
use App\Entity\Ingredient;
use App\Entity\RecipeIngredient;
use App\Entity\Planning;

class AppFixtures extends Fixture
{

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }
    
    public function load(ObjectManager $manager)
    {
         // initialisation de l'objet Faker
        $faker = Factory::create('fr_FR');

        //On crée des roles
        $roleUser = new Role();
        $roleUser->setCode('ROLE_USER')
             ->setName('Membre');
        $manager->persist($roleUser);

        $roleManager = new Role();
        $roleManager->setCode('ROLE_MANAGER')
             ->setName('Content manager');
        $manager->persist($roleManager);

        $roleAdmin = new Role();
        $roleAdmin->setCode('ROLE_ADMIN')
             ->setName('Administrateur');
        $manager->persist($roleAdmin);


        //On crée des utilisateurs (Membres et un Admin)
        $users = [''];

        for( $i = 0; $i <= 4; $i++ ) {

            $users[$i] = new User();

            $password = $this->encoder->encodePassword($users[$i], 'toto');
            $gender = ['female', 'male'];

            $users[$i]->setEmail($faker->safeEmail)
                     ->setPassword($password)
                     ->setGender($gender[mt_rand(0,1)]);

            if( $i == 0 ) {
                $users[$i]->setRole($roleAdmin)
                         ->setUsername('Admin');
            } else {
                $users[$i]->setRole($roleUser)
                ->setUsername($faker->firstName()); 
            }

            $manager->persist($users[$i]);
        }

        //on crée des types de repas
        $types = [''];
        for( $i = 0; $i <= 2 ; $i++ ) {

            $types[$i] = new Type();

            if( $i == 0 ) {
                $types[$i]->setName('Entrée')
                          ->setSlug('entree');
            } elseif ( $i == 1 ) {
                $types[$i]->setName('Plat')
                          ->setSlug('plat');
            } else {
                $types[$i]->setName('dessert')
                          ->setSlug('dessert');
            }
            $manager->persist($types[$i]);
        }

        //On crée des ingredients
        $ingredients = [''];
        for( $i = 0; $i <= 20; $i++ ) {

            $ingredients[$i] = new Ingredient();

            $ingredients[$i]->setName(ucfirst($faker->word))
                            ->setUnit('unité');

            $manager->persist($ingredients[$i]);
        }

        //On crée des recettes
        $recipes = [''];
        for( $i = 0; $i <= 8; $i++ ) {

            $recipes[$i] = new Recipe();
            $recipes[$i]->setTitle(ucfirst(join(' ' , $faker->words(4, false))))
                       ->setCalorie($faker->numberBetween(100, 750))
                       ->setSlug($faker->slug)
                       ->setDifficulty(mt_rand(1,5))
                       ->setTime(mt_rand(10, 120). ' min')
                       ->setPicture($faker->imageUrl(800, 600, 'food'))
                       ->setCreatedAt($faker->dateTimeBetween('-1 year'))
                       ->setvalidated(true)
                       ->setType($types[mt_rand(0,2)])
                       ->setUser($users[mt_rand(0,4)]);

            $manager->persist($recipes[$i]);

            //On ajoute les étapes
            for( $j = 0; $j <= mt_rand(3, 8); $j++) {

                $etape = new Etape();
                $etape->setDescription(join(' ', $faker->paragraphs(3,false)))
                      ->setEtapeOrder($j)
                      ->setRecipe($recipes[$i]);

                      $manager->persist($etape);

            }

            //On ajoute des ingrédients à la recette et leur quantité
            for( $k = 0; $k <= mt_rand(4, 10); $k++) {
                
                $ingredientList = new RecipeIngredient();

                $ingredientList->setQuantity(mt_rand(1,6))
                               ->setRecipe($recipes[$i])
                               ->setIngredient($ingredients[mt_rand(0,20)]);

                $manager->persist($ingredientList);
            }

        }

        for( $j = 0; $j <= 4; $j++ ) {
            
            //On ajoute des favories aux utilisateurs
            for( $i = 0; $i <= mt_rand(0,1); $i++ ) {
                
                $users[$j]->addFavori($recipes[mt_rand(0, 8)]);

                $manager->persist($users[$j]);
            }

            //On ajoute des repas au planning des utilisateurs
            for( $i = 0; $i <= 13 ; $i++) {

                $planning = new Planning();
                $planning->setMealDay($faker->dateTimeBetween('-1 week'))
                         ->setRecipe($recipes[mt_rand(0,8)])
                         ->setUser($users[$j]);

                        if( ($i % 2) != 0) {
                            $planning->setMealTime('Déjeuner');
                        } else {
                            $planning->setMealTime('Diner');
                        }
                
                $manager->persist($planning);
            }
        }


        $manager->flush();
    }
}
