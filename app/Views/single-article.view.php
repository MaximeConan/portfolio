<?php
    $post = $viewVars['post'];
?>
    <!-- Page Content -->
    <div class="container single-post">

      <div class="row">

        <!-- Post Content Column -->
        <div class="col-lg-8 mx-auto">

          <!-- Title -->
          <h1 class="mt-4"><?= $post->getTitle() ?></h1>

          <hr>

          <!-- Date/Time -->
          <p class="date"><?= $post->getPublishDate() ?></p>

          <hr>

          <!-- Preview Image -->
          <img src="<?= getAbsolutePath('/images/bkg/bkg-header.jpg')?>" alt="description de l'article" class="main-img">

          <hr>

          <!-- Post Content -->
          <blockquote class="lead"><?= $post->getResume() ?></blockquote>

        <div class="post-content">
            <?= $post->getContent() ?>
        </div>

          <hr>
        </div>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->