<?php

namespace Portfolio\Controllers;

use Portfolio\Controllers\CoreController;

class MainController extends CoreController
{
    public function home() 
    {
        $this->show('home');
    }

    public function parcours()
    {
        $this->show('parcours');  
    }

    public function portfolio()
    {
        $this->show('portfolio');
    }

    public function blog()
    {
        $this->show('blog'); 
    }

    public function contact()
    {
        $this->show('contact'); 
    }
}