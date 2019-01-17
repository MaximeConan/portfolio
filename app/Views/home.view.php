<main>
        <section class="container-fluid presentation background-img bkg-img-padding" style="background-image:url(images/bkg/bkg-header.jpg); position : relative;">
            	<div class="container">
                    <div class="row">
                    	    <div class="col-lg-10 text-light text-center mx-auto">
                    	        <h1 class="hero">Bonjour, je suis <span class="secondary-color">Maxime Conan</span>.<br/>Développeur full stack.</h1>
                    	        <p style="padding-bottom: 3em;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ea, corporis aliquam in repudiandae autem delectus numquam quas eius iste? Harum excepturi praesentium non officia.</p>
                    	        <a href="" class="col-lg-4 btn-border hvr-sweep-to-right">Contactez-moi</a>

                    	    </div>
                    	</div>
                </div>
        </section> <!-- End - container-fluid -->

        <section class="container-fluid gray-light  pt-5 pb-5">
            <div class="container text-center">
                <div class="row">
                    <div class="col-lg-12 pb-3">
                        <h2>
                            Squarespace development (my focus)
                        </h2>
                        <p class="large">
                            Let's be honest and cut through the marketing fluff. You need a website that looks amazing and actually works. Bottom line, that's what I do. And if you want to learn more about working with me, pick up the phone and give me a call (or email).
                        </p>
                    </div>
                </div>
            </div>
        </section> <!-- End - container-fluid -->

        <section class="container text-center pt-5 pb-5">
            <div class="row">
                <div class="col-lg-12 pb-3">
                        <h2>I provide high quality Squarespace code snippets, add-ons, plugins, video training, tips, and more.</h2>
                </div>
                <div class="col-lg-4">
                    <img src="images/icon.png" alt="">
                    <h4 class="pt-4 pb-4">Code snippets</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis iusto laborum!</p>
                </div>
                <div class="col-lg-4">
                    <img src="images/icon.png" alt="">
                    <h4 class="pt-4 pb-4">Design integration</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quisquam repellat exercitationem!</p>
                </div>
                <div class="col-lg-4">
                    <img src="images/icon.png" alt="">
                    <h4 class="pt-4 pb-4">100% responsive</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo nesciunt quidem?</p>
                </div>
            </div>
        </section>

        <section class="container-fluid gray-light pt-5 pb-5 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 pb-3">
                        <h2>My latest Squarespace projects</h2>
                    </div>
                    <?php include (__DIR__ .'/../Templates/portfolio_items.tpl.php');?>
                    
                </div>
            </div>
        </section>

        <section class="container-fluid presentation background-img bkg-img-padding" style="background-image:url(images/bkg/bkg-header.jpg); position : relative;">
            <div class="container">
                <div class="row">
                        <div class="col-lg-10 text-light text-center mx-auto">
                            <h1 class="hero">Vous souhaitez me contacter ? Utilisez mon formulaire dédié</h1>
                            <p style="padding-bottom: 3em;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ea, corporis aliquam in repudiandae autem delectus numquam quas eius iste? Harum excepturi praesentium non officia.</p>
                            <a href="" class="col-lg-4 btn-border hvr-sweep-to-right">Contactez-moi</a>

                        </div>
                    </div>
            </div>
        </section> <!-- End - container-fluid -->

        <section class="container-fluid gray-light pt-5 pb-5 text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 pb-3">
                            <h2>My latest blog posts</h2>
                        </div> 
                        <?php include (__DIR__ .'/../Templates/blog_items.tpl.php');?>                         
                </div>
            </section>
    </main>