<?php
$dbData = new DBData_Blog();

$post = $dbData->getPost();
$categoriesBlogList = $dbData->getCategoriesBlogList();

dump($post);

?>

<div class="container pt-5 pb-5">
    <div class="row">
        <div class="col-lg-12 mb-4">
            <div class="blog-post">
                <img src="<?= getAbsolutePath('/images/bkg/bkg-header.jpg')?>" alt="description de l'article">
                <div class="p-3">
                    <p class="meta-categorie">
                    <?php
                    foreach ($categoriesBlogList as $category) {
                        $category->getName();
                    }
                    ?>
                     </p>
                    <h1><?= $post->getTitle() ?></h1>
                    <h2 class="pb-2">Résumé de l'article :</h2>
                    <p class="font-weight-bold"><?= $post->getResume() ?></p>
                    <h2 class="pb-2">Contenu de l'article :</h2>
                    <p><?= $post->getContent() ?></p>
                </div>
            </div>
        </div>
    </div>
</div>