<?php
    $portfolio = $viewVars['portfolio'];
?>

    <!-- Page Content -->
    <div class="container single-portfolio">

      <div class="row">

        <!-- portfolio Content Column -->
        <div class="col-lg-8 mx-auto">

          <!-- Title -->
          <h1 class="mt-4"><?= $portfolio->getTitle() ?></h1>

          <hr>

          <!-- Date/Time -->
          <p class="category"><?= $portfolio->getCategoryPortfolioName() ?></p>

          <hr>

          <!-- Preview Image -->
          <img src="<?= getAbsolutePath($portfolio->getImage()) ?>" alt="description du projet" class="main-img">

          <hr>

        <div class="portfolio-content">
        <?= $portfolio->getContent() ?>
        </div>

          <hr>
        </div>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->