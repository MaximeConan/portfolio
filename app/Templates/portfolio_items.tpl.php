<?php

use Portfolio\Models\DBData_Portfolio;

use Portfolio\Models\CategoryPortfolio;

use Portfolio\Models\SinglePortfolio;

use Portfolio\Models\PDO;

$dbData = new DBData_Portfolio;

$categoriesPortfolioList = $dbData->getCategoriesPortfolioList();

$portfolioList = $dbData->getPortfolioList();

dump($portfolioList);
?>

<div class="text-center portfolio_filters pb-5">
    <button class="btn btn-default filter-button" data-filter="all">Tout</button>
    <button class="btn btn-default filter-button" data-filter="htmlcss">HTML/CSS</button>
    <button class="btn btn-default filter-button" data-filter="javascript">Javascript</button>
    <button class="btn btn-default filter-button" data-filter="php">PHP</button>
    <button class="btn btn-default filter-button" data-filter="wordpress">Wordpress</button>
</div>

<?php foreach ($portfolioList as $portfolio): ?>
<div class="col-lg-4 text-light mb-4 filter <?= $portfolio->getCategoryFilter() ?>">
    <div class="portfolio background-img" style="background-image:url(<?= getAbsolutePath($portfolio->getImage()) ?>);">
        <p><?= $portfolio->getCategoryPortfolioName(); ?></p>
        <p><?= $portfolio->getTitle(); ?></p>
        <p><a href="projet/<?= $portfolio->getId() ?>">Voir le projet</a></p>
    </div>
</div>
<?php endforeach; ?>
