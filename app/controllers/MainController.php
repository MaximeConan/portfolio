<?php

class MainController {
    public function home() {
        $this->show('home',
            [
                'title' => 'Fresh Coffe Shop',
                'activeMenuLink' => 'home'
             ]
        );
    }

    public function parcours() {
        $this->show('parcours',
            [
                'title' => 'Parcours - Fresh Coffe Shop',
                'activeMenuLink' => 'parcours'
            ]
        );  
    }

    public function portfolio() {
        $this->show('portfolio',
            [
                'title' => 'Products - Fresh Coffe Shop',
                'activeMenuLink' => 'products'
            ]
        );
    }

    public function blog() {
        $this->show('blog',
            [
                'title' => 'Store - Fresh Coffe Shop',
                'activeMenuLink' => 'store'
            ]
        ); 
    }

    public function contact() {
        $this->show('contact',
            [
                'title' => 'Store - Fresh Coffe Shop',
                'activeMenuLink' => 'store'
            ]
        ); 
    }

    private function show($viewName, $viewVars = []) {
        // $viewVars est disponible dans chaque fichier de vue
        include(__DIR__ . '/../templates/header.php');
        include(__DIR__ . '/../templates/' . $viewName . '.php');
        include(__DIR__ . '/../templates/footer.php');
    }
}