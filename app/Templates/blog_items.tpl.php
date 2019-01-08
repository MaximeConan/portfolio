<?php
$dbData = new DBData_Blog();

$categoriesBlogList = $dbData->getCategoriesBlogList();

$postList = $dbData->getPostsList();

dump($postList);
?>

<?php foreach ($postList as $post): ?>
<div class="col-lg-4 mb-4">
    <div class="blog-post">
        <img src="<?= getAbsolutePath('/images/bkg/bkg-header.jpg')?>" alt="description de l'article">
        <div class="p-3">
            <p class="meta-categorie"><?= $post->getCategoryBlogName(); ?></p>
            <h3><?= $post->getTitle(); ?></h3>
            <p><?= $post->getResume(); ?></p>
        <p><a href="article/<?= $post->getId() ?>">Lire la suite</a></p>

        </div>
    </div>
</div>
<?php endforeach; ?>