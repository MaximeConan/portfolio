<?php

class Portfolio {
    public $id;
    public $title;
    public $content;
    public $date;
    public $category;
    public $category_filter;
    public $image;

    public function __construct($id='', $title='', $content='', $date='', $category='', $category_filter="", $image="") {
        $this->id = $id;
        $this->title = $title;
        $this->content = $content;
        $this->date = $date;
        $this->category = $category;
        $this->category_filter = $category_filter;
        $this->image = $image;
    }

    public function getDateFr() {
        return date('d/m/Y', strtotime($this->date));
    }
}