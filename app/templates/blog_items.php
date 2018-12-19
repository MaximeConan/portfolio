<?php
include __DIR__ . '/../classes/Category_Blog.php';
include __DIR__ . '/../classes/Single_Blog.php';
include __DIR__ . '/../classes/DBData_Blog.php';
$dbData = new DBData_Blog();

$categoriesBlogList = $dbData->getCategoriesBlogList();

$postList = $dbData->getPostsList();
?>

<?php foreach ($postList as $post): ?>
<div class="col-lg-4 mb-4">
    <div class="blog-post">
        <img src="images/bkg/bkg-header.jpg" alt="description de l'article">
        <div class="p-3">
            <p class="meta-categorie"><?= $post->category; ?></p>
            <h3><?= $post->title; ?></h3>
            <p><?= $post->resume; ?></p>
        <p><a href="single-article.php?id=<?= $post->id ?>">Lire la suite</a></p>

        </div>
    </div>
</div>
<?php endforeach; ?>