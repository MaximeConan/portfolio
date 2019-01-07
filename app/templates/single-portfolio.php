<?php
include __DIR__ . '/../classes/Category_Portfolio.php';
include __DIR__ . '/../classes/Single_Portfolio.php';
include __DIR__ . '/../classes/DBData_Portfolio.php';
$dbData = new DBData_Portfolio();

$portfolio = $dbData->getPortfolio();
$categoriesPortfolioList = $dbData->getCategoriesPortfolioList();

if (isset($_GET['id'])) {
    $portfolio = intval($_GET['id']);
}

dump($portfolio);
?>
<div class="container">
    <div class="row">
        <div class="col-lg-12  mb-4">
            <img src="<?= getAbsolutePath($portfolio->image) ?>">
                <p><?= $portfolio->category; ?></p>
                <p><?= $portfolio->title; ?></p>
                <p><?= $portfolio->content ?></p>
        </div>
    </div>
</div>