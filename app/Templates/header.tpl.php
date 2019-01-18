<?php


?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="<?= getAbsolutePath('css/reset.css')?>">
    <link rel="stylesheet" href="<?= getAbsolutePath('css/style.css')?>">
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

    <!-- Download Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Noto+Sans+SC:300,700,900" rel="stylesheet">  

    
    <!-- Download Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">



    <title>Portfolio - Maxime Conan</title>
  </head>  
  
  <body>
    <header>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <h1 id="logo">Maxime</h1>
                    <p class="baseline">Le web, vu différement</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="hvr-sweep-to-right nav-item"><a class="nav-link" href="<?= getAbsolutePath('/')?>"><i class="fas fa-home icon-nav"></i>Accueil</a></li>
                        <li class="hvr-sweep-to-right nav-item"><a class="nav-link" href="<?= getAbsolutePath('/parcours')?>"><i class="fas fa-user icon-nav"></i>Mon parcours</a></li>
                        <li class="hvr-sweep-to-right nav-item"><a class="nav-link" href="<?= getAbsolutePath('/portfolio')?>"><i class="fas fa-tv icon-nav"></i>Portfolio</a></li>
                        <li class="hvr-sweep-to-right nav-item"><a class="nav-link" href="<?= getAbsolutePath('/blog')?>"><i class="fas fa-list icon-nav"></i>Blog</a></li>
                        <li class="hvr-sweep-to-right nav-item"><a class="nav-link" href="<?= getAbsolutePath('/contact')?>"><i class="fas fa-envelope icon-nav"></i>Contactez-moi</a></li>
                        <li class="hvr-sweep-to-right nav-item"><a class="nav-link text-light" href="<?= getAbsolutePath('#')?>"><i class="fas fa-download icon-nav"></i>Téléchargez mon CV</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    </header>