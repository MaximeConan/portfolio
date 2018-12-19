<?php
include __DIR__ . '/../classes/Category_Portfolio.php';
include __DIR__ . '/../classes/Single_Portfolio.php';
include __DIR__ . '/../classes/DBData_Portfolio.php';
$dbData = new DBData_Portfolio();

$categoriesPortfolioList = $dbData->getCategoriesPortfolioList();

$portfolioList = $dbData->getPortfolioList();
?>

<div class="text-center portfolio_filters pb-5">
    <button class="btn btn-default filter-button" data-filter="all">Tout</button>
    <button class="btn btn-default filter-button" data-filter="htmlcss">HTML/CSS</button>
    <button class="btn btn-default filter-button" data-filter="javascript">Javascript</button>
    <button class="btn btn-default filter-button" data-filter="php">PHP</button>
    <button class="btn btn-default filter-button" data-filter="wordpress">Wordpress</button>
</div>

<?php foreach ($portfolioList as $portfolio): ?>
<div class="col-lg-4 text-light mb-4 filter <?= $portfolio->category_filter ?>">
    <div class="portfolio background-img" style="background-image:url(<?= $portfolio->image ?>);">
        <p><?= $portfolio->category; ?></p>
        <p><?= $portfolio->title; ?></p>
        <p><a href="projet/<?= $portfolio->id ?>">Voir le projet</a></p>
    </div>
</div>
<?php endforeach; ?>
