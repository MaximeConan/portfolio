
<?php
include __DIR__ . '/../classes/Category_Portfolio.php';
include __DIR__ . '/../classes/Single_Portfolio.php';
include __DIR__ . '/../classes/DBData_Portfolio.php';
$dbData = new DBData_Portfolio();

$portfolio = $dbData->getPortfolioList();
$categoriesPortfolioList = $dbData->getCategoriesPortfolioList();

if (isset($_GET['id'])) {
    $portfolioId = intval($_GET['id']);
    $portfolio = $dbData->getPortfolio($portfolioId);
}

include 'templates/header.php'; 
?>

<div class="container">
    <div class="row">
        <div class="col-lg-12  mb-4">
            <div class="" style="">
            <img src="<?= $portfolio->image ?>">
                <p><?= $portfolio->category; ?></p>
                <p><?= $portfolio->title; ?></p>
                <p><?= $portfolio->content ?></p>
            </div>
        </div>
    </div>
</div>

<?php include 'templates/footer.php'; ?>