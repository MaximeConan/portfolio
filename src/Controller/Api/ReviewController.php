<?php

namespace App\Controller\Api;

use App\Entity\Review;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    /**
     * @Route("/api/review/add", name="api_review_new", methods={"POST"})
     */
    public function add(Request $request): Response
    {
        $review = new Review();
        $form = $this->createForm(ReviewType::class, $review);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($review);
            $entityManager->flush();

            return $this->redirectToRoute('api_review_index');
        }

        return $this->render('api/review/new.html.twig', [
            'review' => $review,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/api/review/{slug}/edit", name="api_review_edit", methods={"POST"})
     */
    public function edit(Request $request, Review $review): Response
    {
        $form = $this->createForm(ReviewType::class, $review);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('api_review_index', [
                'id' => $review->getId(),
            ]);
        }

        return $this->render('api/review/edit.html.twig', [
            'review' => $review,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/api/reveiew/{id}/delete", name="api_review_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Review $review): Response
    {
        if ($this->isCsrfTokenValid('delete'.$review->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($review);
            $entityManager->flush();
        }

        return $this->redirectToRoute('api_review_index');
    }
}
