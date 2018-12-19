<?php
include __DIR__ . '/../classes/Category_Blog.php';
include __DIR__ . '/../classes/Single_Blog.php';
include __DIR__ . '/../classes/DBData_Blog.php';
$dbData = new DBData_Blog();

$post = $dbData->getPost();
$categoriesBlogList = $dbData->getCategoriesBlogList();

if (isset($_GET['id'])) {
    $articleId = intval($_GET['id']);
}

dump($post);

?>

<div class="container pt-5 pb-5">
    <div class="row">
        <div class="col-lg-12 mb-4">
            <div class="blog-post">
                <img src="../images/bkg/bkg-header.jpg" alt="description de l'article">
                <div class="p-3">
                    <p class="meta-categorie">
                    <?php
                    foreach ($categoriesBlogList as $category) {
                        $category->getName();
                    }
                    ?>
                     </p>
                    <h1><?= $post->title ?></h1>
                    <h2 class="pb-2">Résumé de l'article :</h2>
                    <p class="font-weight-bold"><?= $post->resume ?></p>
                    <h2 class="pb-2">Contenu de l'article :</h2>
                    <p><?= $post->content ?></p>
                </div>
            </div>
        </div>
    </div>
</div>