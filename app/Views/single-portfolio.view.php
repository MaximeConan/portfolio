<?php
    $portfolio = $viewVars['portfolio'];
    dump($portfolio);
?>
<div class="container">
    <div class="row">
        <div class="col-lg-12  mb-4">
            <img src="<?= getAbsolutePath($portfolio->getImage()) ?>">
                <p><?= $portfolio->getCategoryPortfolioName() ?></p>
                <p><?= $portfolio->getTitle() ?></p>
                <p><?= $portfolio->getContent() ?></p>
        </div>
    </div>
</div>