<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\IngredientRepository")
 */
class Ingredient
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("recipes")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("recipes")
     */
    private $unit;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\RecipeIngredient", mappedBy="ingredient")
     */
    private $recipeIngredients;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Intolerance", inversedBy="ingredients")
     */
    private $intolerences;

    public function __construct()
    {
        $this->recipeIngredients = new ArrayCollection();
        $this->intolerences = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getUnit(): ?string
    {
        return $this->unit;
    }

    public function setUnit(string $unit): self
    {
        $this->unit = $unit;

        return $this;
    }

    /**
     * @return Collection|RecipeIngredient[]
     */
    public function getRecipeIngredients(): Collection
    {
        return $this->recipeIngredients;
    }

    public function addRecipeIngredient(RecipeIngredient $recipeIngredient): self
    {
        if (!$this->recipeIngredients->contains($recipeIngredient)) {
            $this->recipeIngredients[] = $recipeIngredient;
            $recipeIngredient->setIngredient($this);
        }

        return $this;
    }

    public function removeRecipeIngredient(RecipeIngredient $recipeIngredient): self
    {
        if ($this->recipeIngredients->contains($recipeIngredient)) {
            $this->recipeIngredients->removeElement($recipeIngredient);
            // set the owning side to null (unless already changed)
            if ($recipeIngredient->getIngredient() === $this) {
                $recipeIngredient->setIngredient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Intolerance[]
     */
    public function getIntolerences(): Collection
    {
        return $this->intolerences;
    }

    public function addIntolerence(Intolerance $intolerence): self
    {
        if (!$this->intolerences->contains($intolerence)) {
            $this->intolerences[] = $intolerence;
        }

        return $this;
    }

    public function removeIntolerence(Intolerance $intolerence): self
    {
        if ($this->intolerences->contains($intolerence)) {
            $this->intolerences->removeElement($intolerence);
        }

        return $this;
    }
}
