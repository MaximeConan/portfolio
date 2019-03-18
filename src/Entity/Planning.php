<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlanningRepository")
 */
class Planning
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $mealDay;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mealTime;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Recipe")
     * @ORM\JoinColumn(nullable=false)
     */
    private $recipe;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="plannings")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMealDay(): ?\DateTimeInterface
    {
        return $this->mealDay;
    }

    public function setMealDay(\DateTimeInterface $mealDay): self
    {
        $this->mealDay = $mealDay;

        return $this;
    }

    public function getMealTime(): ?string
    {
        return $this->mealTime;
    }

    public function setMealTime(string $mealTime): self
    {
        $this->mealTime = $mealTime;

        return $this;
    }

    public function getRecipe(): ?Recipe
    {
        return $this->recipe;
    }

    public function setRecipe(?Recipe $recipe): self
    {
        $this->recipe = $recipe;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
